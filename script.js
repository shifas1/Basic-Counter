const countValue = document.querySelector('#counter');

const Increment = () => {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;

};

const Decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;

};
