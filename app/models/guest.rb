class Guest < ApplicationRecord
    has_many :visits
    has_many :rooms, through: :visits
    has_secure_password
end
