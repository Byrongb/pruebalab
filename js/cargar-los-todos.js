import { item_component } from "./item_component.js";

function imprimir_todos (){
    let lista_todos = "";

    for(let i=0; i<data_todo_list.length; i++){
        let item_todo = item_component(i);

        lista_todos += item_todo;
    }

    document.querySelector(".todo_list").innerHTML = lista_todos;

    // Agregar evento "click" a los elementos con la clase "ico"
    let ico_elements = document.querySelectorAll(".ico");

    ico_elements.forEach((ico_element, indice) => {
    ico_element.addEventListener("click", () => {
        if (data_todo_list[indice].estado) {
            data_todo_list[indice].estado = false;
            console.log(data_todo_list[indice].estado);
        } else {
            data_todo_list[indice].estado = true;
            console.log(data_todo_list[indice].estado);
        }
        let tarea_element = ico_element.parentElement.querySelector(".tarea");
        tarea_element.classList.toggle("tachado");
        
        });
    });
  }

export { imprimir_todos};
     
        
