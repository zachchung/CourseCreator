class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :courses, foreign_key: "teacher_id", dependent: :destroy
  has_many :enrollments, foreign_key: "student_id"
  after_create :create_default_course
  has_one_attached :photo

  validates :nickname, presence: true, uniqueness: true

  def full_name
    "#{first_name} #{last_name}".strip
  end

  def teacher?
    role == "teacher"
  end

  def student?
    role == "student"
  end

  private

  def create_default_course
    Course.default_course(self)
  end
end
