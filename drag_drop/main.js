import { getData, deleteData } from "./module/helpers"
import { dragDrop, dragEnter, dragLeave, dragOver } from "./module/dragNdrop"
import { reload_todo } from "./module/ui"

let close_aside = document.querySelector('.img')
let aside = document.querySelector('.sec1')
export let bucket = document.querySelector('.bucket')
export let bucketimg = document.querySelector('.bucket img')
export const emptie = document.querySelectorAll('.empty')
let inp = document.querySelector('.inp')

inp.onkeyup = () => {
    let fill = document.querySelectorAll('.fill')
    getData('/tasks')
        .then(res => {
            console.log(res);
        })
}



bucket.ondragover = (e) => {
    e.preventDefault()
}



bucket.ondrop = () => {
    let div = document.querySelector('#marked')
    let task_id = div.dataset.id
    console.log(task_id);
    deleteData('/tasks/' + task_id)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                alert('delete success' + `  ID: ${task_id}`)
            }
        })
    div.remove()
};

close_aside.onclick = () => {
    close_aside.setAttribute = "/img/Frame.png"
    aside.classList.toggle('click2')
    aside.style.transition = "1s cubic-bezier(0.445, 0.05, 0.55, 0.95)"
    setTimeout(() => {
        close_aside.classList.toggle('click')
    }, 600);

}
let btn = document.querySelector('.btn')
let exet2 = document.querySelector('.modal_img')
let modal = document.querySelector('.modal')
btn.onclick = () => {
    modal.classList.add('show_modal', 'fade')
}
exet2.onclick = () => {
    modal.classList.remove('show_modal', 'fade')
}


getData('/tasks')
    .then(res => reload_todo(res.data, emptie))


for (let empty of emptie) {
    empty.ondragover = dragOver
    empty.ondragenter = dragEnter
    empty.ondragleave = dragLeave
    empty.ondrop = dragDrop
}

