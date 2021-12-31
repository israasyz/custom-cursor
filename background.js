browser.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "background")
    })
});
browser.tabs.onCreated.addListener(function(tab) {         
    chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "background")
    })
});
browser.tabs.onUpdated.addListener(function(tab) {         
    chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "background")
    })
});