import { imprimir_todos } from "./cargar-los-todos.js";

imprimir_todos();

function puente (){
    let mensaje = document.querySelector(".texto").value;
    nueva_tarea(mensaje);

}

function nueva_tarea (mensaje){
    data_todo_list.push(
        {
            id : "4",
            mensaje : mensaje,
            estado: true
        }
    );

    document.querySelector(".todo_list").innerHTML = "";
    imprimir_todos();

    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".texto").value = " ";
}

document.querySelector(".btn-tarea").addEventListener("click",puente);