document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(function(section) {
                section.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });
});
