class UserService
    def self.create_user!(**args)
      User.create!(args)
    end
  
    def initialize(user:)
      @user = user
    end
  
    def update_user!(**args)
      @user.update!(args)
    end
  
    def destroy_user!
      @user.destroy!
    end
end
  