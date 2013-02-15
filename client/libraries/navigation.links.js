function hidePages(){
    $('.page').addClass('hidden');
}

function showPage(page){
    hidePages();
    $(page).removeClass('hidden');
    Session.set('current_page', page);
    parseBreadCrumbs(page);
}
function showHomePage(){
    showPage("#graphsPage");
}
function showCurrentSessionPage(){
    showPage(Session.get('current_page'));
}
function parseBreadCrumbs(page){
    switch(page){
    default:
        $('#breadCrumbLink').html('');
        //alert(page);
    }
}

