const menu = document.getElementById('menu')
const menu_btn = document.getElementById('menu_btn')
document.addEventListener('click', (e) => {
    if (menu_btn.contains(e.target)) {
      // Click to Toggle top menu icon
      menu.classList.toggle('hidden')
    } else {
      // Click Outside from Toggle top menu icon
      if (menu.classList.contains('tqd-topmenu-expanded')) {
        topMenu.classList.remove('tqd-topmenu-expanded')
        topMenu.classList.add('hidden')
      }
    }
  })