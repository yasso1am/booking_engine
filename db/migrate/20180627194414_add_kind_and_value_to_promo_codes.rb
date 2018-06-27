class AddKindAndValueToPromoCodes < ActiveRecord::Migration[5.1]
  def change
    add_column :promo_codes, :kind, :string
    add_column :promo_codes, :value, :float
  end
end
