let status = 'normal';
chrome.runtime.onMessage.addListener(function (request) {
    if (request != null) {
        status = status == 'normal' ? 'full' : 'normal';
        toggleMode();
    }
});

const toggleMode = function () {

    let rootPage = document.getElementById('react-root');
    let video = rootPage.getElementsByTagName('video')[0];
    let parentDiv = video.parentNode

    if (status == 'full') {
        rootPage.classList.add('fullscreen');
        parentDiv.classList.add('parentVideo');
    } else {
        rootPage.classList.remove('fullscreen');
        parentDiv.classList.remove('parentVideo');
    }
} 