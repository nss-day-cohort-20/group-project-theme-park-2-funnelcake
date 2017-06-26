# Theme Park Map Builder - Group Project

As a team you will create a interactive map of a theme park. The park will include five areas with different attractions and events.

## Park Details
* Display park info in a header.
    - List all attractions based on type with drop down selector (all restaurants, all shows, etc.).
* Show each area in a box (MVP).
* Each area should have a color theme.
* Click on box will display details about the area.
* Each area will include four types of attractions (Rides, Restaurants, Characters, etc.)
* Each type will have two different attractions. For example:
    - Rides: Bumber Cars and Night Crawler Coaster
    - Restaurants: Steak and Fries and Surf the Turf
    - Characters: Cinderella and Greg the Giant
    - Shops: The Horse Hole and Whole Horse Gifts
* Each area will have a minimum of 8 attractions.
* Click on an attraction and display the description.
* Display the times if an attraction has a time value.
* Create a footer for page displaying copyright information, location with a link to google maps, and park hours.

### Time Ticker
Some attractions and shows only occur at specific times. Allow the user to select a starting time and display related events. The user should be able to click a button and cycle through 30 minute increments and view events occurring within that time window. This should only cycle through the hours the park is open. Sort items by attraction type. (All character meets, all concerts, etc.) Consider how you will handle "Let the Magic Begin", which starts at 8:55am.

**Stretch Option** - display an icon in respected area box representing timed event. 

## Stretch GOALS
### Customize the Data
Create your own park areas and attractions.

### Create Itinerary List
1. Allow a user to select items and keep as a list.
2. Allow user to delete items.
3. Do not allow user to select multiple items at same time.
2. Post itinerary list to Firebase. Retrieve and display each time page is loaded.

### Show A Real Map
* Use canvas element and make it pretty.


## Project Specifications
* Data should be pulled from Firebase based on collections. Pull only what you need.
* Each area should have a separate js file with getters and setters.
* All Firebase calls should be in `attractory.js` file (aka attraction factory).
* Use SASS to control your color themes.
* Incorporate a CSS Framework

## Technology Requirements
* SASS
* JQuery 
* Grunt (with JSHINT) 
* Promises
* Browserify
* Handlebars
* Grid framework of your choice
* Firebase for data storage and retrieval
