const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    const showImg = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.classList.add('animated', 'fadeIn')
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        })
    };

    const hideImg = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.classList.remove('animated', 'fadeIn')

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        })
    };

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize