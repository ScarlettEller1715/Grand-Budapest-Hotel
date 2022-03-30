class RoomSerializer < ActiveModel::Serializer
  attributes :id, :number, :room_type, :price
end
