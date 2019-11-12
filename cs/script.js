// Recieve messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    switch (request.method) {
      // Set select "What is the loan for"
      case SELECTLOAN:
        selectOption("loanPurpose", request.data);
        break;
      // Set first name
      case SETFIRSTNAME:
        changeInputValue("firstName", request.data);
        break;
      // Set last name
      case SETLASTNAME:
        changeInputValue("lastName", request.data);
        break;
      // Click button "See My Options"
      case SUBMIT:
        $("#seeMyOptionsButton").trigger("click");
        break;
    }
    sendResponse({result: 200});
  }
  catch (err) {
    // error catch
    console.error(err);
  }
});