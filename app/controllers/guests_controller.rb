class GuestsController < ApplicationController
    skip_before_action :authorize, only: :create

    def show 
        guest = find_guest
        render json: guest 
    end

    def show_username 
        guest = find_guest
        render json: guest.username
    end

    def create 
        guest = Guest.create!(guest_params)
        session[:guest_id] = guest.id
        render json: guest, status: :created 
    end

    def update
        guest = find_guest
        guest.update(guest_params)
        render json: guest
    end

    private 

    def guest_params
        params.permit(:name, :gender, :profession, :username, :password, :password_confirmation)
    end

    def find_guest 
        Guest.find_by(id: session[:guest_id])
    end
end
