class Api::LiftsController < ApplicationController

  def index
    render json: Lift.all
  end

  def show
    render json: Lift.find(params[:id])
  end

  def create
    lift = Lift.new(lift_params)
    if lift.save
      render json: lift, status: 201, location: lift
    else
      render json: lift.errors, status:422
    end
  end

  def destroy
    lift = Lift.find(params[:id])
    lift.destroy!
    render nothing: true, status: 204
  end

  private

    def lift_params
      params.require(:lift).permit(:name)
    end
end