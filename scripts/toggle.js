window.onload = function () {
    const modal = document.getElementsByClassName('modal')[0];
    const moreBtn = document.getElementsByClassName('more')[0];
    const closeBtn = document.getElementsByClassName('close')[0];

    moreBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);
    
    function openModal() {
        modal.style.display = 'block';
        closeBtn.style.display = 'inline';
        moreBtn.style.display = 'none';
    }

    function closeModal() {
        modal.style.display = 'none';
        closeBtn.style.display = 'none';
        moreBtn.style.display = 'inline';
    }
}