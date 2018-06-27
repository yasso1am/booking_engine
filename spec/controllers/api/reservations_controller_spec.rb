require 'rails_helper'

RSpec.describe Api::ReservationsController, type: :controller do
  login_user

  let(:valid_attributes) {
    { start_date: '2018-08-30', end_date: "2018-09-02", special_requests: "MyText", smoking_room: false, size: "family", ada_accessible: false, cabin_id: nil }
  }

let(:invalid_attributes){
  { smoking_room: 'hello' }
}

  describe "GET #index" do
    it "returns http success" do
      reservation = @user.reservations.create! valid_attributes
      get :index
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns http success" do
      reserve = @user.reservations.create! valid_attributes
      get :show, params: { id: reserve.id }
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new reservation" do
        expect {
          post :create, params: { reservation: valid_attributes, user_id: @user.id }
        }.to change(Reservation, :count).by(1)
      end
    end
  end

  describe "PUT #update" do
    context "with new information" do
      let(:new_attributes) {
        { smoking_room: true }
      }
      it "updates the reservation" do
        reservation = @user.reservations.create! valid_attributes
        put :update, params: {id: reservation.id, reservation: new_attributes}
        reservation.reload
        expect(reservation.smoking_room).to eq(new_attributes[:smoking_room])
      end

    context "with invalid params" do
      it 'does not update the reservation' do
      reservation = @user.reservations.create! valid_attributes
      put :update, params: {id: reservation.id, reservation: invalid_attributes}
      reservation.reload
      expect(reservation.smoking_room).to_not eq(invalid_attributes[:smoking_room])
        end
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested reservation" do
      reservation = @user.reservations.create! valid_attributes
      expect {
        delete :destroy, params: {id: reservation.id}
      }.to change(Reservation, :count).by(-1)
    end
  end


end