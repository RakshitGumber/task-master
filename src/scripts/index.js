const changeButton = document.getElementById("change");
const colorSelector = document.getElementById("color-selector");
const settings = document.querySelector(".setting-button");
const settingBar = document.querySelector(".secondary-nav");
const usernameSet = document.querySelector(".username-set");
const createTaskBtn = document.querySelector(".create-task-button");
const createTaskPanel = document.querySelector(".create-task");
const closeCreateTask = document.querySelector(".close-addtask");
const taskOptions = document.querySelector(".task-options");
const task = document.querySelectorAll(".task");
let instance = new Storage();

changeButton.addEventListener("click", changeColor);

colorSelector.addEventListener("change", () => {
  changeButton.style.display = "block";
});

settings.addEventListener("click", () => {
  settingBar.style.display == "block"
    ? (settingBar.style.display = "none")
    : (settingBar.style.display = "block");
});

createTaskBtn.addEventListener("click", () => {
  createTaskPanel.style.display = "block";
  document.querySelector(".overlay").style.display = "block";
});

closeCreateTask.addEventListener("click", () => {
  createTaskPanel.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

task.forEach((task) => {
  task.addEventListener("mouseover", () => {
    task.children[3].style.display = "block";
  });
  task.addEventListener("mouseout", () => {
    task.children[3].style.display = "none";
  });
});
