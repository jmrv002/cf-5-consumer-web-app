class PagesController < ApplicationController
  def index
  end

  def previous_page
    redirect_to request.referer
  end

  def user
    @userName = params[:name]
  end
end
