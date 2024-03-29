class Sponsor < ApplicationRecord
    validates :sponsor_name, presence: true, uniqueness: true
    has_many :event_sponsors
    has_many :events, through: :event_sponsors
end
