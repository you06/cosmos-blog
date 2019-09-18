export const formatDate = function (t) {
  const year = t.getFullYear()
  const month = t.getMonth() + 1
  const date = t.getDate()

  const monthStr = month < 10 ? '0' + month : '' + month
  const dateStr = date < 10 ? '0' + date : '' + date
  return `${year}-${monthStr}-${dateStr}`
}
