class Api::ContactsController < ApplicationController

    def index
      render json: Contact.all 
    end
    
    def show
      render json: @contact
    end
    
    def create
      contact = Contact.new(contact_params)
      if contact.save
          render json: contact
      else
          render json: {errors: contact.errors.full_messages}, status: 422
      end
    end
    
      private
    
      def contact_params
        params.require(:contact).permit(:first_name, :last_name, :email)
      end
      
    end
    