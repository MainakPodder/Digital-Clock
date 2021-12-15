const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const ampm = document.getElementById('ampm');

const clock = setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    var period = 'AM';
    // If 12 noon
    if(hr == 12){
        period = 'PM';
    }
    // If 12 night 
    if(hr == 0){
        period = 'AM';
        hr = 12;
    }
    if(hr > 12){
        hr = hr - 12;
        period = 'PM';
    }
    
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    ampm.textContent = period;
},1000);
                                 