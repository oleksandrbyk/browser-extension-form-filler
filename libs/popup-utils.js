// Send messages from popup to content-script
const sendMessage = (data) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data, function (response) {});
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