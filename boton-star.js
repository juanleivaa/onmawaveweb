function toggleStar(button) {
    var icon = button.querySelector('i');
    if (icon.classList.contains('bi-star')) {
        icon.classList.remove('bi-star');
        icon.classList.add('bi-star-fill');
    } else {
        icon.classList.remove('bi-star-fill');
        icon.classList.add('bi-star');
    }
}

function showButtons(card) {
    card.querySelector('.buy-button').style.display = 'inline-block'; // Muestra el botón de compra
    card.querySelector('.star-button').style.display = 'inline-block'; // Muestra el botón de estrella
}

function hideButtons(card) {
    card.querySelector('.buy-button').style.display = 'none'; // Oculta el botón de compra
    card.querySelector('.star-button').style.display = 'none'; // Oculta el botón de estrella
}


document.querySelector('.search-container').addEventListener('mouseenter', function() {
    this.classList.add('active');
});

document.querySelector('.search-container').addEventListener('mouseleave', function() {
    this.classList.remove('active');
});



  
