// Send messages from popup to content-script
const sendTabMessage = (tabId, data, cb) => {
  chrome.tabs.sendMessage(tabId, data, function (response) {
    cb(response);
  });
}

const sendRuntimeMessage = (data, cb) => {
  chrome.runtime.sendMessage(data, function(response) {
    cb(response);
  });
}