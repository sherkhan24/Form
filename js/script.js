let form = document.querySelector('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone number')
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');


const errorFunction = (filed,errorMsg) => {
    let pElement = filed.parentElement;
    // console.log(errorMsg);
    let small = pElement.querySelector('small');
    // console.log(small);
    pElement.className = "form_control error";
    small.innerText = errorMsg;

}

const successFunction = (filed) => {
    let pElement = filed.parentElement;
    pElement.className = "form_control success";
    // small.innerText = errorMsg;
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      })
    
}







const sherKhan = () => {

    let userValue = username.value.trim();

    let emailValue = email.value.trim();
      
    let phoneValue = phone.value.trim();

    let passwordValue = password.value.trim();

    let cpasswordValue = cpassword.value.trim();






// username

if (userValue === "") {
    errorFunction(username,"Empty");
   
}else if (userValue.length <= 2){
    errorFunction(username,'please write a valid name');
}else {
    successFunction(username)
}


    //  email

if (emailValue === "") {
    errorFunction(email,"Empty");
   
}else {
    successFunction(email)
}

//   phone

if (phoneValue === "") {
    errorFunction(phone,"Empty");
   
}else if (phoneValue.length !== 10){
    errorFunction(phone,'please write a valid name');
}else {
    successFunction(phone)
}

// password

if (passwordValue === "") {
    errorFunction(phone,"Empty");
   
}else if (passwordValue.length <= 6){
    errorFunction(password,'minimum 6 char');
}else {
    successFunction(password)
}

//    cpassword

if (cpasswordValue === "") {
    errorFunction(phone,"Empty");
   
}else if (passwordValue !== cpasswordValue){
    errorFunction(cpassword,'passwprd are not matching');
}else {
    successFunction(cpassword)
}





}

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    sherKhan();


})