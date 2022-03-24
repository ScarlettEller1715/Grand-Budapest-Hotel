class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :gender
      t.string :profession
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
