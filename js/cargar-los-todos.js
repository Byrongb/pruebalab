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
  
  ico_elements.forEach((ico_element, index) => {
    ico_element.addEventListener("click", () => {
        data_todo_list[index].estado = false;
        console.log(data_todo_list[index]); 
        
      ico_element.classList.toggle("tachado");
      
    });
  });
}


export { imprimir_todos};
