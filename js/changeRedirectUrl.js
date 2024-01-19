function changeUrl(path) {
    console.log(`Js InPut Path : ${path}`);
    window.history.pushState('', '', path);
}