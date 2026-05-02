/**
 * AVNI MULTI-SERVICES PATNA
 * JavaScript Logic for Calls and WhatsApp Bookings
 */

// 1. Initialize Lucide Icons (Jo icons aapne HTML mein use kiye hain)
lucide.createIcons();

// 2. Configuration: Aapka Number Yahan Hidden Hai
const SECURE_PHONE = "9570947930";
const WHATSAPP_BASE = `https://wa.me/91${SECURE_PHONE}`;

// 3. UI Selectors (HTML elements ko select karna)
const navCallBtn = document.getElementById('topCallBtn');
const heroCallBtn = document.getElementById('heroCallBtn');
const heroWA = document.getElementById('heroWA');
const footerCall = document.getElementById('footerCall');
const footerWA = document.getElementById('footerWA');

const bookingModal = document.getElementById('bookingModal');
const svcLabel = document.getElementById('svcLabel');
const finalSubmit = document.getElementById('finalSubmit');

// Current selected service tracker
let activeService = "General Home Service";

// 4. Core Actions

// Phone Dialer trigger karne ke liye
const triggerCall = () => {
    window.location.href = `tel:+91${SECURE_PHONE}`;
};

// WhatsApp open karne ke liye
const triggerWhatsApp = () => {
    window.open(WHATSAPP_BASE, '_blank');
};

// Modal Open karne ka function
window.openBooking = function(serviceName) {
    activeService = serviceName;
    if (svcLabel) svcLabel.innerText = serviceName;
    if (bookingModal) {
        bookingModal.classList.replace('hidden', 'flex');
        document.body.style.overflow = 'hidden'; // Background scroll band karne ke liye
    }
};

// Modal Close karne ka function
window.closeBooking = function() {
    if (bookingModal) {
        bookingModal.classList.replace('flex', 'hidden');
        document.body.style.overflow = 'auto'; // Background scroll wapas chalu
    }
};

// Lead ko WhatsApp par bhejne ka function
function handleLeadSubmission() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const addr = document.getElementById('custAddr').value;

    // Validation: Check agar fields khali hain
    if (!name || !phone || !addr) {
        alert("Bhai, kripya poori detail bhariye taaki hum aapse contact kar sakein.");
        return;
    }

    // Message ko format karna
    const message = `*Naya Repair Booking - Avni Services*%0A%0A` +
                    `- *Service:* ${activeService}%0A` +
                    `- *Customer:* ${name}%0A` +
                    `- *Contact:* ${phone}%0A` +
                    `- *Address:* ${addr}%0A%0A` +
                    `_Sent via Avni Official Website_`;
    
    // WhatsApp redirect
    window.open(`${WHATSAPP_BASE}?text=${message}`, '_blank');
    closeBooking();
}

// 5. Event Bindings (Buttons ko logic se jodhna)

if (navCallBtn) navCallBtn.addEventListener('click', triggerCall);
if (heroCallBtn) heroCallBtn.addEventListener('click', triggerCall);
if (footerCall) footerCall.addEventListener('click', triggerCall);

if (heroWA) heroWA.addEventListener('click', triggerWhatsApp);
if (footerWA) footerWA.addEventListener('click', triggerWhatsApp);

if (finalSubmit) finalSubmit.addEventListener('click', handleLeadSubmission);

// Keyboard 'Escape' key se modal close karne ke liye
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBooking();
});

console.log("Avni Services Patna: Logic Loaded Successfully.");
