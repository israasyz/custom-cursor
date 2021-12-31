document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#cs50-custom-cursor tbody tr').forEach(element => {
        element.addEventListener('click', function(e){
            onclick(e.currentTarget.dataset.item);
        }, false)
    })

    function onclick (value) {
        chrome.tabs.query({currentWindow: true, active: true}, 
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, value)
        })
    }
}, false)