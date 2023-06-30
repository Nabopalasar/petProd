
const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        })

        close.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener("click", (e) => {
            console.log(e.target)
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                } 
            });
    
                if (!display) {
                    document.querySelector(selector).style.display = "block";
                    document.body.style.overflow = "hidden";
                }
        }, time)
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')

    showModalByTime('.popup-consultation', 60000) // 3 мин.
}

export default modals;