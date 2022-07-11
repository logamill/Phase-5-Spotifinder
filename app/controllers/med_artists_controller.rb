class MedArtistsController < ApplicationController
    def index 
        artists = @current_user.med_artists.all
        render json: artists 
    end
end
