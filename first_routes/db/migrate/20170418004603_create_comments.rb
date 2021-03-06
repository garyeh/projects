class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :artwork_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :comments, :user_id, unique: true
    add_index :comments, :artwork_id, unique: true
  end
end
