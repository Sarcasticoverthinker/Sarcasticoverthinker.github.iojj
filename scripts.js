// Floating Hearts
document.addEventListener('DOMContentLoaded', function () {
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💜';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 300);
});

// Page Navigation
const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.page-indicator .dot');
let currentPage = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
        triggerConfetti();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        triggerConfetti();
    }
}

// Compliments & Affirmations
const compliments = [
    "Baby Gurl",
    "you are the most beautiful girl in the world.",
    "In my eyes, you shine as the most stunning girl.",
    "I truly enjoy every moment we spend talking Khadijah",
    "You're not just beautiful on the outside; your soul is radiant🦢",
    "I miss you the moment our conversation ends.",
    "Every time I see you, my heart skips a beat.",
    "You are wonderful!!",
    "but!",
    "no butts, okay",
    "but (hehe)",
    "You’re such an adorable pain sometimes",
    "Yu, Proper Annoying Cow",
    "Yu sour pickle as well 🙄",
    "Moti Moti Moti 🙄🙄🙄.",
    "Your eyes tho 👀",
    "Don’t worry, even as a 'T-shirt wali aunty,' you’d still outshine every aunty out there 🤧🧻",
    "Baby Gurl",
    "You have the perfect balance of sweetness and sass 😘"
];

const affirmations = [
    "work in progress bbg",
    "yeah :(, wip"
];

let complimentIndex = 0;
let affirmationIndex = 0;

function changeCompliment() {
    const button = document.querySelector('.compliments .button');
    complimentIndex = (complimentIndex + 1) % compliments.length;
    button.innerHTML = `Khadijah, ${compliments[complimentIndex]}`;
    button.style.animation = 'fadeIn 0.5s';
}

function changeAffirmation() {
    const button = document.querySelector('.affirmations .button');
    affirmationIndex = (affirmationIndex + 1) % affirmations.length;
    button.innerHTML = affirmations[affirmationIndex];
    button.style.animation = 'fadeIn 0.5s';
}

// Notes Functionality
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const savedNotesContainer = document.getElementById('savedNotesContainer');
    const note = noteInput.value.trim();

    if (note) {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.innerHTML = `
            ${note}
            <button class="delete-btn" onclick="this.parentElement.remove(); saveNotes()">×</button>
        `;
        savedNotesContainer.appendChild(noteElement);
        noteInput.value = '';
        saveNotes();
    }
}

function saveNotes() {
    const savedNotesContainer = document.getElementById('savedNotesContainer');
    const notes = Array.from(savedNotesContainer.children).map(note => note.textContent.replace('×', '').trim());
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const savedNotesContainer = document.getElementById('savedNotesContainer');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.innerHTML = `
            ${note}
            <button class="delete-btn" onclick="this.parentElement.remove(); saveNotes()">×</button>
        `;
        savedNotesContainer.appendChild(noteElement);
    });
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Initial Load
window.onload = loadNotes;

// Enhanced Birthday Countdown
function updateCountdown() {
    const birthday = new Date(new Date().getFullYear(), 4, 12); // May 12th
    const now = new Date();

    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = `
            <div class="timer-unit" style="background: #ff69b4;">
                <span>🎉</span>
                <span class="unit-label">Happy Birthday!</span>
            </div>`;
        document.getElementById('birthdayMessage').textContent =
            "The kingdom celebrates its beloved princess today! 🎂👸";
        triggerCelebrations();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days.toString().padStart(2, '0');

    const messages = [
        { days: 30, message: "The kingdom prepares for your special day!" },
        { days: 7, message: "One week until we celebrate you! 🎈" },
        { days: 1, message: "Tomorrow's the big day! ✨" },
        { days: 0, message: "It's here! Happy Birthday Princess! 👑" }
    ];

    const currentMessage = messages.find(m => days >= m.days)?.message ||
        "Every second brings us closer to your celebration!";
    document.getElementById('birthdayMessage').textContent = currentMessage;
}

// Update the countdown only when the day changes
function scheduleCountdownUpdate() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Next midnight
    const timeUntilMidnight = midnight - now;

    setTimeout(() => {
        updateCountdown();
        scheduleCountdownUpdate(); // Schedule the next update
    }, timeUntilMidnight);
}

// Initial call
updateCountdown();
scheduleCountdownUpdate();

// Confetti Effect
function triggerConfetti() {
    const confettiCount = 100;
    const celebrationsContainer = document.getElementById('celebrations');

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        celebrationsContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Trigger Celebrations (e.g., on birthday)
function triggerCelebrations() {
    const celebrationsContainer = document.getElementById('celebrations');
    celebrationsContainer.style.display = 'block';

    const emojiCount = 50;
    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'birthday-emoji';
        emoji.innerHTML = '🎉';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = Math.random() * 3 + 2 + 's';
        celebrationsContainer.appendChild(emoji);

        setTimeout(() => emoji.remove(), 5000);
    }
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
