class Ability
  include CanCan::Ability

  def initialize(user)
    if user.present?
      can :create, Comment
      can :manage, User, id: user.id

      if user.admin?  # additional permissions for administrators
        can :manage, :all
      end
    end
  end
end
