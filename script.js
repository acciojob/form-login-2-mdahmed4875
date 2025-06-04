let fname=document.getElementbyId(fname).value;
let lname=document.getElementbyId(lname).value;
let phone=document.getElementbyId(phone).value;
let email=document.getElementbyId(email).value;
let btn=document.getElementbyId(btn);
btn.addEventListener("submit",function (e){
	e.preventDefault();
	let mess=fname+" "+lname+" "+phone+" "+email;
	alert(mess);
});