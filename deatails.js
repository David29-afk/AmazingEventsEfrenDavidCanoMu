document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.details-btn');
    
    detailsButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const eventId = button.dataset.id;
            
            const urlParams = new URLSearchParams();
            urlParams.append('id', eventId);
            
            const url = `./Details.html?${urlParams.toString()}`;
            
            window.location.href = url;
        });
    });
});