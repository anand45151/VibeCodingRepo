const students = [
    { id: "24IC02CA048", name: "Paladiya Lav Shantibhai", dept: "BCA" },
    { id: "24IC02CA056", name: "Khokhani Krishkumar Kanubhai", dept: "BCA" },
    { id: "24IC02CA058", name: "Krush Alpeshbhai Nariya", dept: "BCA" },
    { id: "24IC02CA068", name: "Davra Utsav Vinubhai", dept: "BCA" },
    { id: "24IC05CA001", name: "Viradiya Ujash Dilipbhai", dept: "BCA" },
    { id: "24IC05CA002", name: "Krisha Ankoliya", dept: "BCA" },
    { id: "24IC05CA003", name: "Pachchigar Krish Vinay", dept: "BCA" },
    { id: "24IC05CA007", name: "Neel Rajubhai Dakhara", dept: "BCA" },
    { id: "24IC05CA008", name: "Niv Nileshkumar Gaudani", dept: "BCA" },
    { id: "24IC02IT001", name: "Kanani Mokshaben Dipeshbhai", dept: "BSc IT" },
    { id: "24IC02IT002", name: "Kevadiya Purv Jagdishbhai", dept: "BSc IT" },
    { id: "24IC02IT014", name: "Bodra Parth Ghanshyambhai", dept: "BSc IT" },
    { id: "24IC02IT015", name: "Jetani Priyal Manishbhai", dept: "BSc IT" },
    { id: "24IC02IT021", name: "Mangukiya Jay Ghanshyambhai", dept: "BSc IT" },
    { id: "24IC02IT029", name: "Bobby Monapara", dept: "BSc IT" },
    { id: "24IC02IT051", name: "Padasala Jeels Kiranbhai", dept: "BSc IT" },
    { id: "24IC02IT071", name: "Vekariya Devanshi Umeshbhai", dept: "BSc IT" },
    { id: "24IC02IT079", name: "Aslaliya Renisha Sureshbhai", dept: "BSc IT" },
    { id: "24IC02IT089", name: "Ramani Priyansu Bhaveshbhai", dept: "BSc IT" },
    { id: "24IC05IT001", name: "Kajavadra Rudra Prakashbhai", dept: "BSc IT" },
    { id: "24IC05IT002", name: "Kathiriya Krish Nikulbhai", dept: "BSc IT" },
    { id: "24IC05IT004", name: "Prajapati Jatin Prakashkumar", dept: "BSc IT" },
    { id: "24IC05IT005", name: "Tanwani Priyanshi Premkishan", dept: "BSc IT" },
    { id: "24IC05IT006", name: "Ismail Hussain", dept: "BSc IT" },
    { id: "24IC05IT007", name: "Jadav Himesh Nareshbhai", dept: "BSc IT" },
    { id: "24IC05IT008", name: "Jadav Bhautik Rajubhai", dept: "BSc IT" },
    { id: "24IC05IT009", name: "Hetulkumar Savaliya", dept: "BSc IT" },
    { id: "24IC05IT010", name: "Ahir Neel Sanjaybhai", dept: "BSc IT" },
    { id: "24IC05IT014", name: "Virani Sanjita Rakeshbhai", dept: "BSc IT" },
    { id: "24IC05IT017", name: "Gandhi Rashi Kalpeshkumar", dept: "BSc IT" },
    { id: "24IC05IT018", name: "Moradia Aksh Mukeshbhai", dept: "BSc IT" },
    { id: "24IC05IT019", name: "Dhola Moksha Nareshkumar", dept: "BSc IT" },
    { id: "24IC05IT020", name: "Pandya Neel Nirav", dept: "BSc IT" },
    { id: "24IC05IT021", name: "Narola Swency Govindbhai", dept: "BSc IT" },
    { id: "24IC05IT022", name: "Savaj Priyant Pratapbhai", dept: "BSc IT" },
    { id: "24IC05IT023", name: "Sarvaiya Krish Rajnikantbha", dept: "BSc IT" },
    { id: "24IC05IT024", name: "Shedge Mahek Dipeshbhai", dept: "BSc IT" },
    { id: "24IC05IT025", name: "Trisha Shingala", dept: "BSc IT" },
    { id: "24IC05IT026", name: "Patel Dhruma Hitesh", dept: "BSc IT" },
    { id: "24IC05IT027", name: "Gadhiya Yug Vijaybhai", dept: "BSc IT" },
    { id: "24IC05IT028", name: "Nishad Raval", dept: "BSc IT" },
    { id: "24IC05IT029", name: "Patel Rajvi Chetankumar", dept: "BSc IT" },
    { id: "24IC05IT030", name: "Zaloya Hardik Rajesh", dept: "BSc IT" },
    { id: "24IC05IT031", name: "Bhojak Rahi Sandepkumar", dept: "BSc IT" },
    { id: "24IC05IT032", name: "Chauhan Sneh Paresh", dept: "BSc IT" },
    { id: "24IC05IT033", name: "Badgujar Rutik Balu", dept: "BSc IT" },
    { id: "24IC05IT035", name: "Siyaben Lalitbhai Paghdal", dept: "BSc IT" },
    { id: "24IC05IT036", name: "Patel Varun Nineshbhai", dept: "BSc IT" },
    { id: "24IC05IT037", name: "Mohmmad Hussain Amirali", dept: "BSc IT" },
    { id: "24IC05IT038", name: "Gohil Om", dept: "BSc IT" },
    { id: "24IC05IT039", name: "Miyani Vedika Maheshbhai", dept: "BSc IT" },
    { id: "24IC05IT040", name: "Surani Krishaben Kantibhai", dept: "BSc IT" },
    { id: "25IC08IT004", name: "Patel Soham", dept: "BSc IT" }
];

const vibeNames = [
    "🔥 Bug Crushers", "⚡ Stack Overflow", "🚀 Git Pushers", "💻 Runtime Errors",
    "🎯 Null Pointers", "🌊 Loop Masters", "🦄 API Wizards", "🎸 Code Rockers",
    "🐉 Data Dragons", "🌟 Deploy Kings", "🎮 Debuggers", "🧠 Algorithm Aces",
    "🏄 CSS Surfers", "🎲 Random Access"
];

const groupColors = [
    { bg: "#ff006e", light: "#ff6eb4" },
    { bg: "#3a86ff", light: "#80b3ff" },
    { bg: "#8338ec", light: "#b97aff" },
    { bg: "#fb5607", light: "#ffaa44" },
    { bg: "#06d6a0", light: "#5fffcc" },
    { bg: "#ffbe0b", light: "#ffe566" },
    { bg: "#ef233c", light: "#ff7088" },
    { bg: "#0077b6", light: "#44aaee" },
    { bg: "#7b2d8b", light: "#cc66dd" },
    { bg: "#2dc653", light: "#66ee88" },
    { bg: "#e07a5f", light: "#ffaa88" },
    { bg: "#3d405b", light: "#8888bb" },
    { bg: "#118ab2", light: "#44ccff" },
    { bg: "#c77dff", light: "#ddb0ff" }
];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function makeGroups(size) {
    const shuffled = shuffle(students);
    const groups = [];
    for (let i = 0; i < shuffled.length; i += size) {
        groups.push(shuffled.slice(i, i + size));
    }
    return groups;
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const groupsContainer = document.getElementById('groups-container');
    const emptyState = document.getElementById('empty-state');
    const sizeButtons = document.querySelectorAll('.size-btn');
    const currentDate = document.getElementById('current-date');

    let groupSize = 4;

    // Set current date
    currentDate.textContent = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

    // Handle group size selection
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            groupSize = parseInt(button.dataset.size);
        });
    });

    // Generate groups
    generateBtn.addEventListener('click', () => {
        const groups = makeGroups(groupSize);
        renderGroups(groups);
    });

    function renderGroups(groups) {
        groupsContainer.innerHTML = '';
        emptyState.style.display = 'none';

        groups.forEach((group, gi) => {
            const color = groupColors[gi % groupColors.length];
            const vibe = vibeNames[gi % vibeNames.length];

            const groupCard = document.createElement('div');
            groupCard.className = 'group-card';
            groupCard.style.border = `1px solid ${color.bg}55`;
            groupCard.style.boxShadow = `0 4px 24px ${color.bg}22`;

            groupCard.innerHTML = `
                <div class="group-header" style="background: linear-gradient(135deg, ${color.bg}33, ${color.bg}11); border-bottom: 1px solid ${color.bg}44;">
                    <div>
                        <div class="group-title" style="color: ${color.light};">GROUP ${String(gi + 1).padStart(2, "0")}</div>
                        <div class="group-vibe">${vibe}</div>
                    </div>
                    <div class="group-count" style="background: ${color.bg};">${group.length}</div>
                </div>
                <div class="group-members">
                    ${group.map((s, si) => (
                        `<div class="member" style="animation-delay: ${si * 0.08}s;">
                            <div class="member-index" style="background: ${color.bg}33; border: 1px solid ${color.bg}66; color: ${color.light};">${si + 1}</div>
                            <div>
                                <div class="member-name">${s.name}</div>
                                <div class="member-details">${s.id} · ${s.dept}</div>
                            </div>
                        </div>`
                    )).join('')}
                </div>
            `;

            groupsContainer.appendChild(groupCard);
        });
    }
});
