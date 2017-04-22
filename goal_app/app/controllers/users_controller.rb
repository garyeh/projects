class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = "oops"
      redirect_to new_user_url
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user
      @user.destroy
      redirect_to new_user_url
    else
      flash.now[:errors] = "you don't exist! Mr Nobody"
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
