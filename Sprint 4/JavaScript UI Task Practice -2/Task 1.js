document.getElementById('fetchBtn').addEventListener('click', function() {
  // Get selected radio button using querySelector
  const selectedRadio = document.querySelector('input[name="color"]:checked');
  const radioValue = selectedRadio ? selectedRadio.value : 'None';

  // Get all checked checkboxes using querySelectorAll
  const checkedBoxes = document.querySelectorAll('input[name="hobby"]:checked');
  let checkboxValues = [];
  checkedBoxes.forEach(box => checkboxValues.push(box.value));
  if (checkboxValues.length === 0) {
    checkboxValues.push('None');
  }

  // Display results inside the <p> tag using innerHTML
  const displayElem = document.getElementById('selectedValues');
  displayElem.innerHTML =
    `<strong>Selected Radio:</strong> ${radioValue} <br/>
     <strong>Selected Checkboxes:</strong> ${checkboxValues.join(', ')}`;
});
