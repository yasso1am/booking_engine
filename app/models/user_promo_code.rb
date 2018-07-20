class UserPromoCode < ApplicationRecord
  belongs_to :user
  belongs_to :promo_code
  belongs_to :reservation, optional: true
  validates :user_id, :promo_code_id, presence: true, numericality: { only_integer: true }

  def self.check_codes(promo_code_id, user_id)
    promo_code = PromoCode.find(promo_code_id)
    times_used_by_user = UserPromoCode.where(user_id: user_id).count
    times_used_total = UserPromoCode.where(promo_code_id: promo_code_id).count
    if promo_code.max_useable == nil && times_used_by_user > promo_code.max_by_user
      return {valid: false, message: "You have used this too many times"}
    elsif times_used_by_user > promo_code.max_by_user
      return {valid: false, message: "You have used this too many times"}
    elsif times_used_total > promo_code.max_useable
      return {valid: false, message: "This code has expired"}
    else
      return {valid: true, message: "Valid promo code" }
    end
  end
end
