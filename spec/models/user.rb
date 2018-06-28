require 'rails_helper'

RSpec.describe User, type: :model do
  
  describe 'attributes' do
    [:email, :name].each { |attr| it {should respond_to attr }}
  end

  describe 'validations' do
    it 'validates presence of name and email' do
    user = FactoryBot.create(:user)
    expect(user.name).to eql('stacy')
    expect(user.email).to eql('testy1@test.com')
  end
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
  end
end