Rails.application.routes.draw do
  
  resources :visits
  resources :rooms
  resources :guests
 
  get "/guestvisits", to: "visits#guest_visits"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
