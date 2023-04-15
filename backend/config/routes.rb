Rails.application.routes.draw do
  namespace :auth do
    get 'current_user/index'
    devise_scope :user do
      post 'password/check_token', to: "passwords#check_token"
    end
  end
  devise_for :users, at: 'auth', path: 'auth',
  controllers: {
    confirmations: 'auth/confirmations',
    passwords: 'auth/passwords',
    registrations: 'auth/registrations',
    sessions: 'auth/sessions'
  }


  get '/index', to: 'home#index'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
end
