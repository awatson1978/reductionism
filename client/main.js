// Client-side JavaScript, bundled and sent to client.


// ID of currently selected page
Session.set('current_page', '#graphsPage');

Session.set("selected_graph","indentedTree");

Session.set("anchor_image", "");

Template.app_container.loggedIn = function () {
    if(Meteor.userId()){
        log_event('Meteor.userId(): ' + Meteor.userId(), LogLevel.Info);
        return true;
    }else{
        log_event('Meteor.userId() is null.', LogLevel.Info);
        return false;
    }
};
Template.app_container.rendered = function () {
// set default page views
    hidePages();
    showCurrentSessionPage();
};
Template.app_container.anchorImage = function () {
    return Session.get("anchor_image");
};



Meteor.startup(function () {
    Backbone.history.start({pushState: true});

    $(window).resize(function(evt) {
        Session.set("resize", new Date());
    });

    parseIcd10File();
    // set default page views
    hidePages();
    showHomePage();
});




function parseIcd10File() {
    $('#xmlData').html('');
    $.ajax({
        type:"get",
        url:'/datafile/ICD10_Disease_Sample.xml',
        dataType:"xml",
        complete:function (data) {

            //$('#xmlData').append("<b>icd10 codes</b><br>");
            function findTerm(arg) {
                $(this).children('term').each(function () {
                    var title = $(this).find('title').first().text();
                    var code = $(this).find('code').first().text();
                    $('#xmlData').append(arg + " " + title + " " + code + "<br>");
                    findTerm.call(this, arg + "-");
                });
            }
            $(data.responseXML).find('mainTerm').each(function () {
                var title = $(this).find('title').first().text();
                var code = $(this).find('code').first().text();
                var seeAlso = $(this).find('seeAlso').first().text();
                $('#xmlData').append("<b>" + title + "</b> " + code + "<br>");
                findTerm.call(this, "-");
            });
        }
    });
    if (Icd10.find().count() === 0) {
        $.ajax({
            type:"get",
            url:'/datafile/ICD10_Disease_Sample.xml',
            dataType:"xml",
            complete:function (data) {
                function updateTerm(level, path, objectId, termCode) {
                    var updatePath = path;
                    if (termCode) {
                        updatePath = updatePath + "." + termCode;
                    }
                    var id = Icd10.update(objectId, {$set:{ updatePath:{
                        level:level,
                        title:$(this).find('title').first().text(),
                        code:$(this).find('code').first().text()
                    }}});
                    $(this).children('term').each(function () {
                        var code = $(this).find('code').first().text();
                        updateTerm.call(this, level + 1, path + '.children', id, code);
                    });
                }
                $(data.responseXML).find('mainTerm').each(function () {
                    var id = Icd10.insert({
                        title:$(this).find('title').first().text(),
                        code:$(this).find('code').first().text(),
                        seeAlso:$(this).find('seeAlso').first().text()
                    });
                    $(this).children('term').each(function () {
                        //var code =  $(this).find('code').first().text();
                        updateTerm.call(this, 1, 'term', id, '');
                    });
                });
            }
        });
    }
}


