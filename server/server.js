
if (Meteor.is_server) {
    Meteor.startup(function () {
        // we want to be able to inspect the root_url, so we know which environment we're in
        //console.log(JSON.stringify(process.env.ROOT_URL));

        // in case we want to inspect other process environment variables
        //console.log(JSON.stringify(process.env));
    });
}
