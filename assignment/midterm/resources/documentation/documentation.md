# PodScholar: Documentation

## Features

This section discusses the features implemented in this iteration of the project, both visually with HTML and CSS and 
logically with JavaScript.  Each subsection will discuss the design and features of each HTML page (or significant 
component thereof) within the project in order of ease of navigation and purpose.

### Header and Footer Navigation

The header is identical across each page and is static in the left portion, but the right portion is dynamically 
generated based on if the user is signed in, the status of which can be accessed via a 
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) key.  If the user is signed in, the 
script will render options to sign out and view account; if the user is not logged in, the script will render options to 
sign in or register.  The footer is also identical across each page and contains static links to each navigable webpage 
on the site.

### [Home](https://muzzarellimj.github.io/full-stack-application-development/assignment/midterm/index.html)

The homepage is more of a landing page and serves as the initial view when a user visits the site. This view offers a 
short placeholder description of the site and button on the left, as well as a simple illustration representing an 
individual interactive with a mobile audio content platform.