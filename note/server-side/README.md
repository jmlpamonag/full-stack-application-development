# Server-Side Programming with Express

## Getting Started with Express

Express is a web framework built atop the Node.js HTTP module. It is fast, unopinionated, and minimalist. It is 
distributed via an NPM package. It should be installed locally rather than globally. 

Express provides support for routing and serving static files. Almost all other functionality is provided by third-party 
middleware modules: processing request body via body parser; working with cookies via cookie parser; using session via 
Express sessions; and handling authentication via Passport.

A simple Express 'hello world' application can be found [here](https://github.com/muzzarellimj/full-stack-application-development/tree/main/note/server-side/hello-world).

## Working with Static Files

Static files are HTML pages that can be served directly with Express. To serve up static files, the 
`express.static(root, [options])` function is invoked with the folder path to the files served. The `root` argument
specifies the root directory from which to serve the static assets. The `[options]` argument can include values such as 
`index`, which specifies the filename of the default file (default of `index.html` to serve if no file is specified; 
and `setHeaders`, which allows a function to be set for specifying custom headers on static file requests.

A sample Express application handling static files can be found [here](https://github.com/muzzarellimj/full-stack-application-development/tree/main/note/server-side/static-file).