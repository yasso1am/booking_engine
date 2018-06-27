class UserPromoCode < ApplicationRecord
  belongs_to :user
  belongs_to :promo_code
  belongs_to :reservation
  validates :user_id, :reservation_id, :promo_code_id, presence: true, numericality: { only_integer: true }
end
