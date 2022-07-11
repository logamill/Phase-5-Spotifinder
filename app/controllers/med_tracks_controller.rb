class MedTracksController < ApplicationController

    def index 
        tracks = @current_user.med_tracks.all
        render json: tracks 
    end

    def list
        user = User.find(params[:id])
        tracks = user.med_tracks.all
        render json: tracks 
    end 
    
end
