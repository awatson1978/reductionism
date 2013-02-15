Template.snomedListSidebarTemplate.events({
    'keypress input': function (evt, tmpl) {
        Session.set('sidebar_filter', $('#sidebarSearchInput').val());
        Meteor.flush();
    },
    'click .snomedSidebarListItem': function (evt, tmpl) {
        alert('This doesnt do anything right now.  In the future, there will be drag-and-drop functionality, so you can add items to the reductionism chart.');
        //alert(JSON.stringify(this));
        //Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    }
});Template.snomedListSidebarTemplate.snomed_collection = function(){
    return Anatomy.find({'image': { $regex: Session.get('sidebar_filter'), $options: 'i' } });
};
Template.snomedSidebarListItem.image = function(){
    return this.image;
};