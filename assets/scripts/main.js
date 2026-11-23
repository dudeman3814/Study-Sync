// GOOGLE GEMINI GENERATED CODE FOR DEMONSTRATION PURPOSES ONLY!!!

document.addEventListener("DOMContentLoaded", function () {
    // Read "?user=..." from the URL (defaults to 30271234 if opened directly)
    const urlParams = new URLSearchParams(window.location.search);
    const currentUser = urlParams.get("user") || "30271234";

    // Map status numbers (0, 1, 2) to your HTML column IDs and CSS classes
    const statusMap = {
        0: { columnId: "not-started", dotClass: "status-red" },
        1: { columnId: "in-progress", dotClass: "status-amber" },
        2: { columnId: "completed", dotClass: "status-green" }
    };

    // Fetch the mock JSON file (adjust the path if your JSON files are in a different folder)
    fetch(`../assets/data/user-${currentUser}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load tasks for user ${currentUser}`);
            }
            return response.json();
        })
        .then(tasks => {
            renderTasks(tasks, statusMap);
        })
        .catch(error => {
            console.error("Error loading demo tasks:", error);
        });
});

function renderTasks(tasks, statusMap) {
    tasks.forEach(task => {
        const statusInfo = statusMap[task.status];
        if (!statusInfo) return;

        const targetColumn = document.getElementById(statusInfo.columnId);
        if (!targetColumn) return;

        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.dataset.taskNumber = task.taskNumber;

        taskCard.innerHTML = `
            <div class="task-left">
                <span class="task-dates font-bold">Start: ${task.taskDateStart} &rarr; Deadline: ${task.taskDateDline}</span>
            </div>
            <div class="task-right">
                <p class="task-details font-reg">${task.taskDetails}</p>
            </div>
        `;

        targetColumn.appendChild(taskCard);
    });
}