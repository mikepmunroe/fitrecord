class LiftsController < ApplicationController
  def index
    lifts = Lift.all
    render json: lifts, status: 200
  end
end