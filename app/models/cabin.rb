class Cabin < ApplicationRecord
  has_many :reservations
  validates :size, :building, :status, :base_price, presence: true 
  validates :smoking_room, inclusion: { in: [true, false] }
  validates :ada_accessible, inclusion: { in: [true, false] }
end
