"use client"

import React, { useRef, useEffect, useState } from "react"
import { Globe, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Hub {
  name: string
  lat: number // Latitude in radians
  lng: number // Longitude in radians
  region: string
  records: string
  accuracy: string
}

const regions = [
  { name: "North America", coverage: "32M+ Contacts", cities: "New York, San Francisco, Toronto" },
  { name: "Europe", coverage: "19M+ Contacts", cities: "London, Frankfurt, Paris" },
  { name: "Asia Pacific", coverage: "14M+ Contacts", cities: "Tokyo, Singapore, Sydney" },
  { name: "Middle East", coverage: "6M+ Contacts", cities: "Dubai, Riyadh, Abu Dhabi" },
  { name: "LATAM & Africa", coverage: "4M+ Contacts", cities: "São Paulo, Johannesburg" },
]

// Global Hub Coordinates
const hubs: Hub[] = [
  // North America
  { name: "New York", lat: 0.71, lng: -1.29, region: "North America", records: "12M+", accuracy: "96.4%" },
  { name: "San Francisco", lat: 0.66, lng: -2.13, region: "North America", records: "9.5M+", accuracy: "95.8%" },
  { name: "Toronto", lat: 0.76, lng: -1.38, region: "North America", records: "4.8M+", accuracy: "95.2%" },
  
  // Europe
  { name: "London", lat: 0.90, lng: -0.002, region: "Europe", records: "8.2M+", accuracy: "96.1%" },
  { name: "Frankfurt", lat: 0.87, lng: 0.15, region: "Europe", records: "5.4M+", accuracy: "94.8%" },
  { name: "Paris", lat: 0.85, lng: 0.04, region: "Europe", records: "4.1M+", accuracy: "95.0%" },
  
  // Asia Pacific
  { name: "Tokyo", lat: 0.62, lng: 2.44, region: "Asia Pacific", records: "4.9M+", accuracy: "94.5%" },
  { name: "Singapore", lat: 0.02, lng: 1.81, region: "Asia Pacific", records: "3.8M+", accuracy: "95.6%" },
  { name: "Sydney", lat: -0.59, lng: 2.64, region: "Asia Pacific", records: "3.2M+", accuracy: "95.1%" },
  
  // Middle East
  { name: "Dubai", lat: 0.44, lng: 0.96, region: "Middle East", records: "4.2M+", accuracy: "94.9%" },
  { name: "Riyadh", lat: 0.43, lng: 0.81, region: "Middle East", records: "2.1M+", accuracy: "94.1%" },
  
  // LATAM & Africa
  { name: "São Paulo", lat: -0.41, lng: -0.81, region: "LATAM & Africa", records: "3.5M+", accuracy: "93.8%" },
  { name: "Johannesburg", lat: -0.45, lng: 0.49, region: "LATAM & Africa", records: "1.2M+", accuracy: "93.5%" },
]

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedRegion, setSelectedRegion] = useState("North America")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    let angleY = 0 // Rotation angle around Y-axis
    const angleX = 0.2 // Rotation angle around X-axis
    const globeRadius = Math.min(width, height) * 0.38
    const focalLength = 350
    const centerX = width / 2
    const centerY = height / 2

    // Pre-calculate standard sphere points for dotted shell grid
    const spherePoints: { lat: number; lng: number }[] = []
    const latLines = 18
    const lngLines = 24
    for (let i = 0; i < latLines; i++) {
      const lat = (Math.PI * i) / latLines - Math.PI / 2
      for (let j = 0; j < lngLines; j++) {
        const lng = (2 * Math.PI * j) / lngLines - Math.PI
        spherePoints.push({ lat, lng })
      }
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener("resize", handleResize)

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Auto rotate slowly
      angleY += 0.0025

      // Project and draw the dotted globe shell
      spherePoints.forEach((point) => {
        // Calculate 3D coordinates relative to center
        const x = globeRadius * Math.cos(point.lat) * Math.sin(point.lng)
        const y = globeRadius * Math.sin(point.lat)
        const z = globeRadius * Math.cos(point.lat) * Math.cos(point.lng)

        // Rotate around Y-axis
        const xRotY = x * Math.cos(angleY) - z * Math.sin(angleY)
        const zRotY = x * Math.sin(angleY) + z * Math.cos(angleY)

        // Rotate around X-axis
        const yRotX = y * Math.cos(angleX) - zRotY * Math.sin(angleX)
        const zRotX = y * Math.sin(angleX) + zRotY * Math.cos(angleX)

        // 3D perspective projection
        const scale = focalLength / (focalLength + zRotX)
        const px = centerX + xRotY * scale
        const py = centerY + yRotX * scale

        // Don't draw points behind the globe
        if (zRotX < 0) {
          const alpha = (1 - Math.abs(zRotX) / globeRadius) * 0.12
          ctx.beginPath()
          ctx.arc(px, py, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(15, 23, 42, ${alpha * 0.45})`
          ctx.fill()
        }
      })

      // Project and draw Hub Coordinates
      const projectedHubs = hubs.map((hub) => {
        const x = globeRadius * Math.cos(hub.lat) * Math.sin(hub.lng)
        const y = globeRadius * Math.sin(hub.lat)
        const z = globeRadius * Math.cos(hub.lat) * Math.cos(hub.lng)

        // Rotate Y
        const xRotY = x * Math.cos(angleY) - z * Math.sin(angleY)
        const zRotY = x * Math.sin(angleY) + z * Math.cos(angleY)

        // Rotate X
        const yRotX = y * Math.cos(angleX) - zRotY * Math.sin(angleX)
        const zRotX = y * Math.sin(angleX) + zRotY * Math.cos(angleX)

        const scale = focalLength / (focalLength + zRotX)
        const px = centerX + xRotY * scale
        const py = centerY + yRotX * scale

        return { ...hub, px, py, pz: zRotX, visible: zRotX < 0 }
      })

      // Draw connection curves (data lines) between visible hubs
      ctx.lineWidth = 0.8
      for (let i = 0; i < projectedHubs.length; i++) {
        for (let j = i + 1; j < projectedHubs.length; j++) {
          const h1 = projectedHubs[i]
          const h2 = projectedHubs[j]
          
          if (h1.visible && h2.visible) {
            // Draw connection line if they belong to active data streams
            const isTarget = h1.region === selectedRegion || h2.region === selectedRegion
            
            if (isTarget || Math.random() < 0.15) {
              const alpha = isTarget ? 0.22 : 0.08
              ctx.strokeStyle = isTarget ? "rgba(37, 99, 235, " + alpha + ")" : "rgba(15, 23, 42, " + (alpha * 0.3) + ")"
              ctx.beginPath()
              
              // Draw quadratic curve for curved data link appearance
              const midX = (h1.px + h2.px) / 2
              const midY = (h1.px + h2.px) / 2 - 25 // Arc upward
              ctx.moveTo(h1.px, h1.py)
              ctx.quadraticCurveTo(midX, midY, h2.px, h2.py)
              ctx.stroke()
            }
          }
        }
      }

      // Draw hub points
      projectedHubs.forEach((hub) => {
        if (!hub.visible) return

        const isActive = hub.region === selectedRegion
        const dotRadius = isActive ? 4.5 : 2.5
        const color = isActive ? "#2563EB" : "#10B981"

        // Center hub glow
        ctx.beginPath()
        ctx.arc(hub.px, hub.py, dotRadius * 2, 0, Math.PI * 2)
        ctx.fillStyle = isActive ? "rgba(37, 99, 235, 0.2)" : "rgba(16, 185, 129, 0.1)"
        ctx.fill()

        // Hub point core
        ctx.beginPath()
        ctx.arc(hub.px, hub.py, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.shadowBlur = isActive ? 8 : 4
        ctx.shadowColor = color
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw names for selected hubs
        if (isActive) {
          ctx.fillStyle = "#0F172A"
          ctx.font = "bold 9px Inter, sans-serif"
          ctx.fillText(hub.name, hub.px + 8, hub.py - 3)
          ctx.fillStyle = "rgba(37, 99, 235, 0.85)"
          ctx.font = "8px monospace"
          ctx.fillText(hub.records, hub.px + 8, hub.py + 7)
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [selectedRegion])

  return (
    <Card hoverable={false} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-8 relative overflow-hidden">
      
      {/* Background glowing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-slate-200/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full border border-slate-200/20 pointer-events-none" />

      {/* Left Column: Region Selectors */}
      <div className="lg:col-span-5 flex flex-col gap-4 relative z-10">
        <div className="flex justify-start">
          <Badge variant="green" icon={<Globe className="h-4 w-4 animate-spin-slow" />}>
            MULTINATIONAL B2B INTELLIGENCE
          </Badge>
        </div>
        <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
          Global Coverage. Local Verification.
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-2">
          Verify leads across 100+ countries. Choose a region to inspect database scale, precision ratings, and primary hub locations.
        </p>

        <div className="flex flex-col gap-2.5">
          {regions.map((reg) => {
            const isSelected = reg.name === selectedRegion
            return (
              <button
                key={reg.name}
                onClick={() => setSelectedRegion(reg.name)}
                className={cn(
                  "w-full text-left p-3.5 rounded-xl border transition-all duration-350 cursor-pointer flex justify-between items-center",
                  isSelected
                    ? "bg-white border-blue-200 shadow-[0_4px_20px_rgba(37,99,235,0.05)]"
                    : "bg-slate-50 border-slate-200/60 hover:border-slate-355 hover:bg-slate-100/70"
                )}
              >
                <div>
                  <h4 className={cn("text-xs font-bold uppercase tracking-wider", isSelected ? "text-[#2563EB]" : "text-slate-500")}>
                    {reg.name}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">{reg.coverage}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{reg.cities}</p>
                </div>
                <div
                  className={cn(
                    "p-1.5 rounded-full transition-all duration-300",
                    isSelected ? "bg-blue-50 text-[#2563EB]" : "bg-white text-slate-400 border border-slate-200/60"
                  )}
                >
                  <MapPin className="h-4 w-4" />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Right Column: Globe Canvas */}
      <div className="lg:col-span-7 h-[360px] md:h-[450px] w-full relative flex items-center justify-center">
        {/* Detail Float Box */}
        <Card hoverable={false} className="absolute top-4 right-4 z-10 max-w-xs text-xs flex flex-col gap-2 p-4 bg-white/95 border border-slate-200/80 shadow-md backdrop-blur-sm">
          <div className="flex justify-start">
            <Badge variant="green" icon={<CheckCircle className="h-3.5 w-3.5" />}>
              SOC 2 Secure Hubs
            </Badge>
          </div>
          <div className="text-slate-900 font-semibold">{selectedRegion} Coverage metrics</div>
          <div className="h-px bg-slate-200/60 my-1" />
          <div className="flex justify-between gap-6"><span className="text-slate-400">Manual Verification:</span><span className="text-slate-800 font-medium">95.4% avg</span></div>
          <div className="flex justify-between gap-6"><span className="text-slate-400">Contact Delivery:</span><span className="text-slate-800 font-medium">CSV / CRM Direct</span></div>
          <a href="#contact" className="mt-2 text-[#2563EB] font-bold flex items-center gap-1 group text-[11px]">
            Download Region Sample
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </Card>

        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </Card>
  )
}
