let addtask = document.getElementById("addtask");
const filters = document.querySelectorAll(".filters button");
let todos = JSON.parse(localStorage.getItem("todo-list"));
let taskbox = document.getElementById("tableBody");


filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("all").classList.remove("active");
        btn.classList.remove("active");
        showtodos(btn.id)
    });
});

function showtodos(filter){
    let table = "";
    if (todos) { 
        todos.forEach((todo,id) => {
            let iscompleted = todo.status == "completed" ? "checked" : "";  
            if (filter == todo.status || filter == "all") {           
                table +=`
                    <tr>
                    <th scope="row">${id+1}</th>
                    <td class="${iscompleted}">${todo.name}</td>
                    <td><div class="mb-3 form-check">
                    <label class="form-check-label" for="${id}" ></label>
                    <input onclick="updatestatus(this)" id="${id}" ${iscompleted} type="checkbox" class="form-check-input" name="check" >
                    </div></td>
                    <td><button onclick="deletetask(${id})" class="btn btn-sm btn-primary">Delete</button></td>
                    </tr>`;
            }
    });
    taskbox.innerHTML = table || `<span>You don't have any task here</span>`;
}
}
showtodos("all");

function updatestatus(selectedtask) {
    let taskname = selectedtask.parentElement.lastElementChild;
    if (selectedtask.checked) {
        taskname.classList.add("checked");
        todos[selectedtask.id].status = "completed";
    }else{
        taskname.classList.remove("checked");
        todos[selectedtask.id].status = "pending";
    }
    localStorage.setItem("todo-list",JSON.stringify(todos));
    
}

function deletetask(deleteid, filter) {
    // isEditTask = false;
    todos.splice(deleteid, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showtodos(filter);
    showtodos('all');

}

addtask.addEventListener("click", () =>{
    let usertask =  document.getElementById("InputTitle").value;
    if (!todos) {
        todos=[]
    }
    usertask.value = "";
    let taskinfo = {name: usertask, status: "pending"}
    todos.push(taskinfo);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showtodos();
    // let title = usertask;
    // console.log(title);
});












// addtask = document.querySelector(".btn btn-primary");
// let inputtitle = document.getElementById("InputTitle");

// console.log(inputtitle.value);

// function additeam(){
//     let title = inputtitle.value;
//     console.log(title);
// }
// addtask.addEventListener("click", additeam);
    
// //     addtask.addEventListener("click", () => {
// //     let title = inputtitle.value;
// //     console.log(title);
// // }); 







// function getAndUpdate() {
//     console.log("Updating List...");
//     title = document.getElementById("InputTitle").value.trim();
//     description = document.getElementById("InputDescription").value.trim();
  
//   if (title=="" || description=="") {
//     alert('enter valid entry')
//   }else{
  
    
//     if (localStorage.getItem("itemsJson") == null) {
//       itemJsonArray = [];
//       itemJsonArray.push([title, description]);
//       localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  
//     } else {
    
//       itemJsonArrayStr = localStorage.getItem("itemsJson");
//       itemJsonArray = JSON.parse(itemJsonArrayStr);
//       itemJsonArray.push([title, description]);
//       localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  
//     }
//     // title = "";
//     // description= "";
//     console.log(title, description);
//     document.getElementById("InputTitle").value = "";
//     document.getElementById("InputDescription").value = "";
//     update();
//   }
//   }
//   function update() {
//     if (localStorage.getItem("itemsJson") == null) {
//       itemJsonArray = [];
//       localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
//     } else {
//       itemJsonArrayStr = localStorage.getItem("itemsJson");
//       itemJsonArray = JSON.parse(itemJsonArrayStr);
//     }
//     // Populate the table
//     let taskcard = document.getElementById("tableBody") 

//     itemJsonArray.forEach((element, index) => {
//         card +=`
//         <th scope="row">${index + 1}</th>
//         <td>${element[0]}</td>
//         <td>${element[1]}</td>
//         <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
//         <td><input type="checkbox" class="form-check-input" name="checkme" value ="false"></td>
//           </tr>`;
  
//       // console.log(element[0]);
//       // console.log(element[1]);
  
//     });
//     taskcard.innerHTML = card;
  
//   }
//   addtask = document.getElementById("addtask");
//   addtask.addEventListener("click", getAndUpdate);
//   update();
//   function deleted(itemIndex) {
//     console.log("Delete", itemIndex);
//     itemJsonArrayStr = localStorage.getItem("itemsJson");
//     itemJsonArray = JSON.parse(itemJsonArrayStr);
//     // Delete itemIndex element from the array
//     itemJsonArray.splice(itemIndex, 1);
//     localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
//     update();
//   }




//   inputtitle = document.getElementsByName("InputTitle");
//   inputdescription = document.getElementsByName("InputDescription");


//   function additeam(e){
//     let title = inputtitle.value;
//     let description = inputdescription.value;
//     console.log(title,description);
//   }


