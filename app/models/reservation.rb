class Reservation < ApplicationRecord
  belongs_to :cabin, optional: true
  belongs_to :user
  has_many :user_promo_codes
end
