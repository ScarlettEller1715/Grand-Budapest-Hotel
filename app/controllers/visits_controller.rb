class VisitsController < ApplicationController

    def show
        visit = Visit.find(params[:id])
        render json: visit
    end

    def guest_visits
        guest = Guest.find(session[:id])
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

    private
    def visit_params
        params.permit(:check_in, :check_out)
    end
end
