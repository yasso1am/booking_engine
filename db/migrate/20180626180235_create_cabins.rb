class CreateCabins < ActiveRecord::Migration[5.1]
  def change
    create_table :cabins do |t|
      t.string :size
      t.string :building
      t.string :status
      t.boolean :smoking_room
      t.boolean :ada_accessible

      t.timestamps
    end
  end
end
