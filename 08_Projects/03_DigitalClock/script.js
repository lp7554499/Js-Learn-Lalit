const time = document.getElementById('time')
const formatTime = document.getElementById('timeformat')

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime,1000)
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    time.innerHTML = `${hr} : ${min} : ${sec}`
}