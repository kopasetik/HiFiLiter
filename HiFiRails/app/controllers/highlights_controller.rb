class HighlightsController < ApplicationController
  before_action :set_highlight, only: [:show, :edit, :update, :destroy]

  # GET /highlights
  # GET /highlights.json
  def index
    @highlights = Highlight.all
  end

  # GET /highlights/1
  # GET /highlights/1.json
  def show
  end

  # GET /highlights/new
  def new
    @highlight = Highlight.new
  end

  # GET /highlights/1/edit
  def edit
  end

  # POST /highlights
  # POST /highlights.json
  def create
    @article = Article.find_or_create_by(url: params[:highlight][:url])
    @h = @article.highlights.build( text: params[:highlight][:text] )
    @h.save
    redirect_to article_path @article
  end

  # PATCH/PUT /highlights/1
  # PATCH/PUT /highlights/1.json
  def update
    # respond_to do |format|
    #   if @highlight.update(highlight_params)
    #     format.html { redirect_to @highlight, notice: 'Highlight was successfully updated.' }
    #     format.json { head :no_content }
    #   else
    #     format.html { render action: 'edit' }
    #     format.json { render json: @highlight.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /highlights/1
  # DELETE /highlights/1.json
  def destroy
    @highlight.destroy
    respond_to do |format|
      format.html { redirect_to highlights_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_highlight
      @highlight = Highlight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def highlight_params
      params.require(:highlight).permit(:text, :url, :user)
    end
end
