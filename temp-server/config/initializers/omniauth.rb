require 'rspotify/oauth'


# Rails.application.config.middleware.use OmniAuth::Builder do
#     provider :spotify, Rails.application.credentials.spotify(ENV["CLIENT_ID"]), Rails.application.credentials.spotify(ENV["CLIENT_SECRET"]), scope: %w(
#       playlist-read-private
#       user-read-private
#       user-read-email
#     ).join(' ')
#   end
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV["CLIENT_ID"], ENV["CLIENT_SECRET"], scope: '
    user-read-email 
    user-library-read 
    user-top-read'
end

OmniAuth.config.allowed_request_methods = [:post, :get]
