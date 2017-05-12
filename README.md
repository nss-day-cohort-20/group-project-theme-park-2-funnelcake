# Theme Park Map Builder - Group Project

As a team you will create a interactive map of a theme park. The park will include five areas with different attractions and events.

## Park Details
* Display park info in a header.
    - List all attractions based on type with drop down selector (all restaurants, all shows, etc.).
* Show each area in a box (MVP).
* Click on box will display details about the area. 
* Each area will include four types of attractions (Rides, Restaurants, Characters, etc.)
* Each type will have two different attractions. For example:
    - Rides: Ride Number 1 and Ride Number 2
    - Restaurants: Good Food #1 and Not so Good Food
    - Characters: Hanna Banana and Greg the Giant
    - Shops: The Horse Hole and Whole Horse with Grains
* Each area will have a minimum of 8 attractions.
* Create a footer for page displaying copyright information and Social Media.

### Time Ticker
Some attractions and shows only occur at specific times. Allow the user to select a starting time and display related events. The user should be able to click a button and cycle through 30 minute increments and view events occurring within that time window. This should only cycle through the hours the park is open. Sort items by attraction type. (All character meets, all concerts, etc.)
* Stretch Option - display an icon in respected area box representing timed event. 

### Customize the Data
Create your own park areas and attractions.

## Stretch GOALS
### Create Itinerary List
1. Allow a user to select items and keep as a list.
2. Allow user to delete items.
3. Do not allow user to select multiple items at same time.
2. Post itinerary list to Firebase. Retrieve and display each time page is loaded.

### Show A Real Map
* Use canvas element and make it pretty.


### Specifications
* Data should be pulled from Firebase based on collections. Pull only what you need.
* Each area should have a separate js file with getters and setters.
* All Firebase calls should be in `attractory.js` file (aka attraction factory).
* 

### Technology Requirements
* Browserify
* Handlebars
* Grunt (with JSHINT) 
* Firebase 
* JQuery 
* Promises
* CSS Framework - your choice
* SASS




Review `.json` file. Insert a name for your theme park.
Create Firebase account/database and upload `.json` to use as data.

