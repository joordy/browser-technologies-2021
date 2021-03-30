# Browser Technologies

## 🔦 **Case**

For the final assignment it is important to develop an interactive application according to the principles of Progressive Enhancement. It must be ensured that the users, on all browsers, and in every possible context can use the interactive application. The most enhanced version is 'pleasurable', so that it is good and pleasant for the user to use.

### **Nerdy T-Shirt**

I want to be able to design my own t-shirt with nerdy text, save it, order it, and use it next time I visit the site.

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Criteria</summary>

- Data maker (name, telephone or email)
- Color t-shirt
- Text t-shirt
- Size t-shirt
- M / F
- Pick up where you left off / revise design
- Validation: everything must be completed. Provide clear error messages
- User must be able to create and revise multiple t-shirts, so must have an overview page.
- Order page to buy a design and have it made

</details>

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

## **Layers**

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

## 🚀 **Enhancements**

### **Live form input**

lorem

### **Changing shirts**

lorem

### **Custom form validation**

lorem

### **Local Storage API**

lorem

## **Wireflow**

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Wireflow</summary>

![frames](https://user-images.githubusercontent.com/48051912/112219775-bf886e00-8c25-11eb-8b61-45294b77576f.png)

</details>

### **Basic sketches**

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0; font-weight: 700;">Basic sketches</summary>

![IMG_0716](https://user-images.githubusercontent.com/48051912/111471911-b54c0880-8729-11eb-93fd-daf6b4a49948.jpg)

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

- npm: express-handlebars. (2021, February 16). Npm. https://www.npmjs.com/package/express-handlebars

To make APA:

- https://koderplace.com/code-samples/255/how-to-change-the-location-of-views-in-express-handlebars
- https://stackoverflow.com/questions/5449412/styling-input-buttons-for-ipad-and-iphone -https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

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
