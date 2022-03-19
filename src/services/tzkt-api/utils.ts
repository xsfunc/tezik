import { tzktUrl } from './constants'

export const openTzkt = (url: string) =>
  window.open(`https://${tzktUrl}/${url}`, '_blank')
