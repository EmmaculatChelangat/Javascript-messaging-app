let messages = document.getElementById('messages');
let textBox = document.getElementById('textBox');
let  button = document.getElementById('button');


button.addEventListener('click',function(){
    var newMessage = document.createElement('li')
    // to read content in the textbox
    newMessage.innerHTML = textBox.value
    // adding list created into the unordered list
    messages.appendChild(newMessage)
    // messages remains on the textbox and to delete:
    textBox.value = "";
});

