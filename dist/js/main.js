/* Envelope */

const envelope = document.querySelector(".envelope");
const seal = document.querySelector(".seal");
const letterInside = document.querySelector(".letter-inside");
const letterContainer = document.querySelector(".letter-container");

seal.addEventListener("click", function(){
	envelope.classList.toggle("open");
})

letterInside.addEventListener("click", function(){
	envelope.classList.add("hidden");
	letterContainer.classList.remove("hidden");
	
})





/* Map */

const mapButton = document.getElementById("map-button");
const map = document.getElementById("map");

mapButton.addEventListener("click", function(){
	
	// To change inner text	
		if (this.innerText != "Ver mapa") {
			this.innerText = "Ver mapa";
		} else {
			this.innerText = "Ocultar mapa";
		};
		
	// To show or hide map
		map.classList.toggle("hidden");
	
})

/* Form submit */

const form = document.querySelector("form");
const submitMsg = document.getElementById("submit-msg");



if (localStorage.getItem("submitted") == "true") {
	form.style.display = "none";
	submitMsg.open = "open";
}

form.addEventListener("submit", function(event){
	localStorage.setItem("submitted", true);
})


/* Submit message */

const submitMsgCloseButton = document.querySelector("#submit-msg .close");

submitMsgCloseButton.addEventListener("click", function(){
	submitMsg.removeAttribute("open");
})