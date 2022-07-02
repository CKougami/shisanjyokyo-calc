Rails.application.routes.draw do
  get 'calcs/index'
  root to: "calcs#index"
end
