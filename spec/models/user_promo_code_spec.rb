require 'rails_helper'

RSpec.describe UserPromoCode, type: :model do
	describe 'validations' do
		it { should validate_presence_of(:reservation_id) }
		it { should validate_presence_of(:user_id) }
		it { should validate_presence_of(:promo_code_id) }
		it { should validate_numericality_of(:user_id) }
		it { should validate_numericality_of(:reservation_id) }
		it { should validate_numericality_of(:promo_code_id) }
	end

	describe 'relationships' do
		it { should belong_to(:user) }
		it { should belong_to(:reservation) }
		it { should belong_to(:promo_code) }
	end
end
