class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]

  def index
    render json: current_user.reservations.order("created_at")
  end

  def show
    render json: @reservation
  end

  def all_reservations
    render json: Reservation.all
  end

  def create
    reservation = current_user.reservations.new(reservation_params)
    if reservation.save
      render json: reservation
    else
      render_error(reservation)
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

  def reservation 
    render json: Reservation.reservation 
  end

  private
    def set_reservation
      @reservation = current_user.reservations.find(params[:id])
    end

    def reservation_params
      params.require(:reservation).permit(
                              :start_date,
                              :end_date,
                              :special_requests,
                              :smoking_room,
                              :size,
                              :ada_accessible,
                              :cabin_id,
                              :user_id,
                              :first_name,
                              :last_name,
                              :email,
                              :phone_number,
                              :zip_code,
                              :country,
                              :address_line1,
                              :address_line2,
                              :city,
                              :state,
                              :pet_friendly
      )
    end


end
