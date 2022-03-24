class Visit < ApplicationRecord
  belongs_to :guest
  belongs_to :room
end
