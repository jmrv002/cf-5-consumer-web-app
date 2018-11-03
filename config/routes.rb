Rails.application.routes.draw do
  devise_for :users
  resources :users
  
  root 'simple_pages#landing_page'

  get 'contact', to: 'simple_pages#contact', as: 'contact'

  post 'simple_pages/thank_you'
  
  resources :orders, only: [:index, :show, :create, :destroy]
  
  resources :products
end
