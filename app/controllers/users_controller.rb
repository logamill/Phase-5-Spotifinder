require 'rspotify'
require 'byebug'
class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

    def index 
        render json: User.all 
    end

    def authorized 
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def show 
        user = User.find(params[:id])
        render json: user
    end     


    def spotify   
        spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
        if @current_user.spotify_id.blank?
        
            # Now you can access user's private data, create playlists and much more
            # Access private data
            # User.create!(name: spotify_user)

            # Create playlist in user's Spotify account
            # playlist = spotify_user.create_playlist!('my-awesome-playlist')

            # Add tracks to a playlist in user's Spotify account
            # tracks = RSpotify::Track.search('Know')
            # playlist.add_tracks!(tracks)
            # playlist.tracks.first.name #=> "Somebody That I Used To Know"
    
            # Get user's top played artists and tracks
            top_artists = spotify_user.top_artists(time_range: 'long_term') #=> (Artist array)
            top_tracks = spotify_user.top_tracks(time_range: 'long_term') #=> (Track array)
            
            top_tracks.each do |t|
                j = t.audio_features
                Track.create!(
                    name: t.name,
                    spotify_id: t.id,
                    artist: t.artists.first.name,
                    album: t.album.name,
                    image: t.album.images[0]['url'],
                    popularity: t.popularity,
                    acousticness: j.acousticness,
                    danceability: j.danceability,
                    energy: j.energy,
                    instrumentalness: j.instrumentalness,
                    liveness: j.liveness,
                    loudness: j.loudness,
                    speechiness: j.speechiness,
                    tempo: j.tempo,
                    valence: j.valence,
                    user_id: @current_user.id
                )
            end
        end
        top_artists.each do |t|
            Artist.create!(
                name: t.name,
                genre: t.genres,
                image: t.images[0]['url'],
                user_id: @current_user.id
            )
        end

        ## conditionally update user image with default if image is nil 
        if spotify_user.images[0].nil?
            @current_user.update!(name: spotify_user.display_name, 
            email: spotify_user.email, 
            url: spotify_user.external_urls['spotify'],
            credentials: spotify_user.credentials,
            :spotify_id=>spotify_user.id, 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/White_Duck_%2835416314665%29.jpg/1122px-White_Duck_%2835416314665%29.jpg')
         else
            @current_user.update!(name: spotify_user.display_name, 
            email: spotify_user.email, 
            url: spotify_user.external_urls['spotify'],
            credentials: spotify_user.credentials,
            :spotify_id=>spotify_user.id, 
            image: spotify_user.images[0].url)
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :confirmed_password, :email, :image, :spotify_id, :url, :credentials, :valence, :danceability, :acousticness, :liveness, :energy, :popularity, :taste)
    end
end