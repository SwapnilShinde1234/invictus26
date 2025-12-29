import { matches } from "./index.js";
import {
    indoorGames,
    outdoorGames,
    indianGames,
    gymnasiumGames,
    allSports
} from "./sportsData.js";
import { departmentPoints, departmentMeta } from "./departments.js";
import { renderIframeResults } from "./results.js";


document.addEventListener("DOMContentLoaded", () => {

    renderSports("indoorSection", indoorGames);
    renderSports("outdoorSection", outdoorGames);
    renderSports("indianSection", indianGames);
    renderSports("gymSection", gymnasiumGames);

});

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const heroUpdates = document.getElementById("heroUpdates");
const pointsTable = document.getElementById("pointsTable");


const startTime = Date.now();

window.addEventListener("load", () => {
    const total = Date.now() - startTime;
    document.getElementById("loader").remove();
});

/* ================= IMAGE AUTO RESOLVER ================= */
const IMAGE_BASE = "./images/";
const IMAGE_EXTS = ["webp", "avif", "jpg", "jpeg", "png"];

function resolveSportImage(imgEl, sport, event) {
    let i = 0;
  
    const clean = str => str.replace(/\s+/g, "");
  
    const genderKey = `${clean(sport)}${clean(event)}`; // CricketBoys
    const baseKey = clean(sport);                        // Cricket
  
    function tryNext() {
      if (i >= IMAGE_EXTS.length * 2) {
        imgEl.src = `${IMAGE_BASE}default.jpg`;
        imgEl.style.opacity = "0.2";
        return;
      }
  
      const ext = IMAGE_EXTS[i % IMAGE_EXTS.length];
  
      // First try: CricketBoys.webp
      // Second round: Cricket.webp
      imgEl.src =
        i < IMAGE_EXTS.length
          ? `${IMAGE_BASE}${genderKey}.${ext}`
          : `${IMAGE_BASE}${baseKey}.${ext}`;
  
      i++;
    }
  
    imgEl.onerror = tryNext;
    tryNext();
  }
  
function setupIframeTabs() {
    const tabs = document.querySelectorAll(".iframe-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // reset all tabs
            tabs.forEach(t => t.dataset.active = "false");

            // hide all panels
            ["schedule", "completed", "results"].forEach(id => {
                document.getElementById(`tab-${id}`).classList.add("hidden");
            });

            // activate selected
            tab.dataset.active = "true";
            document
                .getElementById(`tab-${tab.dataset.tab}`)
                .classList.remove("hidden");
        });
    });
}



function getSportImageKey(sport, events = []) {
    const gender =
        events.includes("Girls") ? "Girls" :
            events.includes("Boys") ? "Boys" :
                "";

    // Normalize names to match filenames
    const base = sport
        .replace(/\s+/g, "")
        .replace("-", "")
        .replace(" of ", "Of");

    return gender ? `${base}${gender}` : base;
}



/* ================= MOBILE MENU ================= */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

/* ================= SORT MATCHES ================= */
const sortedMatches = [...matches].sort((a, b) => {
    return new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`);
});

/* ================= SPORTS CARDS ================= */
function renderSports(id, data) {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = "";

    if (!data || data.length === 0) {
        el.innerHTML = `
      <div class="col-span-full text-center text-[#A1A1AA] py-6">
        No sports available
      </div>`;
        return;
    }
    data.forEach(s => {
        const card = document.createElement("div");

        card.className = `
          relative overflow-hidden
          group bg-white/5 border border-white/10 backdrop-blur
          rounded-xl p-5 cursor-pointer
          hover:border-[#F5FF00]/50 hover:bg-white/10
          transition-all duration-300
        `;

        const img = document.createElement("img");
        img.className = "absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition";
        img.loading = "lazy";

      
        resolveSportImage(img, s.sport, s.event);


        card.appendChild(img);


        const content = document.createElement("div");
        content.className = "relative z-10";

        content.innerHTML = `
          <h4 class="text-lg font-semibold text-white mb-1">
            ${s.sport}
          </h4>
          <p class="text-sm text-[#A1A1AA]">
          ${s.event}
          </p>
          <span class="inline-block mt-3 text-xs text-[#F5FF00]
                       opacity-0 group-hover:opacity-100 transition">
            View schedule →
          </span>
        `;

        card.appendChild(content);

        card.addEventListener("click", () => {
            openSportDetails(s.sport, s.event);
        });

        el.appendChild(card);
    });

}

function renderParticipants(participants) {
    if (!Array.isArray(participants) || participants.length === 0) return "";

    return `
      <ol class="list-decimal list-inside text-sm text-[#A1A1AA] space-y-1 mt-1">
        ${participants.map(p => `<li>${p}</li>`).join("")}
      </ol>
    `;
}

/* ================= SPORT DETAILS (IFRAME OVERLAY) ================= */
function openSportDetails(sportName,sportEvent) {
    const overlay = document.getElementById("iframeOverlay");
    const title = document.getElementById("iframeTitle");

    const scheduleDiv = document.getElementById("iframeSchedule");
    const completedDiv = document.getElementById("iframeCompleted");

    overlay.classList.remove("hidden");
    title.innerText = sportName;

    scheduleDiv.innerHTML = "";
    completedDiv.innerHTML = "";

    const sportMatches = matches.filter(m => m.sport === sportName , e => e.sport ===eventName );

    if (sportMatches.length === 0) {
        scheduleDiv.innerHTML = `
        <div class="text-center text-gray-400">
          No matches scheduled
        </div>`;
        return;
    }

    sportMatches.forEach(m => {
        const card = `
        <div class="bg-white/5 border border-white/10 rounded-xl p-4">
          <div class="flex justify-between items-center mb-1">
            <p class="font-semibold text-white">${m.event}</p>
            <span class="text-xs px-2 py-1 rounded
              ${m.status === "Completed"
                ? "bg-[#F5FF00] text-black"
                : "bg-blue-500/20 text-blue-400"}">
              ${m.status}
            </span>
          </div>
  
          <ol class="list-decimal list-inside text-sm text-gray-400 mt-1">
            ${m.participants.map(p => `<li>${p}</li>`).join("")}
          </ol>
  
          <p class="text-xs text-gray-400 mt-2">
            ${m.date} • ${m.time}
          </p>
        </div>
      `;

        // ✅ ALWAYS show in timetable
        scheduleDiv.innerHTML += card;

        // ✅ Only completed here
        if (m.status === "Completed") {
            completedDiv.innerHTML += card;
        }
    });

    setupIframeTabs();
    renderIframeResults(sportName);
}


window.closeIframe = function () {
    document.getElementById("iframeOverlay").classList.add("hidden");
  };
  

/* ================= INITIAL SPORTS RENDER ================= */
renderSports("indoorSection", indoorGames);
renderSports("outdoorSection", outdoorGames);
renderSports("indianSection", indianGames);
renderSports("gymSection", gymnasiumGames);

/* ================= SEARCH + FILTER SPORTS ================= */
function filterSports() {
    const q = searchInput.value.trim().toLowerCase();
    const c = categoryFilter.value;

    const sections = {
        "Indoor Games": "indoorSection",
        "Outdoor Games": "outdoorSection",
        "Indian Games": "indianSection",
        "Gymnasium": "gymSection"
    };

    Object.values(sections).forEach(id => {
        document.getElementById(id).innerHTML = "";
    });

    const filteredSports = allSports.filter(s => {
        const nameMatch = s.sport.toLowerCase().startsWith(q);
        const categoryMatch = c === "ALL" || s.category === c;
        return nameMatch && categoryMatch;
    });

    const grouped = {
        "Indoor Games": [],
        "Outdoor Games": [],
        "Indian Games": [],
        "Gymnasium": []
    };

    filteredSports.forEach(s => grouped[s.category].push(s));

    Object.keys(grouped).forEach(category => {
        renderSports(sections[category], grouped[category]);
    });
}

searchInput.addEventListener("input", filterSports);
categoryFilter.addEventListener("change", filterSports);

/* ================= HERO UPDATES ================= */
matches
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5)
    .forEach(m => {
        heroUpdates.innerHTML += `
      <div class="min-w-[260px] bg-white/5 border border-white/10
                  backdrop-blur rounded-xl p-4">
        <p class="font-semibold text-white">${m.sport}</p>
        <p class="text-sm text-[#A1A1AA]">${m.participants.join(" vs ")}</p>
        ${m.winner
                ? `<p class="text-[#F5FF00] mt-2">Winner: ${m.winner}</p>`
                : ""
            }
      </div>`;
    });

/* ================= POINTS TABLE ================= */
departmentPoints
    .sort((a, b) => b.points - a.points)
    .forEach((d, i) => {
        pointsTable.innerHTML += `
      <tr class="border-t border-white/10">
        <td class="p-3">${i + 1}</td>
        <td class="p-3">${d.department}</td>
        <td class="p-3 font-bold text-[#F5FF00]">${d.points}</td>
      </tr>`;
    });

/* ================= MATCH SCHEDULE ================= */
renderMatches(sortedMatches);

function renderMatches(matchesData) {
    const list = document.getElementById("scheduleList");
    list.innerHTML = "";

    if (!matchesData || matchesData.length === 0) {
        list.innerHTML = `
      <div class="col-span-full text-center text-[#A1A1AA] py-6">
        No matches found
      </div>`;
        return;
    }

    matchesData.forEach(m => {
        list.innerHTML += `
      <div class="bg-white/5 border border-white/10 backdrop-blur
                  rounded-xl p-4">
        <div class="flex justify-between items-center mb-1">
          <h4 class="font-semibold text-white">${m.sport} – ${m.event}</h4>
          <span class="text-xs px-2 py-1 rounded
            ${m.status === "Completed"
                ? "bg-[#F5FF00] text-black"
                : "bg-blue-500/20 text-blue-400"
            }">
            ${m.status}
          </span>
        </div>

        <p class="text-sm text-[#A1A1AA]">${m.participants.join(" vs ")}</p>
        <p class="text-xs text-[#A1A1AA]">${m.date} • ${m.time}</p>

        ${m.status === "Completed"
                ? `<p class="text-[#F5FF00] font-semibold mt-2">${m.result}</p>`
                : ""
            }
      </div>`;
    });
}

/* ================= MATCH SEARCH ================= */
const matchSearchInput = document.getElementById("matchSearch");

matchSearchInput.addEventListener("input", () => {
    const q = matchSearchInput.value.trim().toLowerCase();

    // If search box empty → show all
    if (q === "") {
        renderMatches(sortedMatches);
        return;
    }

    const filtered = sortedMatches.filter(m => {
        const sportMatch =
            m.sport && m.sport.toLowerCase().includes(q);

        const eventMatch =
            m.event && m.event.toLowerCase().includes(q);

        const participantMatch =
            Array.isArray(m.participants) &&
            m.participants.some(p =>
                p.toLowerCase().includes(q)
            );

        const departmentMatch =
            Array.isArray(m.departments) &&
            m.departments.some(d =>
                d.toLowerCase().includes(q)
            );

        return (
            sportMatch ||
            eventMatch ||
            participantMatch ||
            departmentMatch
        );
    });

    renderMatches(filtered);
});


function formatDateTime(isoString) {
    const d = new Date(isoString);
    return d.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}

const pointsUpdatedAt = document.getElementById("pointsUpdatedAt");

if (pointsUpdatedAt && departmentMeta?.lastUpdated) {
    pointsUpdatedAt.innerText = formatDateTime(departmentMeta.lastUpdated);
}


/* ================= RESULTS ================= */

const resultsDeptFilter = document.getElementById("resultsDeptFilter");
const resultsSearch = document.getElementById("resultsSearch");

function renderResults() {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";

    const dept = resultsDeptFilter.value;
    const q = resultsSearch.value.trim().toLowerCase();

    // Only completed matches
    let completedMatches = matches.filter(m => m.status === "Completed");

    // Sort latest first
    completedMatches.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    // Department filter
    if (dept !== "ALL") {
        completedMatches = completedMatches.filter(m =>
            Array.isArray(m.departments) &&
            m.departments.includes(dept)
        );
    }

    // Search filter
    if (q) {
        completedMatches = completedMatches.filter(m => {
            return (
                (m.sport && m.sport.toLowerCase().includes(q)) ||
                (m.event && m.event.toLowerCase().includes(q)) ||
                (m.winner && m.winner.toLowerCase().includes(q)) ||
                (Array.isArray(m.participants) &&
                    m.participants.some(p => p.toLowerCase().includes(q))) ||
                (Array.isArray(m.departments) &&
                    m.departments.some(d => d.toLowerCase().includes(q)))
            );
        });
    }

    if (completedMatches.length === 0) {
        list.innerHTML = `
      <div class="col-span-full text-center text-[#A1A1AA] py-8">
        No results found
      </div>`;
        return;
    }

    completedMatches.forEach(m => {
        list.innerHTML += `
      <div class="bg-white/5 border border-white/10 backdrop-blur
                  rounded-xl p-5">

        <div class="flex items-center gap-2 mb-2">
          <span class="text-[#F5FF00] text-lg">🏆</span>
          <h4 class="font-semibold text-white">
            ${m.sport} – ${m.event}
          </h4>
        </div>

        <p class="text-sm text-[#A1A1AA]">
          ${m.participants.join(" vs ")}
        </p>

        <p class="mt-2 font-semibold text-[#F5FF00]">
          Winner: ${m.result}
          ${m.winnerDepartment
                ? `<span class="text-sm text-[#A1A1AA]">(${m.winnerDepartment})</span>`
                : ""
            }
        </p>

        <p class="text-xs text-[#A1A1AA] mt-2">
          ${m.date} • ${m.time}
        </p>
      </div>
    `;
    });
}


// Event listeners
resultsDeptFilter.addEventListener("change", renderResults);
resultsSearch.addEventListener("input", renderResults);

// Initial render
renderResults();

