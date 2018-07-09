class Api::TempUsersController < ApplicationController

def index
  tempUser = tempUser.all
  render json: tempUser 
end

def show
  render json: @tempUser
end

def create
  tempUser = TempUser.new(tempUser_params)
  if tempUser.save
      render json: tempUser
  else
      render json: {errors: tempUser.errors.full_messages}, status: 422
  end
end

  private

  def tempUser_params
    params.require(:tempUser).permit(:name, :email)
  end
  
end
