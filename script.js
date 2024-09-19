// JS Code


// Our variables
const myBtn = document.querySelector('#myBtn');
const myTag = document.querySelector('#helloWorld');

// Our Listeners
myBtn.addEventListener('click', 
    function() 
    {
        myTag.innerHTML = "Goodbye world...";
        myBtn.innerHTML = "Button clicked!"
    }, 
    false)