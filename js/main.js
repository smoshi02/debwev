const lenders = document.getElementById("nakautangs");
const errorMessage = document.getElementById("errorMessage");

document.getElementById('saveButton').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const debtInput = document.getElementById('debt');

    const name = nameInput.value.trim();
    const utang = debtInput.value.trim();

   
    const debtAmount = parseFloat(utang);

    errorMessage.textContent = '';

    if (isNaN(debtAmount) || debtAmount < 0) {
        errorMessage.textContent = 'Please enter a valid debt amount (cannot be less than zero).';
        return; 
    }

    const newUtang = document.createElement("li");
    newUtang.textContent = name + " - " + utang;
    lenders.appendChild(newUtang);
    nameInput.value = '';
    debtInput.value = '';
});