class CatRentalRequestsController < ApplicationController
  def index
    @cat_rental_requests = CatRentalRequest.all

    render :index
  end

  def new
    @cats = Cat.all

    render :new
  end

  def create
    @cat_rental_request = CatRentalRequest.new(cat_rental_request_params)

    if @cat_rental_request.save!
      render :show
    else
      redirect_to cat_rental_requests_url
    end
  end



  def show
    @cat_rental_request = CatRentalRequest.find_by(id: params[:id])

    render :show
  end

  private
  def cat_rental_request_params
    params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date)
  end
end
