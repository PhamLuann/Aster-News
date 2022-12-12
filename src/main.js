const menu = document.getElementById('menu')
const menu_btn = document.getElementById('menu_btn')
const small_logo = document.getElementById('small-logo')
const large_logo = document.getElementById('large')
const left_side = document.getElementById('left-side')
document.addEventListener('click', (e)=>{
    if (menu_btn.contains(e.target)){
        menu.classList.toggle('hidden');
        menu.classList.toggle('unhidden');
        small_logo.classList.toggle('hidden')
        large_logo.classList.add('pt-4')
        left_side.classList.add('layer')
    }else {
        // Click Outside from Toggle top menu icon
        if (menu.classList.contains('unhidden')) {
            menu.classList.add('hidden')
            menu.classList.remove('unhidden')
            small_logo.classList.remove('hidden')
            large_logo.classList.remove('pt-4')
            left_side.classList.remove('layer')
        }
    }
})
