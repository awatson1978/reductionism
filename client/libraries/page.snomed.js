Template.snomedPageTemplate.rendered = function (){
    setSidebarPanelHeight();
    $(window).resize(function(){
        setSidebarPanelHeight();
    });
};
function setSidebarPanelHeight() {
    $('#anatomySearchPanel').css('height', window.innerHeight - 120);
    $('#anatomyAdminPanel').css('height', window.innerHeight - 120);
};

Template.snomedPageTemplate.snomed_collection = function () {
    log_event('Template.snomedPageTemplate.snomed_reference', LogLevel.Trace);
    //return Anatomy.find();
    return Anatomy.find({'image': { $regex: Session.get('image_name_filter'), $options: 'i' } });
};
Template.snomedPageTemplate.snomed_count = function () {
    log_event('Template.snomedPageTemplate.snomed_count: ' + Anatomy.find().count(), LogLevel.Trace);
    return Anatomy.find().count();
};
Template.snomedPageTemplate.selected_image = function(){
    if(Session.get("selecting_anatomy")){
        return Session.get("selecting_anatomy");
    }else{
        return "/images/placeholder-240x240.gif";
    }
};

Template.snomedPageTemplate.events({
    'keypress input': function (evt, tmpl) {
        Session.set('image_name_filter', $('#filterInput').val());
        Meteor.flush();
    },
    'click .anatomy-item': function (evt, tmpl) {
        Session.set("anchor_image", this.image);

        //alert(JSON.stringify(this));
        //Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    }
});

Template.anatomyItemTemplate.anatomy_image = function () {
    //log_event('Template.anatomyItemTemplate.anatomy_image', LogLevel.Trace);
    return this.image;
    //return 'bar';
};
Template.anatomySideBarTemplate.selected_image = function () {
    //log_event('Template.anatomyItemTemplate.anatomy_image', LogLevel.Trace);
    if(Session.get("anchor_image")){
        return Session.get("anchor_image");
    }else{
        return "/images/placeholder-240x240.gif";
    }
};