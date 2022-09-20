module ApplicationCable
  class Channel < ActionCable::Channel::Base

    def subscribed
      stream_from "room_#{current_user.id}"
   end
   def unsubscribed
      stop_all_streams
   end
  end
end
