class Visit < ApplicationRecord
  belongs_to :guest
  belongs_to :room
  validates :check_in, presence: true
  validates :check_out, presence: true
  validates :room_type, presence: true
end
