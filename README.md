
![Spotifinder Logo](https://raw.githubusercontent.com/logamill/Phase-5-Spotifinder/main/client/src/assets/logo.png?raw=true "Example Home Page")

# Spotifinder

### Author: Logan Miller
### Date: 08.10.2022

## Description 

Spotifinder offers a fun and interactive way for users to visualize their Spotify listening data over a variety of different time periods ranging from all-time to ~6 months to ~4 weeks. Users can see various hidden analytical categories including: danceability, liveness, acousticness, energy, popularity and valence (how happy or sad a song is) and see how they match with other users based on those categories. 

## Design 

### Initial Wireframes 
When designing the app I wanted to have it look similar to Spotify's UI while showing the information in a clear and clean way. 

![Wireframe Home](https://raw.githubusercontent.com/logamill/Phase-5-Spotifinder/main/client/src/assets/design1.jpg?raw=true "Wire Home")

Initially I was only going to display the top 10 songs and artists for a user as well as their top 5 song/album arts on their profile page. However, as time went on and I started to work on collecting analytical data I realized how interested people were in seeing their analytic averages. After showing the project to a few friends it became clear that the analytics should be the focal point for users to see since Spotify never actually shows the user any of these hidden values. 

### Getting the Data 
Using the Spotify API is pretty simple depending on what you're trying to do with it. They are pretty great about allowing devs to just grab basic information from Spotify and build something like a Spotify clone or playlist app without having to do much additional authentication. However, if you're trying to pull user data you need to use OmniAuth and whitelist the email address on the account in order for them to grant access to your app. 

Once the users links their account a request is made to Spotify's servers that includes all the keywords for the information I want to pull in a URL with the appropriate tokens and information. This data is then routed through various controllers in Rails, sanitized and stored in a SQL table. 

## Project 

### Homepage 

![Home page](https://raw.githubusercontent.com/logamill/Phase-5-Spotifinder/main/client/src/assets/home.jpg?raw=true "Home")

### User Profile  

![User Profile](https://raw.githubusercontent.com/logamill/Phase-5-Spotifinder/main/client/src/assets/analytics.jpg?raw=true "Profile")

![User Top](https://raw.githubusercontent.com/logamill/Phase-5-Spotifinder/main/client/src/assets/top.jpg?raw=true "Top")

### Compare

![User Compare](https://raw.githubusercontent.com/logamill/Phase-5-Spotifinder/main/client/src/assets/compare.jpg?raw=true "Compare")


## Tools

* Ruby 2.7

* React 18.2

* Rails 7.0.3

* SASS 1.53

* Postgresql

* OmniAuth 2.0

### 

