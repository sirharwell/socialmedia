class CreateApps < ActiveRecord::Migration[5.1]
  def change
    create_table :apps do |t|
      t.string :name
      t.text :city
      t.text :pic
      t.float :age
      t.text :height

      t.timestamps
    end
  end
end
