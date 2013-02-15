
var genericUserDisplayObject = {
    userName: function() {
        return Meteor.user().profile.name;
    },
    userAvatar: function() {
        try{
            var src = "images/placeholder-240x240.gif";

            // CONFLICT?
            // this wants to be Meteor.user().profile so the default image displays if there's no profile
            // but, I think it's also causing crashes elsewhere if the Meteor.
            if(Meteor.user().profile){
                src = $.trim(Meteor.user().profile.avatar);
            }
            log_event('profile avatar src: ' + src, LogLevel.Info);
            return src;
        }
        catch(err){
            log_event(err, LogLevel.Error);
        }
    },
    isAdmin: function() {
        if(Meteor.user().profile.role == "Administrator"){
            return true;
        }else{
            return false;
        }
    }
};
