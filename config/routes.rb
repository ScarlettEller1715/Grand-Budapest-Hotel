Rails.application.routes.draw do
  resources :visits
  resources :rooms
  resources :guests, only:[:show, :create, :update]

  get "/username", to: "guests#show_username"
  get "/guestvisits", to: "visits#guest_visits"
  get "/me", to: "guests#show"
  
  post "/login", to: "sessions#create"
  post "/signup", to: "guests#create"
  post "/booking", to: "visits#create"
  
  delete "/logout", to: "sessions#destroy"
  delete "/cancellation/:id", to: "visits#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
