require 'rails_helper'

RSpec.describe Cabin, type: :model do
  describe 'attributes' do
  	[:size, :building, :status, :smoking_room, :ada_accessible, :base_price].each { |attr| it { should respond_to attr }}
  end

  describe 'validations' do	
  	it 'validates presence of size, building, status, smoking_room, ada_accessible, base_price' do
  	 cabin = FactoryBot.create(:cabin)
  	 expect(cabin.smoking_room).to eql(true).or eql(false)
  	 expect(cabin.ada_accessible).to eql(true).or eql(false)
  	end
	  	it { should validate_presence_of(:size) }
	  	it { should validate_presence_of(:building) }
	  	it { should validate_presence_of(:status) }
	  	it { should validate_presence_of(:base_price) }
  end 

   describe 'relationships' do
   	it { should have_many(:reservations) }
   end
end
