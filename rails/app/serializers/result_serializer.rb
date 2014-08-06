class ResultSerializer < ActiveModel::Serializer
  attributes :id, :date, :lift_id, :rep_scheme, :weight, :notes
end
