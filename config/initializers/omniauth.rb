require 'rspotify/oauth'


Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV["CLIENT_ID"], ENV["CLIENT_SECRET"], scope: '
    user-read-email 
    user-library-read 
    user-top-read',
    provider_ignores_state: true
end

OmniAuth.config.allowed_request_methods = [:post, :get]
