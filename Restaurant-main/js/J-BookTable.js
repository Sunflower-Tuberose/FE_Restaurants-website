// JavaScript Document
const fullname=document.getElementById('fullname');
const bphone=document.getElementById('bphone');
const bemail=document.getElementById('bmail');
const selecrest=document.getElementById('bres');
const selectpz=document.getElementById('bpartysize');
const form=document.getElementById('BFbook');

form.addEventListener('submit', (event) =>{
	alert('Full name: '  + fullname.value + '\nEmail: ' + bemail.value +'\nPhone number: ' + bphone.value	+ '\nRestaurant selected: '+ selecrest.options[selecrest.selectedIndex].text + '\nParty size: ' + selectpz.options[selectpz.selectedIndex].text);
	event.preventDefault();
	return;
})

