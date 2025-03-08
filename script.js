document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for navbar height
                    behavior: "smooth"
                });

                // Update URL without jumping
                history.pushState(null, null, this.getAttribute("href"));
            }
        });
    });
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

