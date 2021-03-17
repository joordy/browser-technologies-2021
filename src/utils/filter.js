const filterByValue = (array, string) => {
  return array.filter((item) => item.id == string)
}

module.exports = { filterByValue }
