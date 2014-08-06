class Api::ResultsController < ApplicationController

  def index
    render json: Result.all
  end

  def show
    render json: Result.find(params[:id])
  end

  def create
    result = Result.new(result_params)
    if result.save
      render json: result, status: 201, location: result
    else
      render json: result.errors, status:422
    end
  end

  def destroy
    result = Result.find(params[:id])
    result.destroy!
    render nothing: true, status: 204
  end

  private

    def result_params
      params.require(:result).permit(:date, :lift_id, :rep_scheme, :weight, :note)
    end
end