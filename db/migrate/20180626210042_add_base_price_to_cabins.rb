class AddBasePriceToCabins < ActiveRecord::Migration[5.1]
  def change
    add_column :cabins, :base_price, :integer
  end
end
