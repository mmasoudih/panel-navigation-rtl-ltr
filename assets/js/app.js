const list = document.querySelectorAll('.navigation ul li a');
const toggleBtn = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const navigationlinksTitle = document.querySelectorAll('.text');
const icons = document.querySelectorAll('.icon');
const navigationTitle = document.querySelector('.navigation-title');
const infoSection = document.querySelector('.info');
const buttonHold = document.querySelector('.button-hold');
const iSearch = document.querySelector('.isearch');
const searchForm = document.querySelector('.navigation-header-search-form');

list.forEach(e => {
    e.addEventListener('mouseenter', e => {
        console.log(e.target);
        if (e.target.children[0].children[0].classList.contains('material-icons')) {
            e.target.children[0].children[0].classList.add('material-icons-outlined');
            e.target.children[0].children[0].classList.remove('material-icons');
        }
    });
})
list.forEach(e => {
    e.addEventListener('mouseleave', e => {
        if (e.target.children[0].children[0].classList.contains('material-icons-outlined')) {
            e.target.children[0].children[0].classList.add('material-icons');
            e.target.children[0].children[0].classList.remove('material-icons-outlined');
        }
    });
})

toggleBtn.addEventListener('click', e => {
    if (navigation.offsetWidth === 320) {
        hideMenu();
    } else {
        showMenu();
    }
})

function hideMenu() {
    navigation.style.width = '100px';
    navigationTitle.style.display = 'none';
    infoSection.style.display = 'none';
    buttonHold.style.display = 'none';
    searchForm.style.width = '0';
    searchForm.style.padding = '0 25px';
    navigationlinksTitle.forEach(e => {
        e.style.display = 'none';
    })

}

function showMenu() {
    navigation.style.width = '320px';
    setTimeout(() => {
        navigationlinksTitle.forEach(e => {
            e.style.display = 'inline-block';
        })
        navigationTitle.style.display = 'block';
        infoSection.style.display = 'block';
        buttonHold.style.display = 'block';
    }, 400);
    searchForm.style.width = '100%';
    searchForm.style.padding = '0 28px';
}
iSearch.addEventListener('click', e => {
    showMenu();
});