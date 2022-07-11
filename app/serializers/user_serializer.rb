class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :image, 
  :spotify_id, :credentials,
  :speechiness, :tracks, :med_tracks, :short_tracks, :artists, 
  :short_artists, :med_artists, :taste, :url,
  :valence_short, :valence_med, :valence,
  :energy_short, :energy_med, :energy,
  :danceability_short, :danceability_med, :danceability, 
  :acousticness_short, :acousticness_med, :acousticness, 
  :liveness_short, :liveness_med, :liveness, 
  :popularity_short, :popularity_med, :popularity
end
 