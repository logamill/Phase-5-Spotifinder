# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_11_202849) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.text "genre", default: [], array: true
    t.string "image"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "med_artists", force: :cascade do |t|
    t.string "name"
    t.text "genre", default: [], array: true
    t.string "image"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "med_tracks", force: :cascade do |t|
    t.string "name"
    t.string "spotify_id"
    t.string "artist"
    t.string "album"
    t.string "release_date"
    t.string "image"
    t.integer "popularity"
    t.float "acousticness"
    t.float "danceability"
    t.float "energy"
    t.float "instrumentalness"
    t.float "liveness"
    t.float "loudness"
    t.float "speechiness"
    t.float "tempo"
    t.float "valence"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "short_artists", force: :cascade do |t|
    t.string "name"
    t.text "genre", default: [], array: true
    t.string "image"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "short_tracks", force: :cascade do |t|
    t.string "name"
    t.string "spotify_id"
    t.string "artist"
    t.string "album"
    t.string "release_date"
    t.string "image"
    t.integer "popularity"
    t.float "acousticness"
    t.float "danceability"
    t.float "energy"
    t.float "instrumentalness"
    t.float "liveness"
    t.float "loudness"
    t.float "speechiness"
    t.float "tempo"
    t.float "valence"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.string "name"
    t.string "spotify_id"
    t.string "artist"
    t.string "album"
    t.string "release_date"
    t.string "image"
    t.integer "popularity"
    t.float "acousticness"
    t.float "danceability"
    t.float "energy"
    t.float "instrumentalness"
    t.float "liveness"
    t.float "loudness"
    t.float "speechiness"
    t.float "tempo"
    t.float "valence"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.text "credentials"
    t.string "email"
    t.string "url"
    t.string "image"
    t.string "spotify_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
