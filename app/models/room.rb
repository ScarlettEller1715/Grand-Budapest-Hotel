class Room < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :guests, through: :visits
    validates :room_type, presence: true
end
