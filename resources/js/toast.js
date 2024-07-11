function showToast(message, type) {
    const toastElement = document.getElementById("toastMessage");
    toastElement.textContent = message;
    toastElement.style.display = "block";
    toastElement.style.color = "white";

    if(type === "success") {
        toastElement.style.backgroundColor = "green";
    }else if(type === "danger") {

        toastElement.style.backgroundColor = "red";
    }

    setTimeout(() => {
        toastElement.style.display = "none";
    }, 3000);
}

export default showToast;