// Publish complete set of lists to all clients.

//Meteor.publish('icd10', function () {
//    return Icd10.find();
//});

Meteor.publish('anatomy', function () {
    return Anatomy.find();
});
