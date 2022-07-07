class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.text :credentials
      t.string :email 
      t.string :url
      t.string :image
      t.string :spotify_id, uniqueness: true 
      t.timestamps
    end
  end
end
