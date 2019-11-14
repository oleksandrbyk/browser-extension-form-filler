// add listner for prefill
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    switch (request.method) {
      case PREFILLROCKETLOAN:
        prefillRocketLoan(request.data);
        sendRuntimeMessage({ method: OPENMARCUS, data: request.data }, (response) => {})
        break;
      case PREFILLMARCUS:
        prefillMarcus(request.data);
        sendRuntimeMessage({ method: OPENLENDINGUSA, data: request.data }, (response) => {})
        break;
      case PREFILLLENDINGUSA:
        prefillLendingUSA(request.data);
        break;
    }
    sendResponse({ result: 200 });
    return true;
  }
  catch (err) {
    // error catch
    console.error(err);
  }
  return true;
});