class ChangeLoadToWeight < ActiveRecord::Migration
  def change
    rename_column :results, :load, :weight
  end
end
