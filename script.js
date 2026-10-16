
/* HEADER - MOBILE MENU */

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    // Header scroll effect
    function updateHeader() {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 30);
        }
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (!menuBtn || !navLinks) return;

    // Mobile menu open / close
    menuBtn.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active", isOpen);
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Menu link click par menu band
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuBtn.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Escape key se menu band
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuBtn.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        }
    });
});


/* CONTACT FORM - WHATSAPP */

const contactForm = document.getElementById("contactForm");

const WHATSAPP_NUMBER = "923103730188";
// Apna asli WhatsApp number yahan likho.
// Pakistan ka format: 92 + mobile number, bina + ke.

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const city = document.getElementById("customerCity").value.trim();
        const address = document.getElementById("customerAddress").value.trim();
        const additionalMessage = document.getElementById("customerMessage").value.trim();

        if (!name || !phone || !city || !address) {
            alert("Please fill in all required fields.");
            return;
        }

        const message = [
            "💧 *NEW MESSAGE - PURELITE WATER DELIVERY*",
            "",
            "*Full Name:* " + name,
            "*Phone Number:* " + phone,
            "*City:* " + city,
            "*Complete Address:* " + address,
            "*Additional Message:* " + (additionalMessage || "None"),
            "",
            "Please contact me regarding water delivery."
        ].join("\n");

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
