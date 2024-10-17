const input = document.querySelector("#data");
const btnClick = document.querySelector("#btn");


btnClick.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});

const addTask = () => {
    const input = document.querySelector("#data");
    const taskText = input.value;


    if (taskText === '') {
        //SweetAlert Here!
        alert("Invalid")
        return
    }



    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    newTask.classList.add('list');
    Toastify({
        text: "Task Added",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #62929E, #546A7B)",
        },
        onClick: function () { } // Callback after click
    }).showToast();


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        newTask.remove();
        checkTasks();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your task has been deleted",
            showConfirmButton: false,
            timer: 1500
        });
    })

    newTask.appendChild(deleteBtn);

    const taskList = document.querySelector("#tasks");
    taskList.appendChild(newTask);


    input.value = '';

    checkTasks();
}



function checkTasks() {
    const taskList = document.querySelector('#tasks');
    const tasksContainer = document.querySelector('.tasks');

    if (taskList.children.length > 0) {
        tasksContainer.classList.add('has-tasks')
    } else {
        tasksContainer.classList.remove('has-tasks')
    }
}

document.querySelector('#tasks').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed')
    }
});
