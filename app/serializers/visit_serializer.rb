class VisitSerializer < ActiveModel::Serializer
  attributes :id, :check_in, :check_out, :guest, :room
  belongs_to :guest
  belongs_to :room
end
