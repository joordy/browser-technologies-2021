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
    removeArrows()
  } else if (cartPage && document.querySelector) {
    cartFormValidator(form)
    clearLocalStorage()
  }
}

// Function to get the correct t-shirt when choosing a color
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
    }
  })
}

// Function for live input on the t-shirt
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

// Function to hide every t-shirt you didn't choose
const changeColors = (shirts) => {
  shirts.forEach((item) => {
    item.style.display = 'none'
  })
}

// Function with event to launch when pressing, fire other localStorage functions
const SaveToLocalStorage = () => {
  if (window.localStorage) {
    let orderButton = document.querySelector('#orderButton')

    checkIfLocalIsDefined()
    orderButton.addEventListener('click', storeOrderDetails)
  }
}

// Function to store all the details in localStorage
const storeOrderDetails = () => {
  let color = document.querySelector('#colorInput').value
  let print = document.querySelector('#printInput').value
  let colorPrint = document.querySelector('input[type="radio"]:checked').value
  let size = document.querySelector('#size').value

  localStorage.setItem('ShirtColor', {
    color: '#ffffff',
    print: 'abc weg er mee',
  })

  localStorage.setItem('ShirtColor', color)
  localStorage.setItem('ShirtPrint', print)
  localStorage.setItem('ShirtColorPrint', colorPrint)
  localStorage.setItem('ShirtSize', size)
}

// Function to check if localStorage value is defined
const checkIfLocalIsDefined = () => {
  if (localStorage.getItem('ShirtColor') === null) {
    placeDefault()
  } else {
    getOrderDetails()
  }
}

// Function to get all the information from localStorage
const getOrderDetails = () => {
  let color = localStorage.getItem('ShirtColor')
  let print = localStorage.getItem('ShirtPrint')
  let colorPrint = localStorage.getItem('ShirtColorPrint')
  let size = localStorage.getItem('ShirtSize')
  document.querySelector('#colorInput').value = color
  document.querySelector('#printInput').value = print
  document.querySelector('#size').value = size
  document.querySelector('#textPrint').innerHTML = colorPrint
  document.querySelector('input[type="radio"]').removeAttribute('checked')
  document.querySelector(`input[value="${colorPrint}"]`).checked = true
  document.querySelector('.shirts').style.display = 'none'
  document.querySelector(`.${color}`).style.display = 'block'
  document.querySelector(`.${color}`).style.maxWidth = 'unset'
  document.querySelector('#textPrint').style.color = colorPrint
}

// Function to place the localStorage values in html
const placeDefault = () => {
  document.querySelector('#colorInput').value = 'black'
  document.querySelector(`input[value="white"]`).checked = true
  document.querySelector('#size').value = 'm'
}

// Function for form-validator in product-page
const productFormValidator = () => {
  document.forms['productCart'].noValidate = true
  document.forms['productCart']['print'].required = false
  const errorElement = document.getElementById('error')
  document.forms['productCart'].addEventListener('submit', (e) => {
    let errors = []

    if (printInput.value === '' || printInput.value == null) {
      errors.push('A print with more than 3 characters is required')
      printInput.focus()
    } else if (printInput.value.length < 3) {
      errors.push(
        `Your print is to short. Please fill in a print with minimal 3 characters`
      )
      printInput.focus()
    }

    if (errors.length > 0) {
      e.preventDefault()
      errorElement.innerText = errors.join(', ')
      errorElement.style.visibility = 'visible'
    }
  })
}

// Function for cart-validator in product-page
const cartFormValidator = () => {
  document.forms['loginForm'].noValidate = true
  document.forms['registerForm'].noValidate = true
  document.forms['loginForm']['customerID'].required = false
  document.forms['registerForm']['firstname'].required = false
  document.forms['registerForm']['lastname'].required = false
  document.forms['registerForm']['email'].required = false

  document.forms['loginForm'].addEventListener('submit', (e) => {
    const customerID = document.forms['loginForm']['customerID']
    const errorElement = document.getElementById('righterror')
    let errors = []
    const test = 'user_sktwi3bokmvzobyz'
    console.log(test.length)
    if (customerID.value === '' || customerID.value == null) {
      errors.push('Please fill in a valid user ID.')
      customerID.focus()
    } else if (!customerID.value.length == 21) {
      errors.push('Your user ID is to short. Please fill in a valid user ID.')
      customerID.focus()
    } else if (!customerID.value.includes('user_')) {
      errors.push('Please fill in a valid user ID..')
      customerID.focus()
    }

    if (errors.length > 0) {
      e.preventDefault()
      errorElement.innerText = errors.join(', ')
      errorElement.style.visibility = 'visible'
      errorElement.style.top = '250px'
      errorElement.style.bottom = 'unset'
    }
  })

  document.forms['registerForm'].addEventListener('submit', (e) => {
    const firstName = document.forms['registerForm']['firstname']
    const lastName = document.forms['registerForm']['lastname']
    const email = document.forms['registerForm']['email']
    const errorElement = document.getElementById('lefterror')

    let errors = []

    if (firstName.value === '' || firstName.value == null) {
      errors.push(`Please fill in a first-name.`)
      firstName.focus()
    } else if (firstName.value.length < 3) {
      errors.push(
        `Your first-name is to short. Please fill in a name with minimal 3 characters`
      )
      firstName.focus()
    } else if (lastName.value === '' || lastName.value == null) {
      errors.push(`Please fill in a last-name.`)
      lastName.focus()
    } else if (lastName.value.length < 3) {
      errors.push(
        `Your last-name is to short. Please fill in a name with minimal 3 characters`
      )
      lastName.focus()
    } else if (email.value === '' || email.value == null) {
      errors.push(`Please fill in a correct e-mail address.`)
      email.focus()
    } else if (!email.value.includes('@')) {
      errors.push(`The submitted mail-address doesn't contain a '@'.`)
      email.focus()
    } else if (!email.value.includes('.')) {
      errors.push(`The submitted mail-address doesn't contain a '.'.`)
      email.focus()
    } else if (!email.value.includes('com')) {
      console.log(email.value.includes('com'))
      errors.push(
        `The submitted mail-address doesn't contain a valid domain. Your domain should end with .com.`
      )
      email.focus()
    }

    if (errors.length > 0) {
      e.preventDefault()
      errorElement.innerText = errors.join(', ')
      errorElement.style.visibility = 'visible'
    }
  })
}

// Function for removing localStorage when order is placed
const clearLocalStorage = () => {
  const buttons = document.querySelectorAll('#submitOrder')

  buttons.forEach((button) =>
    button.addEventListener('click', (e) => {
      localStorage.clear()
    })
  )
}

// function to remove arrows which are useless with javascript.
const removeArrows = () => {
  const arrowsright = document.querySelector('.toright')
  const arrowsleft = document.querySelector('.toleft')
  arrowsright.remove()
  arrowsleft.remove()
}

init()
