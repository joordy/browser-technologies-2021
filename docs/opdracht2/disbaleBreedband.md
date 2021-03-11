# **Bad internet connection**

Not every person on earth has a blazing fast internet connection like all Front-end Developers do, with their high-speed internet plan. As a good front-end developer you have to take the entire target group into account. It is possible that the users of your website may have a bad internet connection. This can also be important on the mobile phone. In the big cities you often have a better internet connection than in the suburbs or in the countryside. This can cause a website to sometimes load seconds longer than usual.

---

## **Find out what problems the features can cause**

For example, a problem may be that it does not take 2 to 3 seconds for the entire website to load for your user, but in some cases it takes more than 10 seconds to load your web page. This leads, among other things, to the slow loading of images in your website, but loading JavaScript can also take a long time, which you as a user have to wait until you can use the website.

---

## **How can you test this?**

In this example, I've used the website [**www.bol.com**](www.bol.com), one of Netherlands biggest resellers on the internet.

![Homepage of Bol.com](https://user-images.githubusercontent.com/48051912/110778122-3e62cb80-8262-11eb-8546-3240d6bfd65b.png)

### **Open Developer tools of your browser**

#### **Right-click on your mouse**

![Right-click on mouse](https://user-images.githubusercontent.com/48051912/110778143-43c01600-8262-11eb-8e16-42cd296591a6.png)

#### **Click on inspect element**

![Go to inspect](https://user-images.githubusercontent.com/48051912/110778146-4458ac80-8262-11eb-96b6-347e63c95442.png)

### **Access the Network tab**

![Access the Network tab](https://user-images.githubusercontent.com/48051912/110778142-43277f80-8262-11eb-989b-d6dffc66a633.png)

### **Choose the internet connection you want to test, and which files you want to inspect (Tip: All)**

![Access throttling](https://user-images.githubusercontent.com/48051912/110778140-428ee900-8262-11eb-8c59-83548c2ee4f4.png)

![Select slow 3G](https://user-images.githubusercontent.com/48051912/110778135-41f65280-8262-11eb-9cf9-d8b2b7d471a6.png)

### **Reload the page, and waits for the results.**

![Results after page reload](https://user-images.githubusercontent.com/48051912/110778131-40c52580-8262-11eb-8301-b6f1420dd739.png)

### **Conclusion**

In this example it takes up to **35000ms** with a **3G** connection to load the complete web page. Compared to my own internet speed, which renders the page in **3500ms**, this is up to 10 times slower

---

## **Find a number of sites where this also causes problems**

### Coolblue

I also checked Coolblue, another tech-related reseller in the Netherlands.

#### **Normal conditions**

With the normal conditions, the page content loads in 1500ms, which is pretty fast for a web-page.

![Normal conditions on coolblue home page](https://user-images.githubusercontent.com/48051912/110779203-8c2c0380-8263-11eb-97f9-0569f9834760.png)

#### **Slow 3G connection**

![Slow conditions on coolblue home page](https://user-images.githubusercontent.com/48051912/110779210-8f26f400-8263-11eb-9481-5e259390a3f3.png)

---

## **How can it be solved?**

You can ensure that the loading time on your website decreases with the help of different ways, this has a positive effect on all types of internet connections.

### **1. Compress/minify your JavaScript and CSS**

When compressing files, the file size often decreases significantly. This has a positive effect on the loading time of a file, and this is useful for all CSS files as well as the JavaScript.

You can use tools like [CSS Minifier](https://cssminifier.com/) and [JavaScript Minifier](https://javascript-minifier.com/) to make the files smaller.

#### **Coded**

```CSS
  .ui-helper-hidden {
  display: none;
  }
  .ui-helper-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  }
```

#### **Compressed**

```CSS
  .ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}
```

### **2. Put JavaScript at the bottom of your page**

When putting your JavaScript source link below the HTML, it will first load the HTML page, so the user gets a faster loading time of this file. This ensures that the user can already see some content, while the rest is still loading.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- Content goes here-->
    <script src="js/script.js"></script>
  </body>
</html>
```

### **3. Make external files**

Rather than writing CSS and JavaScript in the HTML, it is useful to develop this in external files. The HTML page also becomes smaller in terms of file size, so that the user gets it back from the server faster.

By storing the CSS & JavaScript files in the caching memory, the server has to handle fewer requests when retrieving the information. This makes the loading time faster, so that the user sees all the content sooner.

### **4. Remove duplicates**

While developing the website, there is a chance that you can repeat yourself several times while coding. By preventing this, you not only encode DRY, but also increase loading time. The server does not have to deal with the same thing twice.

---

## **Sources**

- https://helpdeskgeek.com/networking/simulate-slow-internet-connection-testing/
- https://betterexplained.com/articles/speed-up-your-javascript-load-time/
