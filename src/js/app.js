const button = document.querySelector('.btn')
const collapse = document.querySelector('.text_box')

button.addEventListener('click', (e) => {
  e.preventDefault()
  collapse.classList.toggle('open')
})
