chrome.runtime.onMessage.addListener(function (request, sender) {
   if(request != "background") { // Listenes for popup.js
      document.body.style.cursor = "url(" + chrome.extension.getURL(`images/${request}.png`) + "), auto";
      chrome.storage.local.set({ "cursor": request });
   } else { // Listenes for background.js
      chrome.storage.local.get("cursor" , function(items){
       if(items.cursor)
         document.body.style.cursor = "url(" + chrome.extension.getURL(`images/${items.cursor}.png`) + "), auto";
     });
   }
})
