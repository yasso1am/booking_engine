class Api::UserPromoCodesController < ApplicationController
  before_action :set_user_promo_code, only: [:show, :destroy]
  
  def index
    render json: UserPromoCode.order('created_at')
  end

  def show
    render json: @user_promo_code
  end

  def create 
    if PromoCode.where(code: params[:code]) 
      promo_code_id = PromoCode.where(code: params[:code])[0].id
      result = UserPromoCode.check_codes(promo_code_id, user_id)
      if result.valid == false
        render json: {errors: result.message}, status: 422
      else
        user_promo_code = UserPromoCode.create({user_id: current_user.id, promo_code_id: promo_code_id})
          render json: user_promo_code
      end
    else
      render json: {errors: promo_code.errors.full_messages.join(',')}, status: 422
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
