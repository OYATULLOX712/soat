const soat = document.querySelector('.h'),
      minut = document.querySelector('.m'),
      secund = document.querySelector('.s');

function clock() {
    let time = new Date()
    soat.innerHTML = time.getHours()
    minut.innerHTML = time.getMinutes()
    secund.innerHTML = time.getSeconds()
    setTimeout(() => {
        clock()
    }, 1000);

}

clock()