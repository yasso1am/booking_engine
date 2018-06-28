require 'rails_helper'

RSpec.describe Api::CabinsController, type: :controller do

    let(:valid_attributes) {
        { size: "Medium", building: "TheBuilding", status: "MyText ", smoking_room: false, ada_accessible: false, base_price: 10 }
    }
    let(:invalid_attributes) {
        { size: " ", building: " ", status: " ", smoking_room: false, ada_accessible: false, base_price: 10 }
    }
    

        describe "GET #index" do
            it "returns a success response" do 
                get :index
                expect(response).to be_successful
            end
        end

        describe "GET #show" do
            it "returns a success response" do
                @cabin = Cabin.create! valid_attributes
                get :show, params: {id: @cabin.id}
                expect(response).to be_successful
            end
        end

        describe "POST #create" do
            context "with valid params" do
                it "creates a new cabin" do
                    expect {
                        post :create, params: {cabin: valid_attributes}
                }.to change(Cabin, :count).by(1)
                end
                it "redirects to the created cabin" do
                    post :create, params: {cabin: valid_attributes}
                    expect(response).to be_successful
                end
            
            
                context "with invalid params" do
                    it "does not create a new Cabin" do
                        expect {
                        post :create, params: {cabin: invalid_attributes}
                        }.to change(Cabin, :count).by(0)
                    end
                end
            end
        end

            describe "PUT #update" do
                context "with valid params" do
                    let(:new_attributes) {
                    { smoking_room: true }
                    }
                
                    it "updates the requested cabin" do
                    cabin = Cabin.create! valid_attributes
                    put :update, params: {id: cabin.id, cabin: new_attributes}
                    cabin.reload
                    expect(cabin.smoking_room).to eq(new_attributes[:smoking_room])
                    end
                end
            
            
                context "with invalid params" do
                    it 'does not update the cabin' do
                    expect {
                    post :create, params: {cabin: invalid_attributes}
                    }.to change(Cabin, :count).by(0)
                    end
                end
            end
            describe "DELETE #destroy" do
                it "destroys the requested cabin" do
                    cabin = Cabin.create! valid_attributes
                    expect {
                        delete :destroy, params: {id: cabin.id}
                    }.to change(Cabin, :count).by(-1)
                end
            end

        private

            def set_cabin
                @cabin = Cabin.find(params[:id])
            end

            def cabin_params
                params.require(:cabin).permit(:name)
            end
end       
