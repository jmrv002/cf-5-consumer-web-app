Rails.application.routes.draw do
  root 'pages#index'

  get 'redirect_to_previous_page', to: 'pages#previous_page', as: 'previous_page'

  get 'user/:name', to: 'pages#user', as: 'dynamic_link'

  resources :products
end
