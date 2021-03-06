class CatsController < ApplicationController
  def index
    @cats = Cat.all

    render :index
  end

  def new
    render :new
  end

  def show
    @cat = Cat.find_by(id: params[:id])

    render :show
  end

  def create
    @cat = Cat.new(cat_params)

    if @cat.save
      render :show
    else
      redirect_to cats_url
    end
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def update
    @cat = Cat.find_by(id: params[:id])

    if @cat
      @cat.update_attributes(cat_params)
      redirect_to cats_url
    else
      render :edit
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :color, :birth_date, :sex, :description)
  end
end
