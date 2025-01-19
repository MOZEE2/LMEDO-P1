document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', document.getElementById('fileInput').files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'une petite erreur est survenue .';
    });
});
