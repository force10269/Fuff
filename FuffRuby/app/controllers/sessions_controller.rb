class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
  
      if user && user.authenticate(params[:password])
        render json: { user: user, token: JWT.encode({ user_id: user.id }, Rails.application.secrets.secret_key_base) }, status: :ok
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end
end
