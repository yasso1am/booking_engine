class TempUser < ApplicationRecord

  validates :email, :name, presence: true 
  validates :email, uniqueness: { case_sensitive: true }
end
