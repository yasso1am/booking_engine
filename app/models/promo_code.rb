class PromoCode < ApplicationRecord
  has_many :user_promo_codes, dependent: :destroy
  has_many :users, through: :user_promo_codes 
  validates :code, :description, :start_date, :end_date, :max_useable, presence: true
  validates :max_useable, numericality: { only_integer: true }
  validates :code, uniqueness: true
end
