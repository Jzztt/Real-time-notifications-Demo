function initializeDragAndDrop() {
    const draggable = document.querySelectorAll(".task");
    const droppable = document.querySelectorAll(".swim-lane");

    draggable.forEach((task) => {
        task.addEventListener("dragstart", () => {
            task.classList.add("is-dragging");
        });
        task.addEventListener("dragend", () => {
            task.classList.remove("is-dragging");
        });
    });

    droppable.forEach((zone) => {
        zone.addEventListener("dragover", (e) => {
            e.preventDefault();
            const bottomTask = insertAboveTask(zone, e.clientY);
            const curTask = document.querySelector(".is-dragging");
            if (!bottomTask) {
                zone.appendChild(curTask);
            } else {
                zone.insertBefore(curTask, bottomTask);
            }
        });

        zone.addEventListener("drop", (e) => {
            e.preventDefault();
            const curTask = document.querySelector(".is-dragging");
            const laneId = zone.dataset.laneId;
            // call api to move task
        });
    });
}

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
        }
    });

    return closestTask;
};

export {
    initializeDragAndDrop,
    insertAboveTask,
};
