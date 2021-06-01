function toggle(){
    const a = document.getElementById("item");
    a.classList.toggle('day');
    a.classList.toggle('night')
    const b = document.getElementById('button-id');
    b.classList.toggle('button-day');
    b.classList.toggle('button-night');
}


