/**
 * User: ngjaying
 * Date: 13-5-12
 * Time: 下午6:43
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        'width': screen.width,
        'height': screen.height
    });
});



