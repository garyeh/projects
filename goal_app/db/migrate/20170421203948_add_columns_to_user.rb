class AddColumnsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string, null: false, default: 'user'
    add_column :users, :password_digest, :string, null: false, default: 'user'
    add_column :users, :session_token, :string, null: false, default: 'user'
  end
end
