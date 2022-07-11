class CreateShortTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :short_tracks do |t|
      t.string :name 
      t.string :spotify_id
      t.string :artist 
      t.string :album
      t.string :release_date
      t.string :image 
      t.integer :popularity
      t.float :acousticness 
      t.float :danceability
      t.float :energy 
      t.float :instrumentalness 
      t.float :liveness
      t.float :loudness 
      t.float :speechiness 
      t.float :tempo
      t.float :valence
      t.integer :user_id 
      t.timestamps
    end
  end
end
