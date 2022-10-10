const unreadNotifs = document.querySelectorAll('.unread');
const badgeCount = document.getElementById('badge-count');

badgeCount.innerText = unreadNotifs.length;

function markRead(){
    unreadNotifs.forEach(unread =>{
        unread.classList.remove('unread');
        const newUnreadNotifs = document.querySelectorAll('.unread');
        badgeCount.innerText = newUnreadNotifs.length;
    })
}


