class Api::UserPromoCodesController < ApplicationController
  before_action :set_user_promo_code, only: [:show, :destroy]
  
  def index
    render json: UserPromoCode.order('created_at')
  end

  def show
    render json: @user_promo_code
  end

  def create 
    code = PromoCode.find_by(code: params[:code]) 
    if code
      user = current_user.id
      result = UserPromoCode.check_codes(code.id, user)
    if result[:valid] == false
        render json: {errors: result[:message]}, status: 422
    else
      user_promo_code = UserPromoCode.create({user_id: current_user.id, promo_code_id: promo_code_id})
        render json: {promo_code: x[0], message: result[:message]}
      end
    else
      render json: {errors: "That code doesn't exist"}, status: 422
    end
  end
  

  def destroy
    destroy @user_promo_code
  end

  private

    def set_user_promo_code
      @user_promo_code = UserPromoCode.find(params[:id])
    end

    def user_promo_code_params
      params.require(:user_promo_code).permit(:user_id, :promo_code_id)
    end
end
