# xsoz

![xsoz](./images/xsoz.jpeg)

**xsoz** is a comprehensive package designed to preserve and provide access to deprecated or at-risk packages, as well as to streamline the installation process for commonly used libraries. This project aims to save developers time and effort by offering a single installation point for multiple essential tools.

## What is xsoz?

xsoz is a meta-package that aggregates a collection of valuable, deprecated, or at-risk packages along with commonly used libraries. By installing xsoz, developers can quickly and conveniently access a variety of important tools without the hassle of installing each one individually.

## Why xsoz?

The software development landscape is constantly evolving, and valuable packages can sometimes become deprecated or at risk of being discontinued. xsoz ensures that these packages remain accessible and usable. Additionally, xsoz includes commonly used packages to streamline the setup process for developers, thus saving their valuable time and effort.

## Need for xsoz

1. **Preservation of Valuable Packages**: Ensures that important but deprecated or at-risk packages are not lost and remain accessible for developers.
2. **Streamlined Installation**: Simplifies the process of setting up a development environment by bundling commonly used packages.
3. **Convenience**: Saves developers time by reducing the need to search for and install multiple packages individually.

## Work of xsoz

xsoz currently includes the following packages:

![Cannon JS](./browser/images/cannon.jpeg)

- **Cannon.js**: A physics engine that provides a comprehensive and efficient way to simulate physical interactions in a Three.js scene.


- **Three.js**: A JavaScript-based WebGL engine that can run GPU-powered games and other graphics-powered apps straight from the browser. The three. js library provides many features and APIs for drawing 3D scenes in your browser.

- **gsap**: A best Javascript animation library.

![Cannon Debugger](./browser/images/cannonDebugger.jpeg)

- **cannon-es-debugger**: Debugging tool for Cannon.js.

![Express JS](./node/images/express.jpeg)

- **Express.js**: A Node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

![mongoose](./node/images/mongoose.jpeg)

- **Mongoose.js** : Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Waterline: An ORM extracted from the Express-based Sails web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.

- **Bcrypt.js**: Bcrypt is a cryptographic hash function designed for password hashing and safe storing in the backend of applications in a way that is less susceptible to dictionary-based cyberattacks. It was created in 1999 by Niels Provos and David Mazières, using the Blowfish cipher algorithm as its base.

- **Millify.js**: Converts long numbers into pretty, human-readable strings. Ex - 1000 -> 1k. 

- **JWT**: JWT, which stands for JSON Web Token, is an open standard for securely sharing JSON data between parties. The data is encoded and digitally signed, which ensures its authenticity. JWT is widely used in API authentication and authorization workflows, as well as for data transfer between clients and servers.

- **express-session**: Express Session is used to access the session associated with a request. Session data is serialized as JSON and can be stored in memory, in database, or in a memory cache. The syntax for finding something in a session object looks something like this: req. session.

- **connect-flash**: The connect-flash module in NodeJS allows developers to render a pop-up message whenever a user is redirected to a particular webpage.

In the future, more packages will be added to xsoz, making it an even more valuable resource for developers.

## No Contributions and Payments

**xsoz is a private project.**

This project is managed solely by the author, with no external contributions or financial support. The purpose of xsoz is to help the developer community by providing easy access to important packages, not to seek support or contributions.

- **No Contributions**: Please do not submit pull requests or issues.
- **No Payments**: This project does not accept any form of financial support. It is purely for helping others.

## Future Plans

The future plans for xsoz include:
- **Adding More Packages**: Continuously expanding the collection of deprecated or at-risk packages and commonly used libraries.
- **Regular Updates**: Keeping the included packages up-to-date to ensure compatibility with modern development environments.
- **Comprehensive Documentation**: Providing detailed documentation and examples for each included package to help developers get started quickly.

## Acknowledgements

While xsoz includes packages developed by various authors, this project does not claim credit for their work. All original authors are acknowledged and respected for their contributions to the open-source community.

## Usage of Initialised Packages

xsoz is built on ES6, so imports are used in place of require. To work with xsoz, simply observe or use the following code:

- **If you want to use any Server sided package, like Express, mongoose etc. then your path would be:**
```javascript
'xsoz/node/node.js';
```

- **If you want to use any Web/Browser Sided package, like Three.js, Cannon.js, etc. then your path would be:**
```javascript
"xsoz/browser/browser.js";
```

```javascript
/* Browser Sided Packages */
import {THREE} from "xsoz/browser/browser.js";
import {CANNON} from "xsoz/browser/browser.js";
import {millify} from "xsoz/browser/browser.js";
import {cannonDebugger} from "xsoz/browser/browser.js";
import {gsap} from "xsoz/browser/browser.js";

/* Server Sided Packages */
import {express} from "xsoz/node/node.js";
import {mongoose} from "xsoz/node/node.js";
import {bcrypt} from "xsoz/node/node.js";
import {millify} from "xsoz/node/node.js";
import {jwt} from "xsoz/node/node.js"; // json web token
import {session} from "xsoz/node/node.js"; // express-session
import {flash} from "xsoz/node/node.js"; // connect-flash
```

## Usage of Built-In Browser Packages 
Xsoz includes pre-integrated **browser** packages, developed exclusively by the Xsoz developer, to address a range of simple to complex problems encountered in daily development. These built-in packages enhance efficiency by reducing the need for extensive code, allowing developers to accomplish challenging tasks with short, easily understandable lines of code.

- **Your Path for Built-In Browser Packages:**
```javascript
"xsoz/browser/InBuiltPackages/browser.js";
```

Some of the built-in browser packages are listed below, along with their simple usage process:- 

- **Weather.js**: This is the first **built-in** package in **Xsoz**, capable of providing weather information for any location, from streets and villages to cities, states, and countries, simply by specifying the exact location. It fetches comprehensive data about the specified place. (Currently supports only browsers). Comprehensive documentation for accessing this feature will be available soon.

```javascript

/* Built In Packages (Weather.js)[Asynchronous In Behaviour] */
import {
  Weather_Catcher, 
  Weather
} from "xsoz/browser/InBuiltPackages/browser.js";

Weather_Catcher() // setting up weather catcher 

// Note - Weather Js is Asynchronous so, needs async and await! Following is the example, of how to use it -> 

( async function () {
  const russia_weather = await Weather('russia'); // location of region. 
  
})();
```