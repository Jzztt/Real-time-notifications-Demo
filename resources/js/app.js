import "./bootstrap";
import showToast from "./toast";
import { initializeDragAndDrop, insertAboveTask } from "./drag";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    });

    todoLane.appendChild(newTask);

    input.value = "";
    // cal api to create task
});
let deleteEventAttached = false;


function attachDeleteEvent() {
    if (deleteEventAttached) return;

    const deleteButtons = document.querySelectorAll(".delete-ticket");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", deleteTicket);
    });

    deleteEventAttached = true;
}

function deleteTicket() {
    const ticketId = this.getAttribute("data-id");
    if (confirm("Are you sure you want to delete this ticket?")) {
        // cal api to delete ticket
    }
}

// Hàm cập nhật bảng
function updateBoard(lanes) {
    const lanesContainer = document.querySelector(".lanes");
    lanesContainer.innerHTML = "";

    lanes.forEach((lane) => {
        let laneHTML = `
            <div class="swim-lane" data-lane-id="${lane.id}">
                <h3 class="heading">${lane.name}</h3>
        `;

        lane.tickets.forEach((ticket) => {
            laneHTML += `
                <div class="task d-flex justify-content-between align-items-center" draggable="true" data-task-id="${ticket.id}">
                    <span>${ticket.title}</span>
                    <div class="action d-flex align-items-center gap-3">
                        <i class="fa-solid fa-gear"></i>
                        <button class="delete-ticket border-0 bg-transparent" data-id="${ticket.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        laneHTML += `</div>`;
        lanesContainer.innerHTML += laneHTML;
    });

    deleteEventAttached = false;
    attachDeleteEvent();

    initializeDragAndDrop();
}

attachDeleteEvent();

// echo channel
initializeDragAndDrop();
