class VisitSerializer < ActiveModel::Serializer
  attributes :id, :check_in, :check_out
  has_one :guest
  has_one :room
end
