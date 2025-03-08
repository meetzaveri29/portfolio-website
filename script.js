$(document).ready(function () {
    // Smooth scrolling for navigation links
    $("a[href^='#']").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Example: Dynamically load project details (replace with your actual data)
    $('.project-card a').on('click', function (event) {
        event.preventDefault();
        var projectTitle = $(this).siblings('h3').text();
        alert('You clicked on ' + projectTitle + '. More details coming soon!');
        // In a real implementation, you'd fetch project details via AJAX and display them in a modal or separate page.
    });

    // Simple animation example (you can expand on this)
    $('.hero h1').addClass('animated fadeInDown');
    $('.hero p').addClass('animated fadeInUp');
});

// Data Pipeline Animation (Conceptual - Requires more detailed implementation)
function animatePipeline() {
    // This is a placeholder.  A real pipeline animation would involve:
    // 1.  Creating the pipeline elements (nodes and connections) dynamically using JavaScript.
    // 2.  Animating the movement of data (e.g., small circles) along the connections.
    // 3.  Possibly using a library like D3.js for more complex visualizations.
    console.log("Data pipeline animation started (placeholder).");
}

// Call the animation function (you might trigger this on page load or when the user scrolls to a specific section)
animatePipeline();

