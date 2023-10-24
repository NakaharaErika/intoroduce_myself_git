document.getElementById('imageLink').addEventListener('click', function(event) {
    event.preventDefault();

    const href = this.getAttribute('href');
    document.getElementById('popupImage').setAttribute('src', href);
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('popup').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
