const init = () => {
  if (window.location.pathname.includes('/product/')) {
    shirtColorPicker()
    liveInputField()
  }

  if (window.localStorage) {
  }
}

const shirtColorPicker = () => {
  let colorValue = document.querySelector('#colorInput')
  const shirts = document.querySelectorAll('.shirts')
  const selectedShirt = document.querySelector(`.${colorValue.value}`)

  if (colorValue.value === 'black') {
    changeColors(shirts)
    selectedShirt.style.display = 'block'
    selectedShirt.style.maxWidth = '100%'
    selectedShirt.style.marginLeft = '0'
    selectedShirt.childNodes[3].style.width = '100%'
  }

  colorValue.addEventListener('change', (event) => {
    const selectedShirt = document.querySelector(`.${colorValue.value}`)

    switch (colorValue.value) {
      default:
        changeColors(shirts)
        selectedShirt.style.display = 'block'
        selectedShirt.style.maxWidth = '100%'
        selectedShirt.style.margin = '0'
        selectedShirt.childNodes[3].style.width = '100%'
      // break
      // case 'blue':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
      // case 'bordeaux':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
      // case 'green':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
      // case 'grey':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
      // case 'indigo':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
      // case 'pink':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
      // case 'white':
      //   changeColors(shirts)
      //   selectedShirt.style.display = 'block'
      //   break
    }
  })
}

const liveInputField = () => {
  const printInput = document.querySelector('#printInput')
  const textPrint = document.querySelector('#textPrint')
  const textBlack = document.querySelector('input[value="black"]')
  const textWhite = document.querySelector('input[value="white"]')

  textBlack.addEventListener('change', (event) => {
    console.log(textBlack.value)
    textPrint.style.color = 'black'
  })

  textWhite.addEventListener('change', (event) => {
    console.log(textWhite.value)
    textPrint.style.color = 'white'
  })

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
