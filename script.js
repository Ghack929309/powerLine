// variables
const url = `http://109.236.74.74:9900/getdata`;
const nameData = document.getElementById("nameData");
const ownerData = document.getElementById("ownerData");
const emailData = document.getElementById("emailData");
const edit = document.getElementById("edit");
const formData = document.getElementById("formData");
const submit = document.getElementById("form");
// fetching data from the api endpoint
const getData = async () => {
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	emailData.textContent = data.Garage.Email;
	nameData.textContent = data.Garage.Name;
	ownerData.textContent = data.Garage.Owner;
};
getData();
// removing the event Listener
edit.addEventListener("click", () => {
	formData.classList.remove("hidden");
});
// updating the data entered
submit.addEventListener("submit", function (e) {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const owner = document.getElementById("owner").value;
	// display Data
	emailData.textContent = email;
	nameData.textContent = name;
	ownerData.textContent = owner;
});
