Rails.application.routes.draw do
  resources :artists, only: [:index, :show, :create]
  resources :tracks, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get '/auth/spotify/callback', to: 'users#spotify'
  get "/profile", to: "tracks#index"
  get '/users', to: "users#index"
  get '/users/:id', to: "users#show"
  get '/me', to: "users#authorized"
  delete "/logout", to: "sessions#logout" 
end
