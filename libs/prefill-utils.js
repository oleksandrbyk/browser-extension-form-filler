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

const prefillRocketLoan = (data) => {
  $.each(fieldsList, (key, value) => {
    switch (value) {
      case 0:
        changeInputValue(key, data[key]);
        break;
      case 1:
        selectOption(key, data[key]);
        break;
      case 2:
        setChecked(key, data[key]);
        break;
    }
  });
}

const MarcusIndexed = {
  "#applicantFirstName": "#firstName",
  "#applicantLastName": "#lastName",
  "#email": "#email",
  "#annualIncome": "input[name=annualGrossIncome]",
  "#streetAddress2": "#aptNumber"
}

const prefillMarcus = (data) => {
  const birthDay = toMMDDYYYY(data["#birthMonth"], data["#birthDay"], data["#birthYear"]);
  const address = parseFullAddress(data["#google-address-input"])

  changeInputValue("#loanPurpose", 'Debt Consolidation');
  $.each(MarcusIndexed, (key, value) => changeInputValue(key, data[value]));
  changeInputValue("#applicantDateOfBirth", birthDay);
  changeInputValue("#streetAddress", address[0]);
  changeInputValue("#city", address[1]);
  changeInputValue("#state", "Armed Forces Europe"); //address[2]
  changeInputValue("#zipcode", address[3] );
  setChecked("#consentAgreement", data["#disclosures"]);
}

const LendingUSAIndexed = {
  'input[name="applicant.firstName"]': "#firstName",
  'input[name="applicant.lastName"]': "#lastName",
  'input[name="applicant.ssn"]': "#socialSecurity",
  'input[name="applicant.email"]': "#email",
  'input[name="applicant.phoneNumber.number"]': "#phone"
}
const prefillLendingUSA = (data) => {
  const address = parseFullAddress(data["#google-address-input"])
  const birthday = toMMDDYYYY(data["#birthMonth"], data["#birthDay"], data["#birthYear"]);
  $.each(LendingUSAIndexed, (key, value) => changeInputValue(key, data[value]));
  changeInputValue(`input[name="applicant.address.address"]`, address[0]);
  changeInputValue(`input[name="applicant.address.city"]`, address[1]);
  selectOption(`select[name="applicant.address.state"]`, address[2]);
  changeInputValue(`input[name="applicant.address.zipcode"]`, address[3]);
  changeInputValue(`input[name="applicant.dateOfBirth"]`, birthday);
}