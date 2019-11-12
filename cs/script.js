// Recieve messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    switch (request.method) {
      // Set select "What is the loan for?"
      case SELECTLOAN:
        selectOption("#loanPurpose", request.data);
        break;
      // Set select "Rent or own?"
      case SELECTRENTOROWN:
        selectOption("#homeOwnership", request.data);
        break;
      // Set select "Employment Status"
      case SELECTEMPLOYMENTSTATUS:
        selectOption("#employmentStatus", request.data);
        break;
      // Set select "Personal Annual Income (before taxes)"
      case SELECTPERSONALANUALINCOME:
        changeInputValue("input[name=annualGrossIncome]", request.data);
        break;
      // Set select "Current Home Address"
      case SETCURRENTHOMEADDRESS:
        changeInputValue("#google-address-input", request.data);
        break;
      // Set select "Apt, Suite, Unit, etc."
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
      // Set select "Phone Number"
      case SETPHONENUMBER:
          selectOption("#phone", request.data);
        break;
      // Set the month of birthday
      case SETBIRTHMONTH:
        selectOption("#birthMonth", request.data);
        break;
      // Set the day of birthday
      case SETBIRTHDAY:
        selectOption("#birthDay", request.data);
        break;
      // Set the year of birthday
      case SETBIRTHYEAR:
        selectOption("#birthYear", request.data);
        break;
      // Set email address
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