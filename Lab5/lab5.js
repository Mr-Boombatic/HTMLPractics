const form = document.getElementById('form');
const email = document.getElementById('email');
const doc = document.getElementById('doc');
const reg1 = new RegExp('[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+');
const reg2 = new RegExp('[0-9]+');
const music = document.querySelector("input[name=music]");
const movies = document.querySelector("input[name=movies]");
const musicDiv = document.getElementById('musicDiv');
const moviesDiv = document.getElementById('moviesDiv');

const name2 = document.getElementById('resName');
const email2 = document.getElementById('resEmail');
const page2 = document.getElementById('resPage');
const date2 = document.getElementById('resDate');
const doc2 = document.getElementById('resDoc');
const inter = document.getElementById('inter');

///
const final =  document.getElementById('range');
///

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

form.addEventListener('change', function() {
	var value = document.querySelectorAll('input[type=range]')[0];
	var text = document.querySelectorAll('label[for='+value.name+']')[0];
	text.innerText = "Размер картинки: " + value.value;
});



music.addEventListener('change', function() {
	if(this.checked) {
		musicDiv.style.opacity = "1";
		Array.from(document.getElementsByClassName("muschbx")).forEach(
			function(element) {
				element.disabled = false;
			}
		);
	} else {
		musicDiv.style.opacity = "0.5";
		Array.from(document.getElementsByClassName("muschbx")).forEach(
			function(element) {
				element.disabled = true;
			}
		);
	}
});
movies.addEventListener('change', function() {
	if(this.checked) {
		moviesDiv.style.opacity = "1";
		Array.from(document.getElementsByClassName("movchbx")).forEach(
			function(element) {
				element.disabled = false;
			}
		);
	} else {
		moviesDiv.style.opacity = "0.5";
		Array.from(document.getElementsByClassName("movchbx")).forEach(
			function(element) {
				element.disabled = true;
			}
		);
	}
});

function checkInputs() {
	var OK1 = reg1.exec(email.value);
	var OK2 = reg2.exec(doc.value);
	if (!OK1)
		setErrorFor(email, 'Неверный email');
	if (!OK2)
		setErrorFor(doc, 'Неверный документ');
	if (OK1)
		setSuccessFor(email);
	if (OK2)
		setSuccessFor(doc);
	if (OK1 && OK2) {
		const resName = document.getElementById('name').value;
		const resEmail = email.value;
		const resPage = document.getElementById('page').value;
		const resDate = document.getElementById('date').value;
		const resColor = document.getElementById('color').value;
		const resRange = document.getElementById('range').value;
		const resDoc = doc.value;
		
		var resInter = [];
		var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
		for (var i = 1; i < checkboxes.length; i++) {
			//resInter.push(document.querySelectorAll('label[for='+`${checkboxes[i].name}`+']').name);
			resInter.push((document.querySelectorAll('label[for='+checkboxes[i].name+']'))[0].innerText);
		}
		
		document.getElementById('result').style.visibility = 'visible';
		document.getElementById('result').style.color = resColor;
		document.getElementById('img').width = `${resRange}px`;
		document.getElementById('img').height = `${resRange}px`;
		
		name2.innerText = resName;
		email2.innerText = resEmail;
		page2.innerText = resPage;
		date2.innerText = resDate.toString();
		doc2.innerText = resDoc;
		inter.innerText = resInter.join(', ');
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement; 
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = "form-control error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement; 
	formControl.className = "form-control success";
}