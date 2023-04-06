chrome.tabs.onUpdated.addListener(
   async (tabId, changeInfo, tab) => {
      if (tab && tab.url) {
         if (tab.url.includes('twitter.com')) {
            chrome.scripting.executeScript({
               target: {tabId: tabId, allFrames: true},
               files: ['foreground.js'],
           });
         }
      }
   }
 )