import {patchData } from "./helpers"
import { bucketimg } from "../main"

export function dragStart() {
    this.id = "marked"
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
    bucketimg.style.display = "flex"
}

export function dragEnd() {
    this.removeAttribute('id')
    this.className = 'fill'
    bucketimg.style.display = "none"

}

export function dragOver(event) {
    event.preventDefault()
}

export function dragEnter(event) {
    event.preventDefault()
    this.className += ' hovered'
}


export function dragLeave() {
    this.className = 'empty'
}
export function dragLeve() {
    this.className = 'img_bucket'
}
export function dragDrop() {
    let marked_div = document.getElementById('marked')
    let id = marked_div.dataset.id
    this.className = 'empty'
    this.append(marked_div)

    patchData('/tasks/' + id, {
        status: this.dataset.status
    })
        .then(res => console.log(res))
}



