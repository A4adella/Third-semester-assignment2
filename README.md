# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop design](./public/ecommerce%20page.png)
![Mobile design](./public/mobile%20view.png)
![Lightbox gallery](./public/Lightbox%20gallery.png)



### Links

- Solution URL: [Github repo](https://github.com/A4adella/Third-semester-assignment2)
- Live Site URL: [Live Url](https://third-semester-assignment2.vercel.app/)


### Built with

- Semantic HTML5 markup
- Tailwind Css
- Vite 
- Typescript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

Working on this e-commerce product page taught me a lot about building responsive and interactive interfaces with React, TypeScript, and Tailwind CSS. Key lessons include:

### 1. State Management with React
I learned how to lift state up to share data between components, like keeping the shopping cart count consistent across the Navbar and Product Details.

```tsx
const [cartCount, setCartCount] = useState(0);

// Passing state down to child component
<ProductDetails cartCount={cartCount} setCartCount={setCartCount} />
```



## Author

- Frontend Mentor - [@A4adella](https://www.frontendmentor.io/profile/A4adella)
- X - [@AIdemetuk](https://x.com/AIdemetuk)


## Acknowledgments

I want to thank me for not giving up! Throuhout this challenge i was tired and frustrated, honestly I still am but I've finished and thats what brings me Joy!. Doing it Afraid? Like Nike says,Just Do It!

