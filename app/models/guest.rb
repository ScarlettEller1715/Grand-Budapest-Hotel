class Guest < ApplicationRecord
    has_many :visits
    has_many :rooms, through: :visits
end
