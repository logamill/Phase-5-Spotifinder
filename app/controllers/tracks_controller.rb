class TracksController < ApplicationController

    def index 
        tracks = @current_user.tracks.all
        render json: tracks 
    end

    def list
        user = User.find(params[:id])
        tracks = user.tracks.all
        render json: tracks 
    end 
    
end
