class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :number
      t.string :class
      t.integer :price

      t.timestamps
    end
  end
end
