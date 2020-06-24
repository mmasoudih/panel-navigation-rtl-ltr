const list = document.querySelectorAll('.navigation ul li a');
list.forEach(e =>{
    e.addEventListener('mouseenter', e => {
        console.log(e.target);
        if(e.target.children[0].children[0].classList.contains('material-icons')){
            e.target.children[0].children[0].classList.add('material-icons-outlined');
            e.target.children[0].children[0].classList.remove('material-icons');
        }
    });
})
list.forEach(e =>{
    e.addEventListener('mouseleave', e => {
        if(e.target.children[0].children[0].classList.contains('material-icons-outlined')){
            e.target.children[0].children[0].classList.add('material-icons');
            e.target.children[0].children[0].classList.remove('material-icons-outlined');
        }
    });
})
