// Recieve messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    switch (request.method) {
      // Set select "What is the loan for"
      case SELECTLOAN:
        selectOption("#loanPurpose", request.data);
        break;
      // Set select "What is the loan for"
      case SELECTRENTOROWN:
        selectOption("#homeOwnership", request.data);
        break;
      // Set select "What is the loan for"
      case SELECTEMPLOYMENTSTATUS:
        selectOption("#employmentStatus", request.data);
        break;
      // Set select "What is the loan for"
      case SELECTPERSONALANUALINCOME:
        changeInputValue("input[name=annualGrossIncome]", request.data);
        break;
      // Set select "What is the loan for"
      case SETCURRENTHOMEADDRESS:
        changeInputValue("#google-address-input", request.data);
        break;
      // Set select "What is the loan for"
      case SETADDRESSDETAILED:
        changeInputValue("#aptNumber", request.data);
        break;
      // Set first name
      case SETFIRSTNAME:
        changeInputValue("#firstName", request.data);
        break;
      // Set last name
      case SETLASTNAME:
        changeInputValue("#lastName", request.data);
        break;
      // Set select "What is the loan for"
      case SETPHONENUMBER:
          selectOption("#phone", request.data);
        break;
      // Set last name
      case SETBIRTHMONTH:
        selectOption("#birthMonth", request.data);
        break;
      // Set last name
      case SETBIRTHDAY:
        selectOption("#birthDay", request.data);
        break;
      // Set last name
      case SETBIRTHYEAR:
        selectOption("#birthYear", request.data);
        break;
      // Set last name
      case SETEMAIL:
        changeInputValue("#email", request.data);
        break;
      // Set social security number
      case SETSSN:
        changeInputValue("#socialSecurity", request.data);
        break;
      case SETCHECKBOX:
        setChecked("#disclosures", request.data);
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