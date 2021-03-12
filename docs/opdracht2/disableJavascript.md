# **Disable Javascript on website**

## **Table of Content**

Not every user has the latest Macbook, with the best of the best in terms of specifications, there are always users who do not use JavaScript in the world. 0.2% of all users worldwide does not have supported JavaScript, according to [DeliberateDigital](https://deliberatedigital.com/blockmetry/javascript-disabled).

To keep websites accessible for these people, it is important that the core functionality also works without the use of JavaScript. The problem of not having JavaScript can be because of the device that does not support it, or because of a bad internet connection.

| Table of Content                                                    |
| ------------------------------------------------------------------- |
| [Which problems](#Find-out-what-problems-the-features-can-cause)    |
| [How to test](#How-can-you-test-this)                               |
| [Examples](#Find-a-number-of-sites-where-this-also-causes-problems) |
| [Solve problems](#How-can-it-be-solved)                             |
| [Sources](#Sources)                                                 |

---

## **Find out what problems the features can cause**

The problem that can arise is that a lot of websites will not work because of this. Too many websites have become dependent on the use of the programming language.

Example: with a Single Page Application, no content is loaded, because it is mainly built in JavaScript, so all these pages cannot even be viewed in this way. Frameworks are also dependent on this, including React, Vue, Angular and Svelte cannot be viewed without JavaScript. There are several ways to ensure that users without JavaScript can still view these pages, namely [Static Site Generators](https://jamstack.org/generators/)

---

## **How can you test this?**

In this example, I've used the website [**www.bol.com**](www.bol.com), one of Netherlands biggest resellers on the internet. I've used the plugin [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) to disable JavaScript.

### **Visit the landing page**

![HomePage of bol.com](https://user-images.githubusercontent.com/48051912/110789462-31e56f80-8270-11eb-939f-3f83fd7f1eee.png)

### **Disable javascript**

![Open Developer tools](https://user-images.githubusercontent.com/48051912/110789607-5b060000-8270-11eb-9e90-1a3e7622bf4b.png)

![Disable JavaScript](https://user-images.githubusercontent.com/48051912/110789477-3578f680-8270-11eb-87db-fe333382de7e.png)

### **Reload page to see results**

![Reloaded page, without any images 1](https://user-images.githubusercontent.com/48051912/110789481-36118d00-8270-11eb-8821-6f35bc68c8b9.png)

![Reloaded page, without any images 2](https://user-images.githubusercontent.com/48051912/110789483-3742ba00-8270-11eb-912a-885f870f4e31.png)

### No content, but what?..

The performance of the website has increased, where the page including JavaScript, is rendered in 3.5 seconds, without JavaScript within half a second, using a good internet connection. Unfortunately bol.com is not doing well, because all articles are loaded with JavaScript. This means that the articles cannot be viewed by users without JavaScript.

![Network loading tab](https://user-images.githubusercontent.com/48051912/110789482-36aa2380-8270-11eb-94c8-d7f4e10e5a5f.png)

---

## **Find a number of sites where this also causes problems**

I also checked [CoolBlue](www.coolblue.nl), another tech-related reseller in the Netherlands.

### **With JavaScript**

The moment I turn off JavaScript at CoolBlue, all images are still loading, unfortunately the products disappear, but by means of the navigation slider that still works without JavaScript, it is easy to get to the product pages.

In comparison, this was not possible at Bol.com, because you could not see what you clicked on, because the texts and images were loaded with JavaScript.

![With Javascript](https://user-images.githubusercontent.com/48051912/110790933-eb911000-8271-11eb-8a45-1ba18739c90e.png)

### **Without JavaScript**

![Without JavaScript](https://user-images.githubusercontent.com/48051912/110790946-edf36a00-8271-11eb-9478-0817bbf66442.png)

---

## **How can it be solved?**

it can be solved by working with the principles of Progressive Enhancement. This works on different layers, most clearly going through the four layers of functionality.

With **Functional** it is important that the core functionality is workable, so that you can use the website in a sense. For **Reliable** it is important that the website works securely, including an SSL certificate, and that the website is user-friendly. When the website is **Usable**, a limited amount of CSS and JavaScript has been added, the website is very usable, but there is still room for improvement of the User Experience. In the last layer, **Pleasurable**, it applies that the user likes to come back, so extra features are built in that promote the user experience.

---

## **Sources**

- https://deliberatedigital.com/blockmetry/javascript-disabled
- https://jamstack.org/generators/
- https://www.wikihow.com/Disable-JavaScript
