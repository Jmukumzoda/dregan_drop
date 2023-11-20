import { postData, getData } from "./helps/helpers"
let close_aside = document.querySelector('.img')
let aside = document.querySelector('.sec1')
let empties = document.querySelectorAll('.empty')

getData("/todos")
    .then(res => reload(res.data))
    
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

const form = document.forms.task


form.onsubmit = (e) => {
    e.preventDefault()
    let data = new FormData(form)

    let todos = {
        title: data.get("title"),
        description: data.get("description")
    }
    console.log(todos.select);
    postData("/todos", todos)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                getData("/todos")
                    .then(res => reload(res.data))
                form.reset()
            }
        })
}

let temp = []
let temp_id

function reload(cart) {
    for (let item of cart) {
        let div = document.createElement('div')
        let b = document.createElement('b')
        let p = document.createElement('p')

        div.setAttribute('id', item.id)
        div.setAttribute('draggable', true)
        div.classList.add('div')

        b.innerHTML = item.title
        p.innerHTML = item.description


        empties[0].append(div)
        div.append(b, p)



        div.ondragstart = dragStart
        div.ondragend = dragEnd
        emp()
        temp.push(div)
    }
}
function emp(empty) {
    for (empty of empties) {
        empty.ondragover = dragOver
        empty.ondragenter = dragEnter
        empty.ondragleave = dragLeave
        empty.ondrop = dragDrop
    }
}


function dragStart() {
    temp_id = this.id
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    this.className = 'div'
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    event.preventDefault()
    this.className += ' hovered'
}


function dragLeave() {
    this.className = 'empty'
}

function dragDrop(params) {
    this.className = 'empty'
    temp.forEach((item, index) => {
        if (item.id === temp_id) {
            this.append(item)
        }
    })
}

