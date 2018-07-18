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

  def employees
    employees = User.employees.page(@page)
    total_pages = employees.total_pages
    render json: { employees: employees, total_pages: total_pages }
  end

  private

  def user_params
  	params.require(:user).permit(:name, :nickname, :image, :email, :role)
  end

  def set_user
  	@user = User.find(params[:id])
  end

  def set_page
    @page = params[:page] || 1
  end
end