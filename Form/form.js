// EVENTS

// Exercise 1
// const onSubmit = () => alert('Thank you!');
let myBtn = document.querySelector('button');
// myBtn.addEventListener('click', onSubmit);
// Exercise 2
const onMouseOver = () => {
    // myBtn.setAttribute('class', 'hover');
    // myBtn.className = 'hover';
    myBtn.classList.add('hover');
}
const onMouseOut = () => {
    // myBtn.removeAttribute('class');
    // myBtn.className = '';
    myBtn.classList.remove('hover');
}
myBtn.addEventListener('mouseover', onMouseOver);
myBtn.addEventListener('mouseout', onMouseOut);
// Exercise 3
let name,
    aboutMe,
    inputElement = document.querySelector('input'),
    textareaElement = document.querySelector('textarea');
const onNameChange = () => {
    name = inputElement.value;
    // console.log(name);
}
const onAboutChange = () => {
    aboutMe = textareaElement.value;
    // console.log(aboutMe);
}
inputElement.addEventListener('keyup', onNameChange);
textareaElement.addEventListener('keyup', onAboutChange);
// exercise 4
const onSubmit = () => {
    if (name) {
        localStorage.setItem('name', name);
        inputElement.value = '';
    }
    if (aboutMe) {
        localStorage.setItem('about-me', aboutMe);
        textareaElement.value = '';
    }
};
myBtn.addEventListener('click', onSubmit);
const onLoad = () => {
    let localName = localStorage.getItem('name'),
        localAbout = localStorage.getItem('about-me');
    if (localName) {
        // console.log(localName);
        inputElement.value = localName;
    }
    if (localAbout) {
        // console.log(localAbout);
        textareaElement.value = localAbout;
    }
}
window.addEventListener('load', onLoad);

// exercise 5
const onUnload = (event) => {
    event.returnValue = 'Are you sure you want to leave?';
    return true;
}
window.addEventListener('beforeunload', onUnload);

// exercise 6 mi dava greska!!!

let profession,
    selectElement = document.querySelector('select');

const onProfessionChange = () => {
    profession = selectElement.value;
    console.log(profession);
}

selectElement.addEventListener('change', onProfessionChange);

// exercise 7

const onFocus = (e) => {
    // inputElement.style.backgroundColor = 'lightgrey';
    // exercise 8
    e.target.style.backgroundColor = 'lightgrey';
    
}

const onBluer = (e) => {
    // inputElement.style.backgroundColor = 'white';
    // if(inputElement.value === ''){
    //     inputElement.style.borderColor = 'red';
    // }else{
    //     inputElement.style.borderColor = 'green';
    // }
    // exercise 8
    e.target.style.backgroundColor = 'white';
    if(e.target.value === ''){
        e.target.style.borderColor = 'red';
    }else{
        e.target.style.borderColor = 'green';
    }
}

inputElement.addEventListener('focus',onFocus);
inputElement.addEventListener('blur',onBluer);

// exercise 8

textareaElement.addEventListener('focus', onFocus);
textareaElement.addEventListener('blur',onBluer);