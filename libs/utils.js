/*
 Parsing full address
 i.e. 1600 Amphitheatre Pkwy, Mountain View, CA 94043
 streetAddress: 1600 Amphitheatre Pkwy,
 city: Mountain View,
 state: CA,
 Zipcode: 94043
*/
const parseFullAddress = (str) => {
  str = str || ""
  const fullAddress = str.split(/, /);
  const streetAddress = fullAddress[0] || "";
  const city = fullAddress[1] || "";
  const state = (fullAddress[2] || "").split(/ /)[0] || "";
  const zipcode = (fullAddress[2] || "").split(/ /)[1] || "";
  return [streetAddress, city, state, zipcode]
}

// mm/dd/yyyy
const toMMDDYYYY = (mm, dd, yyyy) => {
  return `${('0' + mm).slice(-2) + '/' + ('0' + dd).slice(-2) + '/' + yyyy}`;
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

