export function formatNumber(value: number, precision = 2, separator = ',') {
  return value?.toFixed(precision).replace('.', separator)
}
