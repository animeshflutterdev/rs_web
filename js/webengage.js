function webengageLogin(userId){
    webengage.user.login(userId);
}

function webengageLogout(){
    webengage.user.logout();
}
function webengageSetAttribute(key,value){
    webengage.user.setAttribute(key, value);
}
function webengageTrack(eventName,eventData){
    webengage.track(eventName, eventData);
}



