function getPlatform() {
    return navigator.platform;
}

function getBaseUrl() {
    return window.location.origin;
}

async function jsPromiseFunction(message) {
    let msg = message;
    let promise;
    promise = new Promise(function (resolve, reject) {
        resolve('Hello : ' + message);
    });
    let result = await promise;
    return result;
}

function submitFormFunction(url, objStr, id) {
    const obj = JSON.parse(objStr);

    var form = document.createElement('form');
    form.setAttribute('action', url);
    form.setAttribute('id', id);
    form.setAttribute('method', 'POST');
    document.body.appendChild(form);
    var frmObj = document.getElementById(id);

    Object.keys(obj).forEach(function (key) {
        var input = document.createElement("input");
        input.setAttribute('type', "hidden");
        input.setAttribute('name', key);
        input.setAttribute('value', obj[key]);

        frmObj.appendChild(input);
    });
    frmObj.submit();
}

function reDirectToUrlFunction(url) {
    console.log("redirect Url:==>> ", url);
    location.replace(url)
}

async function jsOpenTabFunction(url) {
    let promise = new Promise(function (resolve, reject) {
        var win = window.open(url, "New Popup Window", "width=800,height=800");
        console.log("window", win);

        var timer = setInterval(function () {
            if (win.closed) {
                clearInterval(timer);
                alert("'Popup Window' closed!");
                resolve('Paid');
            }
        }, 500);
        console.log("window", win);
    });
    let result = await promise;
    console.log("result", result);
    return result;
}


