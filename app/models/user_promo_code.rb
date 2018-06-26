class UserPromoCode < ApplicationRecord
  belongs_to :user
  belongs_to :promo_code
  belongs_to :reservation
end
