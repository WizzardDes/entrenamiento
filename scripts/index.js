
function Saludar(){
	var saludo="";
	var tiempo= new Date().getHours(); 

if (tiempo < 12) {
	saludo = "Buens dias";
	 } 
	 else if (tiempo < 18) {
	 	saludo = "Buenas tardes";
	 }

	 else{
	 	saludo = "Buenas noches";
	 }
	 document.getElementById("saludo").innerHTML = saludo;
}