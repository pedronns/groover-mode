chrome.management.getSelf((self) => {
  if (self.installType === 'development') {
    chrome.runtime.onInstalled.addListener((details) => {
      if (details.reason === 'update') {
        chrome.tabs.query({ url: '*://*.youtube.com/*' }, (tabs) => {
          for (let tab of tabs) {
            chrome.tabs.reload(tab.id);
          }
        });
      }
    });
  }
});