class UsersController < ApplicationController

  before_action :go_to_cats_url
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.reset_session_token
      login(@user)
      redirect_to cats_url
    else
      render :new
    end
  end

  def go_to_cats_url
    redirect_to cats_url if current_user
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :password_digest, :session_token)
  end
end
