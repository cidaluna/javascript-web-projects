const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

var shortenedUrlTextarea = document.getElementById('shortenedUrl');

function shortenUrl(){
    var originalUrl = document.getElementById('originalUrl').value;

    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    fetch(apiUrl).then(response => response.text()).then(
        data => {
            shortenedUrlTextarea.value = data;
        }
    ).catch(error => {
        shortenedUrlTextarea.value = "Error: Enable to shorten URL ";
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
    originalUrl.value = '';
    shortenedUrlTextarea.value = '';
});
