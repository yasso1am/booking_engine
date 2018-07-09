require 'rails_helper'

RSpec.describe PromoCode, type: :model do

	describe 'attributes' do
		[:code, :description, :max_useable, :start_date, :end_date, :value, :kind].each { |attr| it { should respond_to attr }}
	end

	describe 'validations' do
		it { should validate_presence_of(:code) }
		it { should validate_presence_of(:description) }
		it { should validate_presence_of(:max_useable) }
		it { should validate_presence_of(:start_date) }
		it { should validate_presence_of(:end_date) }
		it { should validate_presence_of(:kind) }
		it { should validate_presence_of(:value) }
		it { should validate_numericality_of(:max_useable) }
		it { should validate_numericality_of(:value) }
		it { should validate_uniqueness_of(:code) }
		it { should validate_inclusion_of(:kind).in_array(['dollar_amount', 'percentage'])}
	end
	
	describe 'relationships' do
   	it { should have_many(:user_promo_codes).dependent(:destroy) }
   	it { should have_many(:users).through(:user_promo_codes) }
  end
end
