// All options for select fields - What is the loan for, Rent or own?, Employment Status
const selectionData = {
  "#loanPurpose": {
    "debtConsolidation": "Debt Consolidation",
    "debtConsolidation_creditCard": "Pay Off Credit Cards",
    "debtConsolidation_otherLoan": "Pay Off Other Loans",
    "debtConsolidation_mortgage": "Pay Down Mortgage",
    "homeImprovement": "Home Improvement",
    "homeImprovement_repairs": "Home Repairs",
    "medicalExpenses": "Medical Expenses",
    "business": "Business",
    "auto": "Auto",
    "other": "Other"
  },
  "#homeOwnership": {
    "rent": "Rent",
    "mortgage": "Mortgage",
    "own": "Own"
  },
  "#employmentStatus": {
    "Employed": "Employed",
    "Self-Employed": "Self-Employed",
    "Retired": "Retired",
    "Other": "Other"
  }
}
// data for birthday.
const months = [ "January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December" ];

const countOfMonth = 12;
const countOfDay = 31;
const startYear = 2001;
const endYear = 1902;

// Add all options of select tag
const initDOM = () => {
  // What is the loan for, Rent or own?, Employment Status
  $.each(selectionData, (selectName, options) =>
    $.each(options, (key, value) =>
      $(`select[name="${selectName}"]`).append(new Option(value, key)))
  )
  // month of birthday
  for(let i = 1; i <= countOfMonth; i++) {
    $(`select[name="#birthMonth"]`).append(new Option(months[i - 1], i))
  }
  // day of birthday
  for(let i = 1; i <= countOfDay; i++) {
    $(`select[name="#birthDay"]`).append(new Option(i, i))
  }
  // year of birthday
  for(let i = startYear; i >= endYear; i--) {
    $(`select[name="#birthYear"]`).append(new Option(i, i))
  }
}

initDOM();

// when clicking submit button
$("#submit").on("click", () => {
  // get form data as a JSON.
  let formData = convertFormToJSON($("form"))
  formData["#disclosures"] = formData.hasOwnProperty("#disclosures")
  sendRuntimeMessage({ method: SUBMIT, data: formData }, (response) => {});
});