class Api::PromoCodesController < ApplicationController
  before_action :set_promo_code, only:  [:show, :update, :destroy]

  def index
   render json: PromoCode.all
  end

  def show
    render json: @promo_code
  end

  def create
    promo_code = PromoCode.create(promo_code_params)
    if promo_code.save
      render json: promo_code
    else
      render json: {errors: promo_code.errors.full_messages.join(',')}, status: 422
    end
  end

  def update
    if @promo_code.update(promo_code_params)
      render json: @promo_code
    else
      render json: {errors: @promo_code.errors.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @promo_code.destroy
  end

  private
  def set_promo_code
    @promo_code = PromoCode.find(params[:id])
  end

  def promo_code_params
    params.require(:promo_code).permit(:code, :description, :start_date, :end_date, :max_useable, :kind, :value, :max_by_user)
  end

end

