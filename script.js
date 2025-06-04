let form=document.getElementById("form");
form.addEventListener("submit",function (e){
	e.preventDefault();
	let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
	let mess = `First Name: ${fname} Last Name: ${lname} Phone Number: ${phone} Email ID: ${email}`;
	alert(mess);
});