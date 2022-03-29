class Guest < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :rooms, through: :visits
    has_secure_password
    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :profession, presence: true
    validates :password, presence: true
end
