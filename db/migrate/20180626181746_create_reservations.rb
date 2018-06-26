class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.date :start_date
      t.date :end_date
      t.text :special_requests
      t.boolean :smoking_room
      t.string :size
      t.boolean :ada_accessible
      t.belongs_to :cabin, foreign_key: true
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
