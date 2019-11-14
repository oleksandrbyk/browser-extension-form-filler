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

// Convert the array of JSONs to JSON
const convertFormToJSON = ($form) => {
  var arr = $form.serializeArray();
  var indexedArray = {};
  $.map(arr, function(n, i){
      indexedArray[n['name']] = n['value'];
  });
  return indexedArray;
}