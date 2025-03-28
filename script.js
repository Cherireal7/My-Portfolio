
    const hamb = document.getElementById("hamb");
    const menu = document.getElementById("menu");

    hamb.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });


    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
        const confirmation = document.getElementById("confirmationMessage");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Send form data to Getform API
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    confirmation.style.display = "block"; // Show confirmation message
                    form.reset(); // Clear the form
                } else {
                    alert("Something went wrong. Please try again.");
                }
            }).catch(error => {
                alert("Error: " + error.message);
            });
        });
    });


    window.addEventListener('scroll', () => {
        // Array of section IDs to target
        const sections = ['aboutme', 'experience', 'contact'];
    
        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            const sectionPosition = section.getBoundingClientRect();
    
            // Check if the section is in the viewport
            if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
                // If the section is in the viewport, fade it in quickly and smoothly
                section.style.transition = 'opacity 0.5s ease-in';  // Quick fade-in
                section.style.opacity = 1;
            }
        });
    });



    document.addEventListener("DOMContentLoaded", () => {
        const element = document.getElementById("fadeElement");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.remove("opacity-0", "translate-y-5");
                }
            });
        }, { threshold: 0.1 });

        observer.observe(element);
    });

