const modal = document.getElementById('modal')
const body = document.querySelector('body')

function openModal(){
   modal.style.display = 'flex'
   modal.classList.remove('modalClose')
   modal.classList.add('modalOpen')
   body.classList.add('bodyModal')
}

function closeModal(){
    modal.style.display = 'none'
    modal.classList.remove('modalClose')
    modal.classList.add('modalOpen')
    body.classList.remove('bodyModal')
}