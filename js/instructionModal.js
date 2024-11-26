const isAndroid = () => {
    return /Android/i.test(navigator.userAgent);
}

const isModalDelayExpired = () => {
    const contactInstructionLastShown = localStorage.getItem("contactInstructionLastShown");
    if (contactInstructionLastShown) {
        return Date.parse(contactInstructionLastShown) + (1 * 24 * 60 * 60 * 1000) <= new Date().getTime()
    }
    else return true
}

const addContactModal = document.getElementById("addContactModal");
const downloadContactButtons = document.querySelectorAll("[href='./vcard.vcf']");
const closeAddContactModalButton = document.getElementById("closeAddContactModalButton");

downloadContactButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isAndroid() && isModalDelayExpired()) {
            addContactModal.style.display = "block";
            localStorage.setItem("contactInstructionLastShown", new Date().toISOString())
        }
    })
});

window.onclick = (event) => {
    if (event.target == addContactModal) {
        addContactModal.style.display = "none";
    }
}

closeAddContactModalButton.onclick = () => {
    addContactModal.style.display = "none";
}