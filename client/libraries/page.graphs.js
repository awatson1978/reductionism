Template.graphsPageTemplate.destroyed = function () {
    this.handle && this.handle.stop();
};
Template.graphsPageTemplate.rendered = function () {

    $('.sidebar').css('height', window.innerHeight - 80);
    $('.browser').css('height', window.innerHeight - 80);

    $(window).resize(function(){
        $('.sidebar').css('height', window.innerHeight - 80);
        $('.browser').css('height', window.innerHeight - 80);
    });

    var resize = Session.get("resize");
    self.node = self.find("svg");

    if (! self.handle) {
        self.handle = Meteor.autorun(function(){
            switch(Session.get("selected_graph")){

                case 'powersOfTenChart':
                    $('#breadCrumbLink').html('Powers of Ten');
                    clearGraphs();
                    renderPowersOfTenChart();
                    break;
                default:
                    $('#breadCrumbLink').html('Powers of Ten');
                    clearGraphs();
                    renderPowersOfTenChart();
                    break;
            }
        });
    };
};
Template.browserWindowTemplate.show_browser = function(){
    return Session.get('show_browser_window');
};
Template.browserWindowTemplate.browser_window_location = function(){
    return Session.get('browser_window_location');
};




// -------------------------------------------------------------------


function clearGraphs(){
    $('#powersOfTenChart').html('');
};



// -------------------------------------------------------------------

//Template.inspectionSidebarTemplate.data_title = function(){
//    if(Session.get('data_inspection_title')){
//        return Session.get('data_inspection_title');
//    }else{
//        return "Title not available.";
//    }
//};
//Template.inspectionSidebarTemplate.data_size = function(){
//    if(Session.get('data_inspection_size')){
//        return Session.get('data_inspection_size');
//    }else{
//        return "this is a size: 1000";
//    }
//};
//Template.inspectionSidebarTemplate.data_color = function(){
//    if(Session.get('data_inspection_color')){
//        return Session.get('data_inspection_color');
//    }else{
//        return "#4488aa";
//    }
//};