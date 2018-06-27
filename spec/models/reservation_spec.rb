require 'rails_helper'

RSpec.describe Reservation, type: :model do
  describe 'attributes' do
    [:start_date, :end_date, :special_requests, :smoking_room, :size, :ada_accessible].each { |attr| it { should respond_to attr }}
  end

  describe 'validations' do  
    it 'validates presence of start_date, end_date, special_requests, smoking_room, ada_accessible' do
    user = FactoryBot.create(:user)
    reservation = FactoryBot.create(:reservation, user: user)
     expect(reservation.smoking_room).to eql(true).or eql(false)
     expect(reservation.ada_accessible).to eql(true).or eql(false)
     expect(reservation.user_id).to eql(user.id)
    end
      it { should validate_presence_of(:start_date) }
      it { should validate_presence_of(:end_date) }
      it { should validate_presence_of(:special_requests) }
      it { should validate_presence_of(:size) }
  end 

   describe 'relationships' do
     it { should have_many(:user_promo_codes) }
   end
end
