class PromoCode < ApplicationRecord
  has_many :user_promo_codes, dependent: :destroy
  has_many :users, through: :user_promo_codes 
end
