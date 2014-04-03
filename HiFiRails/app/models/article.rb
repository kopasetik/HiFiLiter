class Article < ActiveRecord::Base
    validates :url, uniqueness: true
    has_many :highlights
end
