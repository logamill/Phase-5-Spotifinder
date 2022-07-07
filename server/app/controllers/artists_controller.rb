class ArtistsController < ApplicationController

    def index 
        artists = @current_user.artists.all
        render json: artists 
    end
end
