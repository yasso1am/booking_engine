class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :reservations
  has_many :user_promo_codes, dependent: :destroy
  has_many :promo_codes, through: :user_promo_codes

end
