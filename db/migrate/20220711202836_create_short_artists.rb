class CreateShortArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :short_artists do |t|
      t.string :name
      t.text :genre, array: true, default: []
      t.string :image
      t.integer :user_id
      t.timestamps
    end
  end
end
