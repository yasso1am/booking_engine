class Reservation < ApplicationRecord
  belongs_to :cabin, optional: true
  belongs_to :user
  has_many :user_promo_codes

  validates :start_date, :end_date, :size, presence: true 
  validates :smoking_room, inclusion: { in: [true, false] }
  validates :ada_accessible, inclusion: { in: [true, false] }

  def self.reservation
    Reservation.find_by_sql("
    SELECT
    to_char(start_date, 'month') AS start_month,
    date_part('month', start_date) AS month_num,
    size, 
    CAST(count(distinct id) / 30.0 * 100.0 AS INT )as room_count  
    FROM reservations
    group by 
    to_char( start_date, 'month' ),
    month_num,
    size
    ORDER by month_num ASC
    ")
  end

end
