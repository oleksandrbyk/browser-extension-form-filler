// add listner
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    if (request.method === SUBMIT) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: ROCKETLOANSURL }, (tab) => {
          var counter = setInterval(() => {
            chrome.tabs.get(tab.id, (tab) => {
              if(tab.status === 'complete') {
                clearInterval(counter);
                sendTabMessage(tab.id, { method: PREFILL, data: request.data }, (response) => {
                  sendResponse({ result: 200 })
                })
              }
            })
          }, 500);
        });
      });
    }
  }
  catch (err) {
    // error catch
    console.error(err);
  }
  return true;
});