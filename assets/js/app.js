const list = document.querySelectorAll('.navigation > ul li a');
const toggleBtn = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const navigationlinksTitle = document.querySelectorAll('.text');
const icons = document.querySelectorAll('.icon');
const navigationTitle = document.querySelector('.navigation-title');
const infoSection = document.querySelector('.info');
const buttonHold = document.querySelector('.button-hold');
const iSearch = document.querySelector('.isearch');
const searchForm = document.querySelector('.navigation-header-search-form');
const toggleProfileMenuBtn = document.getElementById('toggleProfileMenuBtn');
const userAvatarMenu = document.querySelector('.user-avatar--menu');

list.forEach(e => {
  e.addEventListener('mouseenter', e => {
      // console.log(e.target);
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
    window.localStorage.setItem('menu_staus', 'close');
  } else {
    showMenu();
    window.localStorage.setItem('menu_staus', 'open');
  }
})
window.onload = () => {
  const menuStatus = window.localStorage.getItem('menu_staus');

  if(menuStatus == 'open'){
    console.log('menu is true')
    showMenu();
  }
  if(menuStatus == 'close'){
    console.log('menu is false')

    hideMenu();
  }
}
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

toggleProfileMenuBtn.onclick = e => {
  if (!e.currentTarget.style.transform) {
    e.currentTarget.style.transform = 'rotate(90deg)';
    userAvatarMenu.classList.add('show');
    userAvatarMenu.setAttribute('style', `top: ${(e.currentTarget.getBoundingClientRect().bottom - 120)}px`);
  } else {
    e.currentTarget.style.transform = null;
    userAvatarMenu.classList.remove('show');
    // userAvatarMenu.removeAttribute('style');
    userAvatarMenu.setAttribute('style', `top: ${e.currentTarget.getBoundingClientRect().bottom - 90}px`);
  }
};