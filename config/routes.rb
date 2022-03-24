Rails.application.routes.draw do
  
  resources :visits
  resources :rooms
  resources :guests, only:[:show, :create:, :update]

  get/'', to: "guests#show_username"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
