// CONFIGURATION: Paste your actual Google Apps Script Web App Exec URL here
const API_URL =
  "https://script.google.com/macros/s/AKfycbzxrRvX7S2Jh6QOHeeTWaCzTiitdn9Y49CUcI4FZh9MJdnEC_VtF9k04jshmkRavUw/exec";

// Global In-Memory state management
let allTasksState = [];
let activeCharts = {};

document.addEventListener("DOMContentLoaded", () => {
  // Standard set date presentation
  const today = new Date();
  document.getElementById("today-date-string").innerText =
    today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  document.getElementById("calendar-picker").value = today
    .toISOString()
    .split("T")[0];

  // Initial Sync initialization
  refreshGlobalData();
});

// Controls structural view transitions
function switchView(viewName) {
  document
    .querySelectorAll(".app-view")
    .forEach((el) => el.classList.add("hidden"));
  document.getElementById(`view-${viewName}`).classList.remove("hidden");

  // Manage Sidebar active focus configurations
  const navButtons = ["today", "calendar", "analytics"];
  navButtons.forEach((btn) => {
    const el = document.getElementById(`nav-${btn}`);
    if (btn === viewName) {
      el.className =
        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left bg-indigo-600 text-white font-medium transition";
    } else {
      el.className =
        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-400 hover:bg-slate-800 hover:text-white transition";
    }
  });

  if (viewName === "analytics") renderAnalytics();
}

// Global refresh sync
async function refreshGlobalData() {
  toggleLoader(true);
  try {
    const response = await fetch(API_URL);
    if (!response.ok)
      throw new Error("Database fetch error profile standard code code");
    allTasksState = await response.json();

    buildTimelineGrid("today-timetable", new Date());
    loadCalendarDateTimeline(document.getElementById("calendar-picker").value);
  } catch (err) {
    console.error("Critical Synchronization Error:", err);
    alert(
      "Failed to synchronize task data with Google Sheets backend database layers.",
    );
  } finally {
    toggleLoader(false);
  }
}

// Builds the interactive 24h timeline table interface
// Builds the interactive 24h timeline table interface with duration block-outs
function buildTimelineGrid(containerId, referenceDate) {
  const targetElement = document.getElementById(containerId);
  targetElement.innerHTML = "";

  const targetDateString = formatDateKey(referenceDate);

  // Filter rows down to tasks that happen on this selected calendar date
  const targetedTasks = allTasksState.filter(t => t["task date time"] && formatDateKey(new Date(t["task date time"])) === targetDateString);

  // Create an array for all 24 hours. Each hour will hold an array of task slots.
  let hourlySlotsMap = Array.from({ length: 24 }, () => []);

  // Track slots that are "occupied" by a multi-hour task so we can hide the "+ Allocate" button
  let occupiedHours = new Set();

  targetedTasks.forEach(task => {
    const startDate = new Date(task["task date time"]);
    const startHour = startDate.getHours();

    // Parse the duration string safely into a float (e.g., "2" or "1.5")
    const duration = Math.ceil(parseFloat(task["task duration"])) || 1;

    // Block out slots sequentially starting from the start hour up to its duration limit
    for (let i = 0; i < duration; i++) {
      const currentHour = startHour + i;

      // Safety boundary: Ensure we don't bleed into the next day's index array
      if (currentHour < 24) {
        // We only append the full UI card data into the *initial* starting slot row
        if (i === 0) {
          hourlySlotsMap[currentHour].push({ type: "task-card", data: task, durationBlocks: duration });
        } else {
          // Subsequent hours get flagged as extended blocks so they look cohesive
          hourlySlotsMap[currentHour].push({ type: "extension-block", data: task });
        }
        occupiedHours.add(currentHour);
      }
    }
  });

  // Populate actual HTML layout rows
  for (let h = 0; h < 24; h++) {
    const displayHour = h.toString().padStart(2, '0') + ":00";
    const slotsContainer = document.createElement("div");
    slotsContainer.className = "flex flex-col sm:flex-row p-3 hover:bg-gray-50/50 transition items-start sm:items-center gap-4 min-h-[70px]";

    let slotsContentHTML = `<div class="w-16 font-mono text-sm font-semibold text-gray-400 select-none">${displayHour}</div>`;
    slotsContentHTML += `<div class="flex-1 flex flex-col gap-2 w-full">`;

    const hourContents = hourlySlotsMap[h];

    if (hourContents.length > 0) {
      hourContents.forEach(slot => {
        const task = slot.data;
        const isCompleted = task["task status"] === "Completed";

        if (slot.type === "task-card") {
          const priorityColors = {
            "High": "border-l-4 border-l-rose-500 bg-rose-50 text-rose-900",
            "Medium": "border-l-4 border-l-amber-500 bg-amber-50 text-amber-900",
            "Low": "border-l-4 border-l-sky-500 bg-sky-50 text-sky-900"
          };

          slotsContentHTML += `
                        <div onclick="openTaskModalForEdit(${JSON.stringify(task).replace(/"/g, '&quot;')})" class="cursor-pointer w-full p-3 rounded-lg shadow-sm border border-gray-100 ${priorityColors[task["task priority"] || 'Medium']} ${isCompleted ? 'opacity-60 line-through bg-gray-100 border-l-gray-400' : ''} transition hover:scale-[1.005]">
                            <div class="flex justify-between items-start">
                                <h5 class="font-semibold text-sm">${task["Task title"]} <span class="text-xs text-gray-400 font-normal">(Starts here)</span></h5>
                                <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${isCompleted ? 'bg-gray-200 text-gray-600' : 'bg-white/80'}">${task["task category"]}</span>
                            </div>
                            <p class="text-xs text-gray-500 mt-1 line-clamp-1">${task["Task description"] || 'No description'}</p>
                            <div class="text-[11px] text-indigo-600 font-medium mt-2 flex items-center gap-1">
                                <i class="fa-regular fa-clock"></i> Blocks next ${task["task duration"]} hr(s)
                            </div>
                        </div>`;
        } else if (slot.type === "extension-block") {
          // Sub-indicator rendering inside consecutive blocked hours instead of rendering an overlapping card duplicate
          slotsContentHTML += `
                        <div onclick="openTaskModalForEdit(${JSON.stringify(task).replace(/"/g, '&quot;')})" class="cursor-pointer w-full px-3 py-1.5 rounded-md border border-dashed border-gray-200 bg-gray-50/50 text-xs text-gray-400 flex items-center gap-2 hover:bg-gray-100 transition">
                            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                            Reserved for: <strong class="text-gray-600 truncate max-w-[200px]">${task["Task title"]}</strong>
                        </div>`;
        }
      });
    } else {
      // Only show the build slot button if this particular hour isn't consumed by an ongoing long duration task
      slotsContentHTML += `<button onclick="openTaskModalAtHour('${referenceDate.toISOString()}', ${h})" class="text-gray-300 hover:text-indigo-600 text-xs py-1.5 px-3 rounded border border-dashed border-gray-200 hover:border-indigo-300 transition align-left w-fit">+ Allocate Time Slot</button>`;
    }

    slotsContentHTML += `</div>`;
    slotsContainer.innerHTML = slotsContentHTML;
    targetElement.appendChild(slotsContainer);
  }
}

function loadCalendarDateTimeline(dateValue) {
  if (!dateValue) return;
  buildTimelineGrid("calendar-timetable", new Date(dateValue));
}

// Modals system handlers
function openTaskModal(dateObj) {
  document.getElementById("task-form").reset();
  document.getElementById("form-rowNumber").value = "";
  document.getElementById("btn-delete").classList.add("hidden");
  document.getElementById("modal-title").innerText = "Add New Task Slot";

  // Flatten step time configs
  const localISO = new Date(
    dateObj.getTime() - dateObj.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .slice(0, 16);
  document.getElementById("form-datetime").value = localISO;
  document.getElementById("form-duration").value = "1";

  document.getElementById("task-modal").classList.remove("hidden");
}

function openTaskModalAtHour(dateISOStr, hour) {
  let dateObj = new Date(dateISOStr);
  dateObj.setHours(hour, 0, 0, 0);
  openTaskModal(dateObj);
}

function openTaskModalForEdit(taskObj) {
  document.getElementById("modal-title").innerText = "Modify Task Slot";
  document.getElementById("form-rowNumber").value = taskObj.rowNumber;
  document.getElementById("form-title").value = taskObj["Task title"];
  document.getElementById("form-desc").value =
    taskObj["Task description"] || "";

  const d = new Date(taskObj["task date time"]);
  const localISO = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  document.getElementById("form-datetime").value = localISO;
  document.getElementById("form-duration").value = taskObj["task duration"];
  document.getElementById("form-priority").value = taskObj["task priority"];
  document.getElementById("form-category").value = taskObj["task category"];
  document.getElementById("form-status").value = taskObj["task status"];

  document.getElementById("btn-delete").classList.remove("hidden");
  document.getElementById("task-modal").classList.remove("hidden");
}

function closeTaskModal() {
  document.getElementById("task-modal").classList.add("hidden");
}

// Form database manipulation submission interceptor
async function handleFormSubmit(e) {
  e.preventDefault();
  const rowNum = document.getElementById("form-rowNumber").value;

  const payload = {
    action: rowNum ? "update" : "create",
    "Task title": document.getElementById("form-title").value,
    "Task description": document.getElementById("form-desc").value,
    "task date time": document
      .getElementById("form-datetime")
      .value.replace("T", " "),
    "task duration":
      parseFloat(document.getElementById("form-duration").value) || 0,
    "task priority": document.getElementById("form-priority").value,
    "task category": document.getElementById("form-category").value,
    "task status": document.getElementById("form-status").value,
    "log time": new Date().toISOString().slice(0, 19).replace("T", " "),
  };

  if (rowNum) payload.rowNumber = parseInt(rowNum);

  closeTaskModal();
  toggleLoader(true);

  try {
    await executePostAction(payload);
    await refreshGlobalData();
  } catch (err) {
    alert("Action processing error: " + err.message);
    toggleLoader(false);
  }
}

async function handleTaskDelete() {
  const rowNum = document.getElementById("form-rowNumber").value;
  if (!rowNum || !confirm("Are you certain you wish to purge this task row?"))
    return;

  closeTaskModal();
  toggleLoader(true);

  try {
    await executePostAction({ action: "delete", rowNumber: parseInt(rowNum) });
    await refreshGlobalData();
  } catch (err) {
    alert("Purge error: " + err.message);
    toggleLoader(false);
  }
}

async function executePostAction(dataObj) {
  const response = await fetch(API_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(dataObj),
  });
  const res = await response.json();
  if (res.result !== "success") throw new Error(res.message);
  return res;
}

// ANALYTICS COMPILED CALCULATIONS
function renderAnalytics() {
  // Clear preexisting dynamic graph canvas contexts to prevent layout clipping bugs
  if (activeCharts.timeSpent) activeCharts.timeSpent.destroy();
  if (activeCharts.category) activeCharts.category.destroy();

  const totalTasksCount = allTasksState.length;
  document.getElementById("stat-total-tasks").innerText = totalTasksCount;

  if (totalTasksCount === 0) {
    document.getElementById("stat-completion-rate").innerText = "0%";
    document.getElementById("stat-total-duration").innerText = "0 hrs";
    return;
  }

  // Complete Metrics Calculations
  const completedTasks = allTasksState.filter(
    (t) => t["task status"] === "Completed",
  );
  const completionRate = Math.round(
    (completedTasks.length / totalTasksCount) * 100,
  );
  document.getElementById("stat-completion-rate").innerText =
    `${completionRate}%`;

  const totalHoursLogged = allTasksState.reduce(
    (acc, curr) => acc + (parseFloat(curr["task duration"]) || 0),
    0,
  );
  document.getElementById("stat-total-duration").innerText =
    `${totalHoursLogged.toFixed(1)} hrs`;

  // Extract Top 5 Tasks sorted based on Time Allotments
  const topTimeTasks = [...allTasksState]
    .sort(
      (a, b) =>
        (parseFloat(b["task duration"]) || 0) -
        (parseFloat(a["task duration"]) || 0),
    )
    .slice(0, 5);

  // Map Category Splits
  let categoryMap = {};
  allTasksState.forEach((t) => {
    let cat = t["task category"] || "Uncategorized";
    categoryMap[cat] = (categoryMap[cat] || 0) + 1;
  });

  // Chart 1: Top Tasks by Duration
  const ctxTime = document.getElementById("chartTimeSpent").getContext("2d");
  activeCharts.timeSpent = new Chart(ctxTime, {
    type: "bar",
    data: {
      labels: topTimeTasks.map((t) => t["Task title"]),
      datasets: [
        {
          label: "Duration (Hours)",
          data: topTimeTasks.map((t) => parseFloat(t["task duration"]) || 0),
          backgroundColor: "rgba(79, 70, 229, 0.75)",
          borderColor: "rgb(79, 70, 229)",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
    },
  });

  // Chart 2: Category Pie splits
  const ctxCat = document.getElementById("chartCategory").getContext("2d");
  activeCharts.category = new Chart(ctxCat, {
    type: "doughnut",
    data: {
      labels: Object.keys(categoryMap),
      datasets: [
        {
          data: Object.values(categoryMap),
          backgroundColor: [
            "#4f46e5",
            "#10b981",
            "#f59e0b",
            "#3b82f6",
            "#ec4899",
            "#8b5cf6",
          ],
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
  });
}

// Helpers Utility Actions
function formatDateKey(dateObj) {
  return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")}`;
}

function toggleLoader(show) {
  const loader = document.getElementById("loading-overlay");
  if (show) loader.classList.remove("hidden");
  else loader.classList.add("hidden");
}
