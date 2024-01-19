async function getCUrlElementByIdFun(iframe_id) {
const currentIframeHref = new URL(document.location.href);
const urlOrigin = currentIframeHref.origin;
const urlFilePath = decodeURIComponent(currentIframeHref.pathname);
console.log("iframe_id: " + iframe_id);
  console.log("C Url :==> " + document.getElementById(iframe_id).contentWindow.location);
  console.log("C Url 1 :==> " + document.getElementById(iframe_id).contentDocument.referrer);
  console.log("C Url 2 :==> " +currentIframeHref);
  console.log("C Url 2 :==> " +urlOrigin);
  console.log("C Url 2 :==> " +urlFilePath);
  let promise = new Promise(function(resolve, reject) {
    resolve(document.getElementById(iframe_id).contentWindow.location.href);
  });
  let result = await promise;
  return result;
}