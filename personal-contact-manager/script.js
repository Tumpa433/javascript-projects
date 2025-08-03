let contacts = [];

document.getElementById("contact-form").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const contact = {
        name:name,
        phone:phone,
        email:email
    };

    contacts.push(contact);
    displayContacts();

    this.reset();
    
});

function displayContacts(){
    const list = document.getElementById("contact-list");

    list.innerHTML = "";

    contacts.forEach((contact) => {
        const item = document.createElement("li");
        item.innerText = `${contact.name} - ${contact.phone} - ${contact.email}`;

        list.appendChild(item);
    });
    
}