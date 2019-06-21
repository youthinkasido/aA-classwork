Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\
   resources :users, only: [:create, :new, :show, :index] #what needs to be limited?
  #  resources :users, only: [:new, :create, :show]

  resource :session, only: [:new, :create, :destroy] #creates paths as singular, controllers are still plural, controllers are always plural no matter what


end
