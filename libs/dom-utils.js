// Set the value of React Input
const changeInputValue = (selector, value) => {
  element = $(selector)[0]
  const event = new Event('input', { bubbles: true });
  element.value = value;
  element.dispatchEvent(event);
}
// Set the value of React Select
const selectOption = (selector, value) => {
  element = $(selector)[0]
  const event = new Event('change', { bubbles: true });
  element.value = value;
  element.dispatchEvent(event);
}
// Set as checked of React Checkbox
const setChecked = (selector, value) => {
  element = $(selector)[0]
  const event = new Event('click', { bubbles: true });
  element.checked = value;
  element.dispatchEvent(event);
}