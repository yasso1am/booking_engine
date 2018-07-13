Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :cabins
    resources :promo_codes
    resources :reservations
    resources :user_promo_codes
    resources :users, only: [:index, :show, :update, :destroy]
    get 'employees', to: 'users#employees'
    get 'all_reservations', to: 'reservations#all_reservations'

    resources :contacts, only: [:create, :index]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
