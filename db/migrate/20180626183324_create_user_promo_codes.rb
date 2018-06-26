class CreateUserPromoCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :user_promo_codes do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :promo_code, foreign_key: true
      t.belongs_to :reservation, foregin_key: true

      t.timestamps
    end
  end
end
