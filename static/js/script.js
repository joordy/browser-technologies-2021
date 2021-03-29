const init = () => {
  if (window.location.pathname.includes('/product/')) {
    shirtColorPicker()
    liveInputField()
    SaveToLocalStorage()
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

  const ShirtTypeWriter = () => {
    textPrint.innerHTML = this.value
  }

  printInput.onkeyup = function () {
    textPrint.innerHTML = this.value
  }
}

const changeColors = (shirts) => {
  shirts.forEach((item) => {
    item.style.display = 'none'
  })
}

const SaveToLocalStorage = () => {
  if (window.localStorage != true) {
    console.log('hallo')
    const orderButton = document.querySelector('#orderButton')

    if (orderButton != true) {
      getOrderDetails()

      orderButton.addEventListener('click', storeOrderDetails)
    }
  }
}

const storeOrderDetails = () => {
  let color = document.querySelector('#colorInput').value
  let print = document.querySelector('#printInput').value
  let colorPrint = document.querySelector('input[type="radio"]:checked').value
  let size = document.querySelector('#size').value

  localStorage.setItem('ShirtColor', color)
  localStorage.setItem('ShirtPrint', print)
  localStorage.setItem('ShirtColorPrint', colorPrint)
  localStorage.setItem('ShirtSize', size)
}

const getOrderDetails = () => {
  let color = localStorage.getItem('ShirtColor')
  let print = localStorage.getItem('ShirtPrint')
  let colorPrint = localStorage.getItem('ShirtColorPrint')
  let size = localStorage.getItem('ShirtSize')
  document.querySelector('#colorInput').value = color
  document.querySelector('#printInput').value = print
  document.querySelector('#size').value = size
  document.querySelector('#textPrint').innerHTML = print
  document.querySelector('input[type="radio"]').removeAttribute('checked')
  document.querySelector(`input[value="${colorPrint}"]`)
  // document.querySelector('.shirts').style.display = 'none'
  // document.querySelector(`.${color}`).style.display = 'block'
  // document.querySelector(`.${color}`).style.marginRight = '0'
  // document.querySelector('.image').style.width = '100%'
}

init()
