class CreateLandmarks < ActiveRecord::Migration
  def change
    create_table :landmarks do |t|
      t.float :lat
      t.float :long
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
