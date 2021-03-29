const init = () => {
  const productPage = window.location.pathname.includes('/product/')
  const cartPage = window.location.pathname.includes('/cart')
  const form = document.querySelectorAll('#form')
  const errorElement = document.getElementById('error')

  if (productPage && document.querySelector) {
    shirtColorPicker()
    liveInputField()
    SaveToLocalStorage()
    productFormValidator(errorElement)
  } else if (cartPage && document.querySelector) {
    // const cartform = document.querySelector('#form')
    cartFormValidator(form)
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
  if (window.localStorage) {
    let orderButton = document.querySelector('#orderButton')

    checkIfLocalIsDefined()
    orderButton.addEventListener('click', storeOrderDetails)
  }
}

const checkIfLocalIsDefined = () => {
  if (localStorage.getItem('ShirtColor') === null) {
    placeDefault()
  } else {
    getOrderDetails()
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
  document.querySelector(`input[value="${colorPrint}"]`).checked = true
  document.querySelector('.shirts').style.display = 'none'
  document.querySelector(`.${color}`).style.display = 'block'
  document.querySelector(`.${color}`).style.maxWidth = 'unset'
}

const placeDefault = () => {
  document.querySelector('#colorInput').value = 'black'
  document.querySelector(`input[value="white"]`).checked = true
  document.querySelector('#size').value = 'm'
}

const productFormValidator = () => {
  const form = document.querySelector('#form')
  const errorElement = document.getElementById('error')
  const printInput = document.querySelector('#printInput')
  printInput.required = false

  form.addEventListener('submit', (e) => {
    let errors = []

    if (printInput.value === '' || printInput.value == null) {
      errors.push('A print with more than 3 characters is required')
      printInput.focus()
    }

    if (errors.length > 0) {
      e.preventDefault()
      errorElement.innerText = errors.join(', ')
      errorElement.style.visibility = 'visible'
    }
  })
}

const cartFormValidator = () => {
  document.forms['loginForm']['customerID'].required = false
  document.forms['registerForm']['firstname'].required = false
  document.forms['registerForm']['lastname'].required = false
  document.forms['registerForm']['email'].required = false

  document.forms['loginForm'].addEventListener('submit', (e) => {
    const customerID = document.forms['loginForm']['customerID']
    const errorElement = document.getElementById('righterror')
    let errors = []

    if (customerID.value === '' || customerID.value == null) {
      errors.push('Please fill in a correct user ID.')
      customerID.focus()
    } else if (customerID.value.length != 21) {
      errors.push('The user ID is to short.')
      customerID.focus()
    }

    if (errors.length > 0) {
      e.preventDefault()
      errorElement.innerText = errors.join(', ')
      errorElement.style.visibility = 'visible'
    }
  })

  document.forms['registerForm'].addEventListener('submit', (e) => {
    const firstName = document.forms['registerForm']['firstname']
    const lastName = document.forms['registerForm']['lastname']
    const email = document.forms['registerForm']['email']
    const errorElement = document.getElementById('lefterror')
    let errors = []

    if (firstName.value === '' || firstName.value == null) {
      errors.push('Please fill in a first-name.')
      firstName.focus()
    } else if (lastName.value === '' || lastName.value == null) {
      errors.push('Please fill in a last-name.')
      lastName.focus()
    } else if (email.value === '' || email.value == null) {
      errors.push('Please fill in a correct E-mail adress.')
      lastName.focus()
    }

    if (errors.length > 0) {
      e.preventDefault()
      errorElement.innerText = errors.join(', ')
      errorElement.style.visibility = 'visible'
    }
  })
}

init()
