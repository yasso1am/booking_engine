class Reservation < ApplicationRecord
  belongs_to :cabin, optional: true
  belongs_to :user
  has_many :user_promo_codes

  validates :start_date, :end_date, :special_requests, :size, presence: true 
  validates :smoking_room, inclusion: { in: [true, false] }
  validates :ada_accessible, inclusion: { in: [true, false] }
end
