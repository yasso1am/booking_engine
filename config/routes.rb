Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :cabins
    resources :promo_codes
    resources :reservations
    resources :user_promo_codes
    resources :users, only: [:index, :show, :update, :destroy]
    get 'employees', to: 'users#employees'

    resources :contacts, only: [:create]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
