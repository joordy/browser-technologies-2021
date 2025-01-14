# Browser Technologies

## 🔦 **Case**

For the final assignment it is important to develop an interactive application according to the principles of Progressive Enhancement. It must be ensured that the users, on all browsers, and in every possible context can use the interactive application. The most enhanced version is 'pleasurable', so that it is good and pleasant for the user to use.

### **Nerdy T-Shirt**

I want to be able to design my own t-shirt with nerdy text, save it, order it, and use it next time I visit the site. [_criteria_](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Usecase-t-nerdy-shirt.md)

## 🌐 **Live link**

Live application: [shirtdesigns.app](https://shirtdesigns.herokuapp.com/)

## **Browser tests**

- Brave browser (Chromium, on MacOS)
- Safari (Non-Chromium, on MacOS)
- Safari (iOS on iPhone 12 pro)
- Chrome (on Samsung A50)
- Default Samsung Browser (on Samsung A50)

## **Feature detection**

### **CSS Feature detection**

In CSS you can use feature detection with the `@supports` syntax. By using this syntax you can ensure that you only use specific CSS code for browsers that support this. Consider, for example, a grid layout or flex-box. These are also the use cases I used the `@ supports` syntax for.

The piece of code below clearly shows how this is used. When display grid is not supported, the main has a 'block' layout. If grid is supported by the browsers, a two column layout is created.

```css
main {
  display: block;
}

@supports (display: grid) {
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

### **JS Feature detection**

In JavaScript you can use an if statement. By means of the if statement you can see if the element you want to use, such as localStorage, fetch, or something else, is supported in the browser. If not supported, this code will not be executed.

```js
if (window.localStorage) {
  localStorage.setItem('test', 'yes, localStorage exists')
}
```

## 🚀 **Progressive Enhancements**

Progressive Enhancement is a way of building websites and web-applications. It is based on the theory that your page should work with just the basic layer, before adding any other layers. The HTML layer will be rock-solid, and will still work if any of the enhancements doesn't load or aren't supported.

### **Enhancements**

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Live form input</summary>

As a JavaScript enhancement I added a live form input, which means that the text that the user passes on, what they want on the shirt, is shown on the shirt in real time. This gives you as a user an idea of what the product will look like. Also when you press the radio button with the label black, the text-color will change to black, and vice versa.

This value below select all the elements you need from your HTML. Based on the `change` event, the displayed text color on the t-shirt will change to the selected color. The text will be displayed with the `onkeyup` event, which means on every key-press, the value will be updated.

```js
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
```

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Changing shirts</summary>

When the user has chosen a specific color for his or her t-shirt, it is immediately displayed to the user using JavaScript. This makes it immediately clear what color the user has chosen.

With the function `shirtColorPicker` will be a default t-shirt color set. Because black is the first on the list, the default t-shirt color will be set to black. When the `colorValue` changes with the `change` event, the function `showCorrectShirt` updates the images and put a `display: block` on the chosen color. The rest of the images will get the property `display: none`, done with the `changeColors` function.

```js
const shirtColorPicker = () => {
  const colorValue = document.querySelector('#colorInput')
  const shirts = document.querySelectorAll('.shirts')
  const selectedShirt = document.querySelector(`.${colorValue.value}`)

  if (colorValue.value === 'black') {
    changeColors(shirts)
    selectedShirt.style.display = 'block'
    selectedShirt.style.maxWidth = '100%'
    selectedShirt.style.marginLeft = '0'
    selectedShirt.childNodes[3].style.width = '100%'
  }

  colorValue.addEventListener('change', showCorrectShirt)
}

const showCorrectShirt = () => {
  const colorValue = document.querySelector('#colorInput')
  const shirts = document.querySelectorAll('.shirts')
  const selectedShirt = document.querySelector(`.${colorValue.value}`)

  switch (colorValue.value) {
    default:
      changeColors(shirts)
      selectedShirt.style.display = 'block'
      selectedShirt.style.maxWidth = '100%'
      selectedShirt.style.margin = '0'
      selectedShirt.childNodes[3].style.width = '100%'
  }
}

const changeColors = (shirts) => {
  shirts.forEach((item) => {
    item.style.display = 'none'
  })
}
```

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Custom form validation</summary>

By disabling the standard form validation of HTML with javascript, and writing his own patterns for this, the user is obliged to write specific information in the input fields. For example, a name must match at least 2 characters, and an e-mail address must contain a '@' and '.'.

With the `productFormValidator` and `cartFormValidator` functions I created a custom form validator based on different statements. I removed the HTML validator & required attributes, to have a working JavaScript version. When the form will be submitted, the function will run through the different statements to check if everything is valid. When there is a input not valid, there will be a message added to the error box, and displayed on the user's screen. When all the checks are valid, and the error box will be empty, the form will be submitted.

```javascript
const productFormValidator = () => {
  const errorElement = document.getElementById('error')

  document.forms['productCart'].noValidate = true
  document.forms['productCart']['print'].required = false

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
```

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Local Storage API</summary>

With the help of local storage, it is possible for the user to, once they have designed a shirt and sent it to the confirmation page, all information is stored in the local storage, so that they can come back here at a later time. to continue working with them. The local storage is emptied when the shirts are ordered.

After checking if localStorage exists, the script first checks if there is already a value defined inside the storage. When there is no local storage defined, and the order button is pressed, the function to store all the information inside localStorage will run. It will grap all the values from HTML with the `document.querySelector().value` and store these inside the localStorage of the browser. When localStorage is defined, but empty, it will place default values for the t-shirt color, text color and size with the `placeDefault` function. When localStorage is defined with specific values, the values will be stored in HTML with the `getOrderDetails` function.

```js
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

  localStorage.setItem('ShirtColor', {
    color: '#ffffff',
    print: 'abc weg er mee',
  })

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
  document.querySelector('#textPrint').innerHTML = colorPrint
  document.querySelector('input[type="radio"]').removeAttribute('checked')
  document.querySelector(`input[value="${colorPrint}"]`).checked = true
  document.querySelector('.shirts').style.display = 'none'
  document.querySelector(`.${color}`).style.display = 'block'
  document.querySelector(`.${color}`).style.maxWidth = 'unset'
  document.querySelector('#textPrint').style.color = colorPrint
}

const placeDefault = () => {
  document.querySelector('#colorInput').value = 'black'
  document.querySelector(`input[value="white"]`).checked = true
  document.querySelector('#size').value = 'm'
}
```

</details>

### **Layers**

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Functional</summary>

- HTML content works properly
- User can order t-shirt using form
- User can log in to add shirt to profile

The functional/Reliable layer only contains HTML. The site doesn't look that nice, but it will still work for the user. He can still customize a nerdy T-shirt and order it. The core functionality still works, but isn't that lovely to see.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Reliable</summary>
  
  - Form validation works, user can't make small mistakes

The reliable layer is still pure html, but every HTML will be supported by the browser. For example, the images can be viewed and other html elements, such as `<details>`, are supported by the browser. Although it is not yet perfect. Some important elements are missing, so the website is not yet missing works optimally. Also the basic styling will be added, not every browser supports grid or flex-box, so it will be displayed as blocks. The form will be validated with the basic HTML validations, such as required, and correct type of E-mail address.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Usable</summary>

- CSS adds extra styling

The usable layer is easy to use for the customer. All the HTML elements will be styled. The browser supports all the CSS selectors, and will add grid or flex-box to the layout. It already looks way better than the reliable layer, and is usable for the customer. Also buttons will be disabled when they aren't in use.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Pleasurable</summary>

- Print will be displayed on shirt
- User can remove shirt by using swipe gestures on phone

The pleasurable layer contains functions that aren't necessary, but fun to use for the customer. There is a live input for the t-shirt, to display the print-text, directly on the t-shirt. Also the image of the t-shirt will be changed to the selected color. There is also a form validator which checks if you fill in a correct user ID, e-mail address, print and names. Not necessary, but definitely helpful. Also, when a customer designed a t-shirt, placed it in the shopping cart, and comes back later, the filled in details of this specific shirt will be stored on the product page.

</details>

## **Test rapport**

The tests are done with the Lambdatest tool, all based on the same screen resolution (1440x900) and device (Macbook Pro 2019 — 15 inch).

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Internet Explorer — V11.0 — Windows</summary>

Based on the test results (see screenshots below) I can conclude that my app is somewhat workable for Internet Explorer, but especially the menu here is difficult.

![Internet Explorer — V11.0 — Windows](https://user-images.githubusercontent.com/48051912/113212430-081fd700-9277-11eb-91a1-92875e6a3123.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Safari — V11.0 — Mac OS</summary>

This older version of Safari has a good support. It works exactly the same as the newest version (currently: 14.0). Only difference is the Pixel Per Inch, which is higher on the new version (based on same screen resolution).

![saf11](https://user-images.githubusercontent.com/48051912/113212547-33a2c180-9277-11eb-91ba-c1799e2e7820.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Safari — V14.0 — Mac OS</summary>
  
During the developing process I've mainly worked with this browser (Safari) and Brave, so I'm not surprised with the looks of the application. All the functionalities work properly, and there isn't a small bug that doesn't work with this browser.

![saf14](https://user-images.githubusercontent.com/48051912/113212557-37cedf00-9277-11eb-89c7-bf2a7aeb535d.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Firefox — V80 — Windows 10</summary>

On the slightly older version of FireFox the application still works fine. Only has it the same problem as Safari V11.0, the Pixel Per Inch seems higher on newer versions, the user will see more content on newer versions of the browser.

![firefox](https://user-images.githubusercontent.com/48051912/113215647-78305c00-927b-11eb-989e-1153e2a73772.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Brave (Chromium) — V89 — Mac OS</summary>

During the developing process I've mainly worked with this browser (Brave) and Safari, so I'm not surprised with the looks of the application. All the functionalities work properly, and there isn't a small bug that doesn't work with this browser.

![Brave](https://user-images.githubusercontent.com/48051912/113215513-3d2e2880-927b-11eb-8bef-72a73e7e4a30.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Chrome — V79 — Windows 10</summary>

On older versions of chrome is the support still decent. Unthought the select boxes has a fixed with, this version of Chrome doesn't recognize it. Further, the application works properly.

![Chrome 79](https://user-images.githubusercontent.com/48051912/113215517-3e5f5580-927b-11eb-9c33-47e2e055fb7e.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Opera 75 — beta  — Mac OS</summary>

The newest Opera version (which is currently is available as BETA) works fine with my application. It has the same results as every chromium, firefox or safari browser. Only the Pixels Per Inch is an issue here.

![Opera beta](https://user-images.githubusercontent.com/48051912/113215504-3a333800-927b-11eb-8f06-19f15232d01f.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Opera 66 — V66  — Windows 10</summary>

This version of Opera has the same problem as the older chrome browsers, unthought a defined with of the select boxes, the browser doesn't recognize it and puts an default value here.

![Opera 66](https://user-images.githubusercontent.com/48051912/113215490-369fb100-927b-11eb-99fe-56f30e5f4a85.png)

#### **Disabled elements/languages**:

The application work completely in this browser. The form validation works, based on the existing querySelector, also localStorage works fine here. When the styles are disabled the site looks fine, the core functionality still works.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Safari — iOS 14.4 — iPhone 12 Pro Max </summary>

The Safari browser seems to work perfectly on the newest iPhone devices. There are no errors or mistakes to be found here.

![iphone](https://user-images.githubusercontent.com/48051912/113216002-0278c000-927c-11eb-8985-9fc1e5d2725d.png)

#### **Disabled elements/languages**:

The application work completely on the Safari browser on iOS. The form validation works, based on the existing querySelector, also localStorage works fine here. It's hard to disable the JS and CSS on a phone, but when using the emulator of Lambdatest, it seemed to work fine.

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Chrome — Android 11 — Samsung A51 </summary>

The Chrome browser of this android device seems to work exactly the same as the Safari browser on iOS. There aren't any mistakes to be found here.

![android chrome](https://user-images.githubusercontent.com/48051912/113215503-399aa180-927b-11eb-9e78-2c360dff7917.png)

#### **Disabled elements/languages**:

The application work completely on the Chrome browser on Android. The form validation works, based on the existing querySelector, also localStorage works fine here. It's hard to disable the JS and CSS on a phone, but when using the emulator of Lambdatest, it seemed to work fine.

</details>

## **Sketches**

Before I started coding, I made a sketch in which the flow of the user should be clear. Based on this I developed my final product.

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">Basic sketches</summary>

![IMG_0716](https://user-images.githubusercontent.com/48051912/111471911-b54c0880-8729-11eb-93fd-daf6b4a49948.jpg)

</details>

## **wireflow**

The wireflow are based on the three layers of Progressive Enhancement. The first layer only contains HTML. The second layer consists of HTML & CSS. In the third layer it will be a combination of HTML, CSS & JS.

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">HTML</summary>

![Nerdy T-Shirt HTML Wireframes](https://user-images.githubusercontent.com/48051912/113209748-b9bd0900-9273-11eb-9887-c325f1e4004a.png)

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">HTML CSS</summary>

![Nerdy T-Shirt HTML CSS Wireframes](https://user-images.githubusercontent.com/48051912/113209395-503cfa80-9273-11eb-9abc-4c1cab855f84.png)

</details>

<details style="margin: 1em 0;">
<summary style="margin: 1em 0; font-weight: 700;">HTML CSS JS</summary>

![Nerdy T-Shirt HTML CSS JS Wireframes](https://user-images.githubusercontent.com/48051912/113208782-7d3cdd80-9272-11eb-86d7-cd784a7f3f09.png)

</details>

## 💻 **Installation**

### Clone the repository

```bash
  git clone https://github.com/joordy/browser-technologies-2021.git
```

### Navigate to the repository and nstall the packages

```bash
  npm install
```

### Start local dev environment

```bash
  npm run dev
```

## 🔍 **Sources**

- NPM. (2021, February 28). npm: express-handlebars. https://www.npmjs.com/package/express-handlebars
- MDN. (2021d, March 15). Event.preventDefault() - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
- MDN. (2021c, March 12). GlobalEventHandlers.onkeyup - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup
- Drange, J. G. (2011, March 27). Styling input buttons for iPad and iPhone. Stack Overflow. https://stackoverflow.com/questions/5449412/styling-input-buttons-for-ipad-and-iphone
- Caniuse. (n.d.). Can I use... Support tables for HTML5, CSS3, etc. Retrieved March 20, 2021, from https://caniuse.com/

## 🔐 **License**

This is a repository which is licensed as [MIT](https://github.com/joordy/progressive-web-apps-2021/blob/master/LICENSE). Developed by Jordy Fronik ©️ 2021.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
