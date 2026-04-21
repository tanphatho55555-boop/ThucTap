// 1. Khai báo
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const deleteBtn = document.getElementById('delete-btn');
const editBtn = document.getElementById('edit-btn');
// 2. Mảng chứa danh sách công việc
let tasks = [];

// 3. Hàm hiển thị danh sách
function renderTasks() {
    todoList.innerHTML = ''; 
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <button style="background: blue; color: white" onclick="editTask(${index})">Sửa</button>
            <button onclick="deleteTask(${index})">Xóa</button>
        `;
        todoList.appendChild(li);
    });
}

// 4. Hàm thêm 
function addTask() {
    const text = todoInput.value.trim();
    
    if (text === "") {
        alert("Bạn chưa nhập công việc mà!");
        return;
    }
    
    tasks.push({
        text: text,
        completed: false
    });
    
    todoInput.value = ''; 
    renderTasks(); 
}

// 5. Hàm xóa (Phải có hàm này thì render mới không bị lỗi khi bấm nút Xóa)
function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks(); 
}

// 6. Lắng nghe sự kiện click
addBtn.addEventListener('click', addTask);
deleteBtn.addEventListener('click', () => {
    if (confirm("Bạn có chắc muốn xóa tất cả công việc không?")) {
        tasks = []; 
        renderTasks(); 
    }
});
// 7. Hàm sửa công việc
window.editTask = function(index) {
    const currentText = tasks[index].text;
    const newText = prompt("Cập nhật công việc:", currentText);

    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim(); // Cập nhật dữ liệu
        renderTasks();                      // Vẽ lại màn hình
    }
};