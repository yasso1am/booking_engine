class AddMaxByUserToPromoCodes < ActiveRecord::Migration[5.1]
  def change
    add_column :promo_codes, :max_by_user, :integer
  end
end
