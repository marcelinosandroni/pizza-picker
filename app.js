const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let pizzaName = $('#pizzaName')
let pizzaAdd = $('#pizzaAdd')
let output = $('output')
let select = $('#select')
let sortAsc = $('#sortAsc')
let sortDesc = $('#sortDesc')

let list = []

const addItem = item => {
  let pizza = pizzaName.value
  let newItem = document.createElement('p')

  list.push(pizza)

  newItem.innerHTML = pizza

  output.appendChild(newItem)

  pizzaName.value = ''
  pizzaName.placeholder = 'Escreve a proxima Pizza!'

  resetStyle()
}

const removeItem = item => {

}

const selectItem = item => {
  let max = list.length
  let choosenOne = Math.floor(Math.random() * max)

  resetStyle()
  colorizeItem(choosenOne)
}

const colorizeItem = number => {
  let item = output.children[number]

  item.style.backgroundColor = 'red'
  item.style.color = 'yellow'
}

const resetStyle = () => {
  let items = $$('p')
  console.log(items)

  items.forEach( item => {
    item.style.color = 'black'
    item.style.backgroundColor = 'white'
  } )

}

const sortItems = (option) => {
  if (option.target.id === 'sortAsc') {
    list.sort()
    console.log(list)
  } else {
    list.reverse()
    console.log(list)
  }
  refilItems()
}

const refilItems = () => {
  output.innerHTML = ''

  for ( let i = 0; i < list.length; i++ ) {
    let newItem = document.createElement('p')
    let newText = document.createTextNode(list[i])

    newItem.appendChild(newText)
    output.appendChild(newItem)
  }

}


pizzaAdd.addEventListener('click', addItem)
select.addEventListener('click', selectItem)
sortAsc.addEventListener('click', sortItems)
sortDesc.addEventListener('click', sortItems)
