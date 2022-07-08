class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :image, 
  :spotify_id, :credentials, :valence, :instrumentalness, 
  :danceability, :acousticness, :liveness, :popularity, 
  :energy, :speechiness, :tracks, :artists, :taste, :url
end
 