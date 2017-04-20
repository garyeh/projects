class SessionsController < ApplicationController

  before_action :go_to_cats_url, except: [:destroy]

  def new
    render :new
  end

  def create
    username, password = session_params.values
    @user = User.find_by_credentials(username, password)

    if @user
      login(@user)
      redirect_to cats_url
    else
      flash.now[:errors] = ["invalid credentials"]
      render :new
    end
  end

  def destroy
    if current_user
      logout
      redirect_to cats_url
    end
  end

  def go_to_cats_url
    redirect_to cats_url if current_user
  end

  private
  def session_params
    params.require(:user).permit(:user_name, :password)
  end
end
