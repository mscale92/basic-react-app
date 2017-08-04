# Basic React App w/o Create-React-App #

This project is intended to show DecodeMTL students a basic react app setup with webpack and babel that uses ES6 and ES7 syntax.

## Getting Started

Remember, the first steps to any project are fork, clone, and npm install. You can check the package.json to see exactly which node modules we are using. 

Before you get coding, let's talk about why we're doing this.

### Why not use Create-React-App?
Create-React-App is a great tool for building React applications quickly. However, it does not show everything that is happening behind the scenes nor does CRA allow you to edit what is behind the scenes. 

Having control on how React is rendered, as well as what is rendered, is part of being a strong React programmer. Once you've adapted to using two tools, webpack and babel, you'll be able to easily build your own React application sans CRA.

First off, let's dive into [webpack](https://webpack.js.org/concepts/ "Webpack")

### What is Webpack?

Webpack is module [bundler](https://medium.freecodecamp.org/javascript-modules-part-2-module-bundling-5020383cf306 "bundler"), a program that puts all of your JavaScript into one file, a bundle.js, if you will. This has many advantages, a primary one being that it puts less strain on the browser.

Another primary reason, we are able to tell it, webpack, *how* to bundle our JavaScript.

### Loading...

This is done by uses loaders. A loader is basically a front-end compiler. Compilers are used assemble code in a different format. Anyone who has worked with a C language knows compilers all too well.

The reason we use loaders is because browsers don't know what the React framework is. Browsers *do* know what vanilla JavaScript is though. Our loader will compile our React code into something the browser can understand.

The loader that you will be using, is [Babel](https://babeljs.io/ "Babel").

### Tower of Babel?

Babel is a popular loader with JavaScript frameworks, especially react. Not only can Babel compile React, it can also compile Redux and Native, as well as ES6 and ES7 syntax. Pretty nifty.

You can tell Babel, either in a webpack query or `babel.rc` file what you want to compile within its presets. This gives you full control on how Babel compiles your code. Webpack then bundles everything into a nice compact JS file.


## Setting Up

You will see a few files outside of the `\src`folder in this repo. Some are familiar, `package.json` and `.gitignore`, but others are new. Let's go over what they are and what lays inside.

	server.js 
		This is a basic express server that will run our react application for us. 
		It redirects all requests into rendering the index.html inside the \src folder

	webpack.config.js
		This is your webpack configuration file. 
		Here is where all the bundling, compiling goodness happens. 

### Server.js

	var express = require('express');

	var app = express();
	
	app.use('/files', express.static(__dirname + '/src'));
	
	app.get('/*', function(req, res) {
	    res.sendFile(__dirname + '/src/index.html');
	});
	
	app.listen('8080');

Unlike the express app you built in previous exercises, this server only has one request, `app.get('/*')`.

This means that all requests going through will render the same result, that result being, you're React application's index.html file. 

The index.html file of React is the gateway to the application. Here, you will call your bundled JavaScript file, within a script tag, as well as point your React app to a designated div tag, #app. Remember, your bundle contains all of your compiled react code.

There's one more thing in our server.js that may stand out to you, `'/files', express.static(__dirname + '/src')`

What's going on here?

Well, express is nice enough to have a middleware option for static file paths. We are using the name `/files` as a path variable to mean the current directory, __dirname, plus `/src`.

Put it all together, files means `basic-react-app/src`

We can use this variable throughout our react components in order to load static files from our `/src` directory. This includes CSS files as well as images.

### webpack.config.js

	module.exports = {
	    // simple config from http://webpack.github.io/docs/configuration.html
	    entry: "./src/js/entry.js",
	    output: { filename: "./src/js/bundle.js" },
	    resolve: {
	        extensions: ['.js', '.jsx']
	    },
		devtool: 'source-map', 
	    // using webpack loader
	    module: {
	        loaders: [
	            {
	                test: /\.jsx?/,
	                exclude: /node_modules/,
	                loader: "babel-loader", // or just "babel"
	                query: {
	                    presets: ['es2015', 'stage-0', 'react']
	                }
	            }
	        ]
	    }
	};

This is everything that is inside of our `webpack.config` file. There aren't many lines, but the code there does a lot for our bundle and loader settings.



1. The first thing that you'll notice is the entry, `./src/js/entry.js`. This tells Webpack that it will find our entry file, in this case entry.js. 

The entry file is what builds our routes and exports them to our html div, #app. In previous exercises, this was app.js.

2. The next line is our output, here we have an object specifying our file name. Outputs always take a file name but have other options as well. For our intended purposes, we only need the file name. 

The output tells Webpack where to place the bundle and what it should be called. For us, it will be in the src directory and aptly named, bundle.js

3. Onto resolve!

Resolve is telling Webpack to find files with the endings, `.js` and `.jsx` within the paths stemming from out entry. 

If you want to bundle more than JS and JSX with webpack, you would need to specify the file type here, for instance `.scss`. But, you'll need to install the proper loaders in order for Babel to compile correctly!

4. Devtool is just what it sounds like, a developer tool. In our case we are using source map. 

This generates a map of sources, like its name implies, to help us debug our software. It is not something for production, just developing.

5. At last the module loaders

Here is where the Babel magic happens!

Within our loaders array, we have an object for our Babel settings.

We have a test key, used to test our desired file type that needs compiling, as well as exclude, node modules do not need to be compiled, they should do that on their own if need be.

We then tell Webpack our loader. Babel. Now Webpack knows which compiler we're using.

The last key is our query. Now, this would not be present if we were using a `babel.rc` file, which you will see in some tutorials. 

A `babel.rc` file houses the presets, keywords that babel looks for so it knows how to read the files, just like our query. 

Personally, I prefer to use query, but ultimately it is up you which way you want to go. 

Within our query we have react, of course, es2015, which is ES6, and stage-0. Stage-0 is a beta preset for Babel that compiles ES7 syntax. It is still in the works, but for the most part functions just fine.


Now that we know what's in our newer files, it's time to truly get started!

## Running our Scripts

In your `package.json` file, you'll notice an area for scripts

	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "dev": "webpack --watch",
	    "start": "node server.js"
	  },

This is where we store command to run with npm. Both `test` and `start` are built in keywords for npm. To run those scripts, simply type

	npm start
Or
	npm test

For all custom script names, like `dev`, we need to use the keyword run.

	npm run dev

### What do the scripts do?

React needs to run on a server to in order to render itself. We do this by running our server file. But, instead of always having to say, `node server.js`
we can simply do
	npm start 

Before we run our server though, we need to have webpack compile our code. Do this by running
	npm run dev

You will have to use two terminal windows for this.

1. The first window will run webpack which will rebundle your files after every save

2. The second will run your server which will host your React application at localhost:8080

Have both of these terminals running while developing your application.

And that's it! 


## Let loose and have fun coding

Now that you know all about setting up your own React environment, it's time to do so. 

Trying mimicking all of the basics in this Repo when you start to make your own personal React applications. 

For now, you can play around with the provided components and API in order to see how similar it is to the Create-React-APP environment.

### How to make webpack even better?

You guys may want to edit the webpack configuration provided, go for it! 

Try adding the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html "webpack-dev-server") so that you don't have to refresh your browser manually every time you rebundle.

Try adding CSS or better yet, [SASS/SCSS](https://github.com/webpack-contrib/sass-loader "SASS") to your loaders in order to compile styles in addition to JavaScript. 

Remember, the world is your node oyster. Go out there an explore options! 


...Not before making a new branch though, don't want to screw up a working foundation ;P