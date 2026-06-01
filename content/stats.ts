// Centralized stats data — hero trust indicators
export interface StatItem {
  value: string
  label: string
}

export const HERO_STATS: StatItem[] = [
  { value: "75M+", label: "Contacts" },
  { value: "100+", label: "Countries" },
  { value: "95%", label: "Accuracy SLA" },
  { value: "30-Day", label: "Refresh Cycle" },
]
