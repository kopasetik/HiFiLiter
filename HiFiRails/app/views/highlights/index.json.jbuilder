json.array!(@highlights) do |highlight|
  json.extract! highlight, :id, :text, :article_id, :user
  json.url highlight_url(highlight, format: :json)
end
