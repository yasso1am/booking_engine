require 'rails_helper'

RSpec.describe Api::PromoCodesController, type: :controller do


  let (:valid_attributes) {
    {code: "123", description: "test", start_date: '2018-09-03', end_date: '2018-09-10', max_useable: 2, kind: 'summer', value: 7}
  }

  let (:invalid_attributes) {
    {code: 123, description: "test", start_date: '2018-09-03' , end_date: '2018-09-10', max_useable: 2, kind: 'summer', value: 7}

  }

  describe "GET #index" do
    it "returns success" do
      promo_code = FactoryBot.create(:promo_code)
      get :index
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns success" do
      promo_code = FactoryBot.create(:promo_code)
      get :show, params: {id: promo_code.id}
      expect(response).to be_successful
    end
  end


  describe "POST #create" do
    context "with valid params" do
      it "returns success" do
        expect {
          post :create, params: { promo_code: valid_attributes }
        }.to change(PromoCode, :count).by(1)
      end
    end
  end

  describe "PUT #update" do
    context "with new info" do
      let(:new_attributes) {
        {max_useable: 1}
      }
      it "updates the promo code" do
        promo_code = FactoryBot.create(:promo_code)
        put :update, params: {id: promo_code.id, promo_code: new_attributes}
        promo_code.reload
        expect(promo_code.max_useable).to eql(new_attributes[:max_useable])
      end

      context "with invalid params" do
        it 'does not update the promo code' do
        promo_code = FactoryBot.create(:promo_code)
        put :update, params: {id: promo_code.id, promo_code: invalid_attributes}
        promo_code.reload
        expect(promo_code.code).to_not eql(invalid_attributes[:code])
        end
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the promo code" do
      promo_code = FactoryBot.create(:promo_code)
      expect {
        delete :destroy, params: {id: promo_code.id}
      }.to change(PromoCode, :count).by(-1)
    end
  end
end
