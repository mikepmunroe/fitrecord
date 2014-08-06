class LiftSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :results
  embed :ids, include: true
end
