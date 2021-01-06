document.addEventListener('DOMContentLoaded', function () {
    let btnFullmode = document.getElementById("btnFullmode");
    btnFullmode.addEventListener('click', function () {
        chrome.tabs.query({currentWindow: true, active: true},
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'changeMode');
            }
        );
    }, false);
});
   