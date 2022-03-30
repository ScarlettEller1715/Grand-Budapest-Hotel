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
        room = Room.find_by(room_type: params[:room_type])

        visit.update!(guest_id: session[:guest_id], room_id: room.id, check_in: params[:check_in], check_out: params[:check_out])
        visit.update!(:room_id => room.id)
        render json: visit
    end

    def destroy
        visit = Visit.find(params[:id])
        visit.destroy
        head :no_content
    end

    def create 
        room = Room.find_by(room_type: params[:room_type])
        added_visit = Visit.create!(guest_id: session[:guest_id], room_id: room.id, check_in: params[:check_in], check_out: params[:check_out])
        visit = Visit.last
        render json: visit
    end

    private
    def visit_params
        params.permit(:check_in, :check_out, :id)
    end
end
