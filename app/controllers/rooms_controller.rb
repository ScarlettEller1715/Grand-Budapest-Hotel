class RoomsController < ApplicationController

    def show
        room = Room.find(params[:id])
        render json: room
    end
end
