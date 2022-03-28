class GuestSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :profession, :username, :password_digest

  has_many :visits
end
