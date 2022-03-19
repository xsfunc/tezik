import CID from 'cids'

const getLocale = () => navigator?.language || 'en-Us'

export const shortAddress = (address: string) =>
  address?.replace(address.substring(5, address.length - 5), '…')

export const addressOrAlias = (sender: { address: string; alias?: string }) =>
  sender.alias || shortAddress(sender.address)

export function hexToStr(hex: string) {
  let str = ''
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

export const formatNumber = (
  amount: number,
  options?: Intl.NumberFormatOptions
) => {
  const maximumFractionDigits = amount < 1 ? 6 : 2
  return new Intl.NumberFormat(getLocale(), {
    maximumFractionDigits,
    ...options,
  }).format(amount)
}

export const formatDatetime = (
  datetime: string,
  options?: Intl.DateTimeFormatOptions
) => {
  const date = new Date(datetime)
  const defaultOptions = {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  } as Intl.DateTimeFormatOptions

  return new Intl.DateTimeFormat(getLocale(), options || defaultOptions).format(
    date
  )
}

interface FormatCurrencyOptions extends Intl.NumberFormatOptions {
  currency: string
}

export const formatCurrency = (
  amount: number,
  options: FormatCurrencyOptions
) => {
  const maximumFractionDigits = ['btc', 'eth'].includes(options.currency)
    ? 4
    : 2

  return new Intl.NumberFormat(getLocale(), {
    maximumFractionDigits,
    style: 'currency',
    ...options,
  }).format(amount)
}

const cidV0 = (uri: string) => uri.replace('ipfs://', '')
const toCidV1 = (cidV0: string) => new CID(cidV0).toV1().toString('base32')

export const ipfsHash = (uri: string | undefined) => {
  if (!uri) return
  try {
    const cidV1 = toCidV1(cidV0(uri))
    return `https://${cidV1}.ipfs.infura-ipfs.io`
  } catch (err) {
    return uri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
  }
}
