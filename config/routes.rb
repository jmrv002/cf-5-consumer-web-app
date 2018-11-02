Rails.application.routes.draw do
  root 'simple_pages#landing_page'
  resources :orders, only: [:index, :show, :create, :destroy]
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
