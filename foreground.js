// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

var img = document.createElement("IMG");
img.src = chrome.runtime.getURL("twitter.png");
img.setAttribute("width", "45px");
img.setAttribute("height", "45px");

var oldImg = document.getElementsByTagName('svg');

if (oldImg && oldImg.length > 0){
    var parent = oldImg[0].parentElement;
    if (parent) {
        let text = parent.getAttribute("dir");
        if (text && text == 'ltr') {
            parent.replaceChild(img, oldImg[0]);
        }
    }
}
