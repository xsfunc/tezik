export const tzktUrl = process.env.NEXT_PUBLIC_TZKT_HOST as string
export const tzktApiUrl = `https://api.${tzktUrl}`
export const tzktAvatar = (address?: string): string | undefined =>
  address ? `https://services.${tzktUrl}/v1/avatars/${address}` : undefined
