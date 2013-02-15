Todos =     new Meteor.Collection("todos");
Anatomy =   new Meteor.Collection("anatomy");
Lists =     new Meteor.Collection("lists");
usersDirectory =     new Meteor.Collection("usersDirectory");
Hipaa =     new Meteor.Collection("hipaa");
Icd10 =     new Meteor.Collection("icd10");

Anatomy.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
Hipaa.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
Icd10.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
Meteor.users.allow({
    insert: function(userId, todo){
        //return userId && todo.owner === userId;
        //return false;
        return true;
    },
    update: function (userId, todos, fields, modifier) {
        return _.all(todos, function (todo) {
            var allowed = [
                "emails",
                "profile",
                "username"
            ];
            if (_.difference(fields, allowed).length)
                return false; // tried to write to forbidden field

            return true;
        });
    },
    remove: function(userId, todos){
        return true;
    }
});


Todos.allow({
    insert: function(userId, todo){
        //return userId && todo.owner === userId;
        //return false;
        return true;
    },
    update: function (userId, todos, fields, modifier) {
        return _.all(todos, function (todo) {
            //if (userId !== todo.owner)
            //    return false; // not the owner

            var allowed = [
                "anatomy",
                "text",
                "tags",
                "timestamp",
                "public",
                "done",
                "tags"
            ];
            if (_.difference(fields, allowed).length)
                return false; // tried to write to forbidden field

            return true;
        });
    },
    remove: function(userId, todos){
        return true;
    }
});





///////////////////////////////////////////////////////////////////////////////
// Users

var displayName = function (user) {
    if (user.profile && user.profile.name)
    {
        return user.profile.name;
    }else{
        return "No Profile Name"
    }
};

var displayEmail = function (user) {
    return user.emails[0].address;
};