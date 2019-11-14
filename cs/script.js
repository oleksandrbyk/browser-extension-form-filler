/*
  in case of:
    0: Create "input" event to React rendered input.
    1: Create "change" event to React rendered Select or input.
    2: Create "click" event to React rendered checkbox.
*/
const fieldsList = {
  "#loanPurpose": 1,
  "#homeOwnership": 1,
  "#employmentStatus": 1,
  "input[name=annualGrossIncome]": 0,
  "#google-address-input": 0,
  "#aptNumber": 0,
  "#firstName": 0,
  "#lastName": 0,
  "#phone": 1,
  "#birthMonth": 1,
  "#birthDay": 1,
  "#birthYear": 1,
  "#email": 0,
  "#socialSecurity": 0,
  "#disclosures": 2,
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    if (request.method === PREFILL) {
      $.each(fieldsList, (key, value) => {
        switch (value) {
          case 0:
            changeInputValue(key, request.data[key]);
            break;
          case 1:
            selectOption(key, request.data[key]);
            break;
          case 2:
            setChecked(key, request.data[key]);
            break;
        }
      });
      sendResponse({ result: 200 });
    }
  }
  catch (err) {
    // error catch
    console.error(err);
  }
  return true;
});