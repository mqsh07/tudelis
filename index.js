const elList = selectElem(".list")
const elTemplate = selectElem(".template").content
const elForm = selectElem(".form")
const elFormInput = selectElem(".form__input", elForm)

let todosArr = []

function renderTodos(arr, list){
    elList.innerHTML = null
    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        selectElem(".list__item-content", cloneTemplate).textContent = item.content

        elList.appendChild(cloneTemplate)
    })
}

renderTodos(todosArr, elList)

elForm.addEventListener("submit", e =>{
    e.preventDefault()

    let inputValue = elFormInput.value.trim()

    todosArr.push({
        id: todosArr.length,
        content: inputValue,
        isCompleted: false
    })

    renderTodos(todosArr,)

    elFormInput.value = null
    elFormInput.focus()    
})


