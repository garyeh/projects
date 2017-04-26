class PostsController < ApplicationController
  before_action :require_signed_in
  before_action :require_author_privilege, only: [:edit, :update]

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      redirect_to new_post_url
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def edit
    render :edit
  end

  def update
    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy
    redirect_to subs_url
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content, :author_id, sub_ids: [])
  end

  def require_author_privilege
    @post = Post.find_by(id: params[:id])
    unless current_user == @post.author
      flash[:errors] = "Only the author is allowed to edit the post."
      redirect_to post_url(@post)
    end
  end
end
