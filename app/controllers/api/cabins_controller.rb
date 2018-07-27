class Api::CabinsController < ApplicationController
    before_action :set_cabin, only: [:show, :update, :destroy]
    before_action :set_page, only: [:index]

    def index
        cabins = Cabin.page(@page)
        total_pages = cabins.total_pages
        render json: { cabins: cabins, total_pages: total_pages }
    end

    def show
        render json: @cabin
    end

    def create
        cabin = Cabin.new(cabin_params)
        if cabin.save
            render json: cabin
        else
            render json: {errors: cabin.errors.full_messages}, status: 422
        end
    end

    def update
        if @cabin.update(cabin_params)
            render json: @cabin
        else
            render json: {errors: @cabin.errors.full_messages}, status: 422
        end
    end

    def destroy
        @cabin.destroy 
    end

    private

    def set_cabin
        @cabin = Cabin.find(params[:id])
    end

    def cabin_params
        params.require(:cabin).permit(:size, :building, :status, :smoking_room, :ada_accessible, :base_price)
    end

    def set_page
      @page = params[:page]
    end
end






















