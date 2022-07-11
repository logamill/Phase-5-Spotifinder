class ShortTracksController < ApplicationController

    def index 
        tracks = @current_user.short_tracks.all
        render json: tracks 
    end

    def list
        user = User.find(params[:id])
        tracks = user.short_tracks.all
        render json: tracks 
    end 
    
end
