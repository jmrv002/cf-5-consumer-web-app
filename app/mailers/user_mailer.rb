class UserMailer < ApplicationMailer
  default from: 'jmrv002@gmail.com'

  def contact_form(email, name, message)
    @message = message
    mail(from: email,
         to: 'jmrv002@gmail.com',
         subject: "A new contact form message from #{name}")
  end
end
