import { formatDistanceToNow } from 'date-fns'

export function relativeTime(date: string) {
  const startDate = new Date(date)
  const formatTime = formatDistanceToNow(startDate, {
    addSuffix: true
  })

  return formatTime.replace('aproximadamente', '')
}
