class UserService
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
  