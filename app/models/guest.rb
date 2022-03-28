class Guest < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :rooms, through: :visits
    has_secure_password
end
