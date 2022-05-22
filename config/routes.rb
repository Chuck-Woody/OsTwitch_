Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create,:index]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index,:show,:update]
    resources :follows, only: [:create, :destroy,:show]
    
  end
  get "/api/user/:user_id/follows", to: "api/follows#index"
  root "static_pages#root"
end
 