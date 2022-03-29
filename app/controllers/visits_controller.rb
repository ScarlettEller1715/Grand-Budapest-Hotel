class VisitsController < ApplicationController

    def show
        visit = Visit.find(params[:id])
        render json: visit
    end

    def guest_visits
        guest = Guest.find(session[:guest_id])
        render json: guest.visits
    end

    def update
        visit = Visit.find(params[:id])
        visit.update(visit_params)
        render json: visit
    end

    def destroy
        visit = Visit.find(params[:id])
        visit.destroy
        head :no_content
    end

    def create 
        room = Room.find_by(room_type: params[:room_type])
        visit = Visit.create!(guest_id: session[:guest_id], room_id: room.id, check_in: params[:check_in], check_out: params[:check_out])
        render json: visit
    end

    private
    def visit_params
        params.permit(:check_in, :check_out, :room_type)
    end
end
