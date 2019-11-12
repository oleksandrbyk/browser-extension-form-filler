// Set the value of React Input
const changeInputValue = (id, value) => {
  element = document.getElementById(id);
  const event = new Event('input', { bubbles: true });
  element.value = value;
  element.dispatchEvent(event);
}
// Set the value of React Select
const selectOption = (id, value) => {
  element = document.getElementById(id);
  const event = new Event('change', { bubbles: true });
  element.value = value;
  element.dispatchEvent(event);
}