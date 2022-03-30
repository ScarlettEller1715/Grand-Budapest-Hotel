Rails.application.routes.draw do
  resources :visits
  resources :rooms
  resources :guests, only:[:show, :create, :update]

  #Guests
  get "/username", to: "guests#show_username"
  get "/me", to: "guests#show"

  post "/signup", to: "guests#create"

  #Visits
  get "/guestvisits", to: "visits#guest_visits"

  post "/booking", to: "visits#create"

  patch "/bookingupdate/:id", to: "visits#update"

  delete "/cancellation/:id", to: "visits#destroy"

  #Sessions
  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"
  
  
  # get "/username", to: "guests#show_username"
  # get "/guestvisits", to: "visits#guest_visits"
  # get "/me", to: "guests#show"
  
  # post "/login", to: "sessions#create"
  # post "/signup", to: "guests#create"
  # post "/booking", to: "visits#create"

  # patch "/bookingupdate/:id", to: "visits#update"
  
  # delete "/logout", to: "sessions#destroy"
  # delete "/cancellation/:id", to: "visits#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
