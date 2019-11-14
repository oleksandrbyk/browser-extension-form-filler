// add listner
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    switch (request.method) {
      case SUBMIT:
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.update(tabs[0].id, { url: ROCKETLOANSURL }, (tab) => {
            var counter = setInterval(() => {
              chrome.tabs.get(tab.id, (tab) => {
                if(tab.status === 'complete') {
                  clearInterval(counter);
                  setTimeout(() => {
                    sendTabMessage(tab.id, { method: PREFILLROCKETLOAN, data: request.data }, (response) => {
                      sendResponse({ result: 200 })
                    })
                  }, 3000)
                }
              })
            }, 500);
          });
        });
        break;
      case OPENMARCUS:
        chrome.tabs.create({ url: MARCUSURL }, (tab) => {
          var counter = setInterval(() => {
            chrome.tabs.get(tab.id, (tab) => {
              if(tab.status === 'complete') {
                clearInterval(counter);
                setTimeout(() => {
                  sendTabMessage(tab.id, { method: PREFILLMARCUS, data: request.data }, (response) => {
                    sendResponse({ result: 200 })
                  })
                }, 3000)
              }
            })
          }, 500);
        });
        break;
      case OPENLENDINGUSA:
        chrome.tabs.create({ url: LENDINGUSAURL }, (tab) => {
          var counter = setInterval(() => {
            chrome.tabs.get(tab.id, (tab) => {
              if(tab.status === 'complete') {
                clearInterval(counter);
                setTimeout(() => {
                  sendTabMessage(tab.id, { method: PREFILLLENDINGUSA, data: request.data }, (response) => {
                    sendResponse({ result: 200 })
                  })
                }, 3000)
              }
            })
          }, 500);
        });
        break;
    }
  }
  catch (err) {
    // error catch
    console.error(err);
  }
  return true;
});