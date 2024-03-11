const form = document.getElementById('form');
const totalName = [];
const totalPhone = [];
let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addNewLine();
    updateTotal(); 

});

function addNewLine() {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const ddd = document.querySelector('select');

    if (totalName.includes(name.value)) {
        alert(`Nome ${name.value} já adicionado.`);
    } else if (totalPhone.includes(ddd.value + phone.value)) {
        alert(`Número ${ddd.value} ${phone.value} já adicionado.`);
    } else {
        totalName.push(name.value);
        totalPhone.push(ddd.value + phone.value);

        let line = '<tr>';
        line += `<td>${name.value}</td>`;
        line += `<td>${ddd.value} ${phone.value}</td>`;
        line += '</tr>';

        lines += line;

        const addContact = document.querySelector('tbody');
        addContact.innerHTML = lines;

        name.value = '';
        phone.value = '';
    }
}

function updateTotal() {
    const totalContacts = document.getElementById('totalContacts');
    totalContacts.innerHTML = document.querySelectorAll('tbody tr').length;
}


