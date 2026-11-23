// GOOGLE GEMINI GENERATED CODE FOR DEMONSTRATION PURPOSES ONLY!!!

const statusMap = {
    0: "not-started",
    1: "in-progress",
    2: "completed"
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const currentUser = urlParams.get("user") || "30271234";

    fetch(`../assets/data/user-${currentUser}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load tasks for user ${currentUser}`);
            }
            return response.json();
        })
        .then(tasks => {
            renderTasks(tasks);
        })
        .catch(error => {
            console.error("Error loading demo tasks:", error);
        });
});

function renderTasks(tasks) {
    tasks.forEach(task => {
        const columnId = statusMap[task.status];
        if (!columnId) return;

        const targetColumn = document.getElementById(columnId);
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
