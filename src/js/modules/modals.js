
const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
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

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if ( !btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) ) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    openByScroll('.fixed-gift');

    showModalByTime('.popup-consultation', 60000) // 3 мин.
}

export default modals;