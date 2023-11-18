// const empties = document.querySelectorAll('.empty')
// const form = document.forms.submit

// form.onsubmit = (e) => {
//     e.preventDefault()
//     let data = new FormData(form)

//     let todo = {
//         titel: data.get("title"),
//         description: data.get("description")
//     }
//     }
// let todos = [
//     {
//         id: '1sdffdfwe2543241',
//         title: 'buy milk',
//         description: 'description will be here'
//     },
//     {
//         id: '1sadasd2543241',
//         title: 'chek h w',
//         description: 'description will be here'
//     },
//     {
//         id: '1sdasdasd241',
//         title: 'todo h/t',
//         description: 'description will be here'
//     }
// ]

// let temp = []
// let temp_id


// for (let todo of todos) {
//     let div = document.createElement('div')
//     let b = document.createElement('b')
//     let p = document.createElement('p')

//     div.setAttribute('id', todo.id)
//     div.setAttribute('class', 'fill')
//     div.setAttribute('draggable', true)

//     b.innerHTML = todo.title
//     p.innerHTML = todo.description

//     div.append(b, p)
//     empties[0].append(div)

//     div.ondragstart = dragStart
//     div.ondragend = dragEnd

//     temp.push(div)
// }


// for (empty of empties) {
//     empty.ondragover = dragOver
//     empty.ondragenter = dragEnter
//     empty.ondragleave = dragLeave
//     empty.ondrop = dragDrop
// }

// function dragStart() {
//     temp_id = this.id
//     this.className += ' hold'
//     setTimeout(() => (this.className = 'invisible'), 0)
// }

// function dragEnd() {
//     this.className = 'fill'
// }

// function dragOver(event) {
//     event.preventDefault()
// }

// function dragEnter(event) {
//     event.preventDefault()
//     this.className += ' hovered'
// }


// function dragLeave() {
//     this.className = 'empty'
// }

// function dragDrop(params) {
//     this.className = 'empty'
//     temp.forEach((item, index) => {
//         if (item.id === temp_id) {
//             this.append(item)
//         }
//     })
// }
