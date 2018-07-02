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
      user_id = current_user.id
      x = UserPromoCode.new({user_id: user_id, promo_code_id: promo_code_id}) if UserPromoCode.check_codes(promo_code_id, user_id)
      if x.save
        render json: x
      else
        render json: error
      end
    else
      render json: error
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
