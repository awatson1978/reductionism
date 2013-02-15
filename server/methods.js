Meteor.methods({
    getEnvironment: function(){
        if(process.env.ROOT_URL == "http://localhost:3000"){
            return "development";
        }else{
            return "staging";
        }
    }
});