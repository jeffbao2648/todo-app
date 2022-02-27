function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
    console.log('hello world');
    let itemInput = document.getElementById("text_input");
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);

}
