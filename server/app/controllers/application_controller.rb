class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response 

    include ActionController::Cookies 

    before_action :authorize 

    private 

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user 
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end

    def render_record_not_found_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :not_found 
    end

end