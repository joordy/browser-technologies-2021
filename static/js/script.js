const init = () => {
  if (window.location.pathname.includes('/product/')) {
    shirtColorPicker()
    liveInputField()
  }
}

const shirtColorPicker = () => {
  let colorValue = document.querySelector('#colorInput')
  const shirts = document.querySelectorAll('.shirts')
  const selectedShirt = document.querySelector(`.${colorValue.value}`)

  if (colorValue.value === 'black') {
    changeColors(shirts)
    selectedShirt.style.display = 'block'
  }

  colorValue.addEventListener('change', (event) => {
    const selectedShirt = document.querySelector(`.${colorValue.value}`)

    switch (colorValue.value) {
      case 'black':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'blue':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'bordeaux':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'green':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'grey':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'indigo':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'pink':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
      case 'white':
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        break
    }
  })
}

const liveInputField = () => {
  const printInput = document.querySelector('#printInput')
  const textPrint = document.querySelector('#textPrint')

  printInput.onkeyup = function () {
    textPrint.innerHTML = this.value
  }
}

const changeColors = (shirts) => {
  shirts.forEach((item) => {
    item.style.display = 'none'
  })
}

init()
