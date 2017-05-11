Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :gifts, only: [:show]
    resources :parties, only: [:index, :show]
    resources :guests, only: [:index, :show] do
      resources :gifts, only: [:index]
    end
  end
end
