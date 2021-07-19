import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button")

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

//Percorro todos os botões selecionados pelo querySelectorAll
checkButtons.forEach( button => {
    //Adiciono a escuta (eventListener), e de acordo com o "click" do mouse, o modal se abre
    button.addEventListener ("click", handleClick)
})

//Pegar todos os botões que existem com a classe trash
const deleteButtons = document.querySelectorAll(".actions a.trash");

//Percorro todos os botões selecionados pelo querySelectorAll que contenham a classe trash
deleteButtons.forEach( button => {
    //Adiciona a escuta (eventListener), e de acordo com o click, o modal se abre
    button.addEventListener ("click", (event) => handleClick(event, false))
})

//Criei uma função que faz uma validação que funciona da seguinte forma:
//Criei uma variável check e defini ela como true por padrão
//Ela muda para false quando o usuário clica em um botão que não seja um check, ou seja, o delete
//Criei um ifternário a partir disso, então quando o check for true (?) irá retornar as informações para check = true, e quando for false (:), irá retornar as informações para check = false
//Para mudar a cor entre os dois botões, utilizei um ifternário com classList.remove para quando ser true e classList.add para quando ser false.

function handleClick(event, check = true) {
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"

    const slug = check ? "check" : "trash"

    const roomId = document.querySelector("#room-id").dataset.id

    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} essa pergunta?`

    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open();
}