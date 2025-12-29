// js/results.js


const medalStyle = {
    1: {
      label: "🥇 1st",
      bg: "from-yellow-400 to-yellow-600",
      ring: "ring-yellow-400"
    },
    2: {
      label: "🥈 2nd",
      bg: "from-gray-300 to-gray-500",
      ring: "ring-gray-400"
    },
    3: {
      label: "🥉 3rd",
      bg: "from-amber-700 to-amber-900",
      ring: "ring-amber-600"
    }
  };
  import { matches } from "./index.js";

export function renderIframeResults(sportName) {
  const el = document.getElementById("iframeResults");
  if (!el) return;

  el.innerHTML = "";

  const completed = matches.filter(
    m => m.sport === sportName && m.status === "Completed"
  );

  if (completed.length === 0) {
    el.innerHTML = `
      <div class="text-center text-gray-400">
        No results declared
      </div>`;
    return;
  }

  completed.forEach(m => {

    el.innerHTML += `
      <div class="bg-white/5 border border-white/10 rounded-xl p-6">
        <h4 class="text-white font-semibold mb-4">
          ${m.event}
        </h4>

        ${
          m.winners
            ? m.winners.map(w => {
                const style = medalStyle[w.position];
                return `
                  <div class="
                    flex items-center gap-4 mb-3
                    p-3 rounded-lg
                    bg-gradient-to-r ${style.bg}
                    ring-1 ${style.ring}
                  ">
                    <span class="text-lg font-bold text-black">
                      ${style.label}
                    </span>

                    <div class="flex-1">
                      <p class="font-semibold text-black">
                        ${w.name}
                      </p>
                      <p class="text-xs text-black/70">
                        ${w.department}
                      </p>
                    </div>
                  </div>
                `;
              }).join("")
            : `<p class="text-[#F5FF00] font-semibold">
                Result declared
              </p>`
        }

        <p class="text-xs text-gray-400 mt-4">
          ${m.date} • ${m.time}
        </p>
      </div>
    `;
  });
}
