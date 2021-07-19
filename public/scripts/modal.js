export default function Modal() {

    const modalWrapper = document.querySelector(".modal-wrapper");

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)



    function open() {
        //Funcionalidade que irá atribuir 'active' a classe modal-wrapper, para a modal abrir
        modalWrapper.classList.add("active")
    }

    function close() {
        //Funcionalidade que irá retirar 'active' da classe modal-wraper, para a modal fechar
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}