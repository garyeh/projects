Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :subs, except: [:destroy]
  resources :comments, only: [:create]
  resources :posts, except: [:index] do
    resources :comments, only: [:new]
  end
end
