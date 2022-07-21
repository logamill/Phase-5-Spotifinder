
Spotifinder - 

Compare and visualize your spotify listening habits with friends and users from all over and find out who your closest music match is!

Stretch Goals:
    ‘Chase’ feature - follow someone who is listening to something
    CSS/Styling Goals
    Friend feature/chat 

Workflow: 
    Preparation: 
    Brainstorm Project Goals
    Plan out Timeline
    Design Ideas 
    Research Spotify API & Authentication 
    Back-End:
    Set-up Spotify Auth & Token Creation 
    Set-up Rails base Environment 
    Create Tables and Migrations 
    Use postgresql for Heroku hosting
    Create User Authentication
    With strong passwords  **** if necessary
    Set-up Routes
    Deploy Environment 
    Front-End:
    Set-up React base Environment 
    React Components Set-up
    Design and Implement Individual Components 
    CSS/SASS Styling 

API Routes:
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
    get '/auth/spotify/callback', to: 'users#spotify'
    get "/profile", to: "tracks#index"
    get '/users', to: "users#index"
    get '/users/:id', to: "users#show"
    get '/me', to: "users#authorized"
    delete "/logout", to: "sessions#logout" 



