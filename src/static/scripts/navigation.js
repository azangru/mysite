const markActiveLink = () => {
  const url = new URL(window.location.href);
  const links = document.querySelectorAll('.nav-sidebar__link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === url.pathname) {
      link.classList.add('nav-sidebar__link_active');
    }
  });
};

const setListeners = () => {
  document.querySelector('.nav-sidebar__open-button').addEventListener('click', openSidebar);
  document.querySelector('.nav-sidebar__close').addEventListener('click', closeSidebar);
};

const openSidebar = () => {
  const sidebar = document.querySelector('.nav-sidebar');
  sidebar.classList.add('nav-sidebar_open');
  sidebar.classList.remove('nav-sidebar_closed');
};

const closeSidebar = () => {
  const sidebar = document.querySelector('.nav-sidebar');
  sidebar.classList.add('nav-sidebar_closed');
  sidebar.classList.remove('nav-sidebar_open');
};

markActiveLink();
setListeners();
