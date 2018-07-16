class AddDetailsToReservations < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :first_name, :string
    add_column :reservations, :last_name, :string
    add_column :reservations, :email, :string
    add_column :reservations, :phone_number, :string
    add_column :reservations, :zip_code, :string
    add_column :reservations, :country, :string
    add_column :reservations, :address_line1, :string
    add_column :reservations, :address_line2, :string
    add_column :reservations, :city, :string
    add_column :reservations, :state, :string
    add_column :reservations, :pet_friendly, :string

  end
end
