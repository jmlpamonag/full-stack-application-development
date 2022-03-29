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

## Routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI 
(or path) and a specific HTTP request method (GET, POST, etc.). Each route can have one or more handler functions, 
which are executed when the route is matched. Route definition utilises the following structure: 
`app.<method>(<path>, <handler>)`, where `app` is the instance of Express, `<method>` is an HTTP request method, 
`<path>` is a path on the server, and `<handler>` is the callback function executed when the route is matched. Express 
implements a function to address every HTTP verb. 

Routing can be further optimised by chaining handlers for a route path using `app.route()`. Because the path is
specified at a single location, creating modular routes is helpful in reducing redundancy and typos.

A sample Express application illustrating optimised routing can be found [here](https://github.com/muzzarellimj/full-stack-application-development/tree/main/note/server-side/routing).