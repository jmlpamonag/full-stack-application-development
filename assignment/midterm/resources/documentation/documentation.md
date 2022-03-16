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

### [Discover](https://muzzarellimj.github.io/full-stack-application-development/assignment/midterm/discover.html)

This is the starting point for finding the majority of the content on the platform. To the left is a sticky menu with
options to filter displayed content by keyword, author, or journal, as well as by category, a list which is generated
from a JSON document containing [available categories](https://jsonblob.com/951604363324047360). To the right is a 
content pane wherein podcast data is displayed in Bootstrap [card](https://getbootstrap.com/docs/5.1/components/card/)
elements and initially displayed in rows with section headers pertaining to the corresponding category. Each card 
contains the podcast title and links to the corresponding author and podcast detail pages, all of which are pulled
from JSON documents containing [registered authors](https://jsonblob.com/950254564695883776) and 
[published podcasts](https://jsonblob.com/950251742357110784). This view could be extended to display and organize 
content by the filter option values, distinct user curation, date of release, or popularity.