class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]

  def index
    render json: current_user.reservations.order("created_at")
  end

  def show
    render json: @reservation
  end

  def create
    reservation = current_user.reservations.new(reservation_params)
    if reservation.save
      render json: reservation
    else
      render json: {errors: reservation.errors.full_messages}, status: 422
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: {errors: @reservation.errors.full_messages}, status: 422
    end
  end

  def destroy
    @reservation.destroy
  end


  private
    def set_reservation
      @reservation = current_user.reservations.find(params[:id])
    end

    def reservation_params
      params.require(:reservation).permit(:special_requests, :smoking_room, :size, :ada_accessible, :cabin_id, :user_id)
    end


end
