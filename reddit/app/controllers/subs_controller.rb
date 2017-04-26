class SubsController < ApplicationController
  before_action :require_signed_in
  before_action :require_mod_privilege, only: [:edit, :update]

  def new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.user_id = current_user.id

    if @sub.save
      redirect_to subs_url
    else
      flash[:errors] = @sub.errors.full_messages
      redirect_to new_sub_url
    end
  end

  def edit
    render :edit
  end

  def update
    if @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end

  def index
    @subs = Sub.all
    render :index
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description, :user_id)
  end

  def require_mod_privilege
    @sub = Sub.find_by(id: params[:id])
    unless current_user == @sub.moderator
      flash[:errors] = "Only mods are allowed to edit the sub."
      redirect_to sub_url(@sub)
    end
  end
end
