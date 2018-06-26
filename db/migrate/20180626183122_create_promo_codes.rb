class CreatePromoCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :promo_codes do |t|
      t.string :code
      t.string :description
      t.date :start_date
      t.date :end_date
      t.integer :max_useable

      t.timestamps
    end
  end
end
