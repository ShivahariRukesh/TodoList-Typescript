import "./style.css";

interface Tasks {
  title: string;
  isAccomplished: boolean;
  readonly id: string;
}

const taskArray: Array<Tasks> = [];

const container = <HTMLDivElement>document.querySelector(".container");
const listsContainer = document.querySelector(
  ".todo-list-container"
) as HTMLDivElement;

const inp = document.querySelector("form > input") as HTMLFormElement;

const form = document.getElementById("form") as HTMLFormElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const objTodo: Tasks = {
    title: inp.value,
    isAccomplished: false,
    id: String(Math.random() * 1000),
  };

  taskArray.push(objTodo);
  listsContainer.innerHTML = "";
  displayInPage(taskArray);
  inp.value = "";
};

const displayInPage = (lists: Tasks[]) => {
  lists.forEach((item) => {
    createDiv(item);
  });
};

function createDiv(item: Tasks) {
  const aTaskDiv: HTMLDivElement = document.createElement("div");
  aTaskDiv.className = "list";

  const checkbox = <HTMLInputElement>document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "checkbox";
  checkbox.checked = item.isAccomplished;

  const paragraph = document.createElement("p") as HTMLParagraphElement;
  paragraph.innerText = "This is about " + item.title;

  const delButt = document.createElement("button")!;
  delButt.innerText = "Delete";
  delButt.className = "delete-button";

  aTaskDiv.append(checkbox, paragraph, delButt);
  listsContainer.append(aTaskDiv);
}
