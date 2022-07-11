class User < ApplicationRecord
    has_secure_password
    has_many :tracks, dependent: :destroy 
    has_many :med_tracks, dependent: :destroy
    has_many :short_tracks, dependent: :destroy

    has_many :artists, dependent: :destroy 
    has_many :med_artists, dependent: :destroy 
    has_many :short_artists, dependent: :destroy 
    

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


    def valence_med
        valence = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                valence << t.valence
            end
            return valence.sum / valence.length
        end
        return 0
    end


    def valence_short
        valence = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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


    def danceability_med
        danceability = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                danceability << t.danceability
            end
            return danceability.sum / danceability.length
        end 
        return 0 
    end


    def danceability_short
        danceability = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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


    def energy_med 
        energy = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                energy << t.energy
            end
            return energy.sum / energy.length
        end
        return 0
    end


    def energy_short
        energy = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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


    def liveness_med
        liveness = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                liveness << t.liveness
            end
            return liveness.sum / liveness.length
        end
        return 0
    end


    def liveness_short
        liveness = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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

    def popularity_med 
        popularity = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                popularity << t.popularity
            end
            return popularity.sum / popularity.length
        end
        return 0
    end


    def popularity_short
        popularity = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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


    def instrumentalness_med
        instrumentalness = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                instrumentalness << t.instrumentalness
            end
            return instrumentalness.sum / instrumentalness.length
        end
        return 0 
    end


    def instrumentalness_short
        instrumentalness = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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

    def acousticness_med
        acousticness = []
        if self.med_tracks.exists?
            self.med_tracks.map do |t| 
                acousticness << t.acousticness
            end
            return acousticness.sum / acousticness.length
        end
        return 0
    end

    def acousticness_short
        acousticness = []
        if self.short_tracks.exists?
            self.short_tracks.map do |t| 
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
