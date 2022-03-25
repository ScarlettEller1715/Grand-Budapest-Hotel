class AlterRoomKey < ActiveRecord::Migration[6.1]
  def change
    change_table :rooms do |t|
      t.rename :class, :room_type
    end
  end
end
