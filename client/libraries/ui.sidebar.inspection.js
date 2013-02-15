Template.inspectionSidebarTemplate.image_title = function(){
    if(Session.get('data_inspection_title')){
        return Session.get('data_inspection_title');
    }else{
        return "No image title available.";
    }
};
Template.inspectionSidebarTemplate.image_src = function(){
    // give preference to an item that a user has clicked
    if(Session.get('data_inspection_image_path')){
        return Session.get('data_inspection_image_path');
    }else{
        // otherwise, default to the selected image stored in the session variables
        if(Session.get('selected_image_id')){
            return "http://library.anatomicaltravel.com/assets/" + Canvases.findOne(Session.get('selected_image_id')).assetid + "/thumb.jpg";
        }
        return "images/placeholder-240x240.gif";
    }
};
Template.inspectionSidebarTemplate.image_id = function(){
    if(Session.get('selected_image_id')){
        return Session.get('selected_image_id');
    }else{
        return "No image asset ID available.";
    }
};
Template.inspectionSidebarTemplate.sidebar_visibility = function(){
    // add some whitespace at the end, so the classes don't get mushed together into one long string
    return Session.get('sidebar_visibility') + " ";
};

function clearDataInspectionVariables(){
    Session.set('data_inspection_image_path',null);
    Session.set('data_inspection_title',null);
}