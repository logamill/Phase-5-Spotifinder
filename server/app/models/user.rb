class User < ApplicationRecord
    has_secure_password
    has_many :tracks, dependent: :destroy 
    has_many :artists, dependent: :destroy 

    validates :spotify_id, uniqueness: true 



    def valence 
        valence = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                valence << t.valence
            end
            return valence.sum / valence.length
        end
        return 0
    end


    def danceability 
        danceability = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                danceability << t.danceability
            end
            return danceability.sum / danceability.length
        end 
        return 0 
    end


    def energy 
        energy = []
        if self.tracks.exists?

            self.tracks.map do |t| 
                energy << t.energy
            end
            return energy.sum / energy.length
        end
        return 0
    end


    def liveness 
        liveness = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                liveness << t.liveness
            end
            return liveness.sum / liveness.length
        end
        return 0
    end


    def popularity 
        popularity = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                popularity << t.popularity
            end
            return popularity.sum / popularity.length
        end
        return 0
    end


    def instrumentalness 
        instrumentalness = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                instrumentalness << t.instrumentalness
            end
            return instrumentalness.sum / instrumentalness.length
        end
        return 0 
    end


    def acousticness 
        acousticness = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                acousticness << t.acousticness
            end
            return acousticness.sum / acousticness.length
        end
        return 0
    end

    def speechiness 
        speechiness = []
        if self.tracks.exists?
            self.tracks.map do |t| 
                speechiness << t.speechiness
            end
            return speechiness.sum / speechiness.length
        end
        return 0 
    end

    def taste
        taste = 0
        if self.tracks.exists?
            total = (((self.valence + self.acousticness + self.danceability + self.energy + self.instrumentalness) / 5) * 100)
            taste = (total + (self.popularity - 10)) / 2
            return taste 
        end
        return 0
    end

end
