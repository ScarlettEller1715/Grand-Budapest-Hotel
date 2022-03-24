class GuestSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :profession, :username, :password_digest
end
