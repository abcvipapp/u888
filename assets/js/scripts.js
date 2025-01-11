document.addEventListener("DOMContentLoaded", function() {
    var openPopupButtons = document.querySelectorAll('.open-popup-btn');
    var closePopupButtons = document.querySelectorAll('.close-popup-btn');
    var popupOverlays = document.querySelectorAll('.popup-overlay');

    // Má»Ÿ popup tÆ°Æ¡ng á»©ng
    openPopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            var popupId = button.getAttribute('data-popup-target');
            var popup = document.getElementById(popupId);
            popup.style.display = 'flex';
        });
    });

    // ÄĂ³ng popup vĂ  táº¡m dá»«ng video (náº¿u cĂ³)
    closePopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            var popup = this.closest('.popup-overlay');
            popup.style.display = 'none';
            // Táº¡m dá»«ng video khi Ä‘Ă³ng popup
            var videos = popup.getElementsByTagName('video');
            if (videos.length > 0) {
                videos[0].pause();
            }
        });
    });

    // ÄĂ³ng popup khi click ra ngoĂ i ná»™i dung popup vĂ  táº¡m dá»«ng video
    popupOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
                // Táº¡m dá»«ng video khi Ä‘Ă³ng popup
                var videos = overlay.getElementsByTagName('video');
                if (videos.length > 0) {
                    videos[0].pause();
                }
            }
        });
    });
});