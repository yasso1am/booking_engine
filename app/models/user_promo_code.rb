class UserPromoCode < ApplicationRecord
  belongs_to :user
  belongs_to :promo_code
  belongs_to :reservation, optional: true
  validates :user_id, :promo_code_id, presence: true, numericality: { only_integer: true }

  def self.check_codes(promo_code_id, user_id)
    return true
  end

end
