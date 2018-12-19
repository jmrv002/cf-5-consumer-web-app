Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "user_registrations" }

  resources :users
  
  root 'simple_pages#index'

  get 'contact', to: 'simple_pages#contact', as: 'contact'

  post 'simple_pages/thank_you'
  
  resources :orders, only: [:index, :show, :create, :destroy]
  
  resources :products do
    resources :comments
  end

  post 'payments/create'
end
