class HomeController < ApplicationController
  def index
    redirect_to 'http://localhost:3001/app/login'
  end
end