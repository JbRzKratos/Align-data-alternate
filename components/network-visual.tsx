"use client"

import React, { useRef, useEffect } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  cluster: number
  label: string
  alpha: number
}

interface Connection {
  from: Node
  to: Node
  life: number
  speed: number
  progress: number
}

export default function NetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Clusters configuration: 1 = Tech (blue), 2 = Healthcare (green), 3 = Finance (purple)
    const clusterColors = ["#00A8FF", "#00D084", "#6366F1"]
    const labels = [
      "Microsoft", "Google", "Stripe", "Apple", "Oracle",
      "Mayo Clinic", "Pfizer", "Novartis", "Kaiser", "Moderna",
      "Goldman Sachs", "Fidelity", "Visa", "BlackRock", "Coinbase"
    ]

    const nodes: Node[] = []
    const nodeCount = 50

    // Initialize nodes in clusters
    for (let i = 0; i < nodeCount; i++) {
      const cluster = i % 3
      const angle = (cluster * 2 * Math.PI) / 3
      const clusterX = width / 2 + Math.cos(angle) * (width * 0.2)
      const clusterY = height / 2 + Math.sin(angle) * (height * 0.2)

      nodes.push({
        x: clusterX + (Math.random() - 0.5) * 120,
        y: clusterY + (Math.random() - 0.5) * 120,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2,
        color: clusterColors[cluster],
        cluster,
        label: labels[i % labels.length],
        alpha: Math.random() * 0.5 + 0.5,
      })
    }

    // Active pulses along connections
    const connections: Connection[] = []

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw background ambient grids
      ctx.strokeStyle = "rgba(15, 23, 42, 0.03)"
      ctx.lineWidth = 1
      const gridSize = 40
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Update & Draw Nodes
      nodes.forEach((node) => {
        // Simple drift physics
        node.x += node.vx
        node.y += node.vy

        // Bounce off bounds
        if (node.x < 50 || node.x > width - 50) node.vx *= -1
        if (node.y < 50 || node.y > height - 50) node.vy *= -1

        // Mouse interaction (gravity effect)
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius
          node.x -= (dx / dist) * force * 0.8
          node.y -= (dy / dist) * force * 0.8
        }

        // Draw node center glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `${node.color}15`
        ctx.fill()

        // Draw node core
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.shadowBlur = 12
        ctx.shadowColor = node.color
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow

        // Label on hovering/close to mouse
        if (dist < 100) {
          ctx.fillStyle = "rgba(15, 23, 42, 0.8)"
          ctx.font = "9px Inter, sans-serif"
          ctx.fillText(node.label, node.x + 8, node.y + 3)
        }
      })

      // Establish connections
      ctx.lineWidth = 0.7
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i]
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Limit connection distance, prioritize connections within the same cluster
          const maxDist = n1.cluster === n2.cluster ? 130 : 70
          
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18
            ctx.strokeStyle = `rgba(15, 23, 42, ${alpha * 0.45})`
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()

            // Spawn data packets occasionally
            if (Math.random() < 0.0008 && connections.length < 25) {
              connections.push({
                from: n1,
                to: n2,
                life: 1,
                speed: 0.008 + Math.random() * 0.012,
                progress: 0,
              })
            }
          }
        }
      }

      // Draw active data pulses
      connections.forEach((conn, index) => {
        conn.progress += conn.speed
        if (conn.progress >= 1) {
          connections.splice(index, 1)
          return
        }

        // Interpolate position
        const px = conn.from.x + (conn.to.x - conn.from.x) * conn.progress
        const py = conn.from.y + (conn.to.y - conn.from.y) * conn.progress

        // Draw pulse dot
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = conn.from.color
        ctx.shadowBlur = 10
        ctx.shadowColor = conn.from.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] rounded-2xl border border-slate-200/60 shadow-sm">
      {/* Absolute overlay elements for UI touch */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/80 border border-slate-200/65 rounded-full text-[10px] font-mono text-[#2563EB] shadow-sm backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
        REVENUE INTELLIGENCE STREAMING
      </div>
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400">
        75M+ NODES // 95% VERIFIED
      </div>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
