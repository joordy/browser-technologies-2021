const filterByValue = (array, string) => {
  return array.filter((item) => item.id == string)
}

const checkColor = (input) => {
  const file = input.img.replace(
    `${input.img}`,
    `images/${input.cat}/${input.color}_${input.type}_small.png`
  )
  return file
}

module.exports = { filterByValue, checkColor }
