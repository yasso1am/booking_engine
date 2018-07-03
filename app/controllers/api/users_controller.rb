class Api::UsersController < ApplicationController
	before_action :set_user, only: [:update, :show, :destroy]

  def index
  	render json: User.all
  end

  def update
  	if @user.update(user_params)
  		render json: @user
  	else
  		render json: {errors: @user.errors.full_messages}, status: 422
  	end
  end

  def show
  	render json: @user
  end

  def destroy
  	@user.destroy
  end

  private
  def user_params
  	params.require(:user).permit(:name, :nickname, :image, :email, :role)
  end

  def set_user
  	@user = User.find(params[:id])
  end
end