function currentTime() {
    let date = new Date(); 
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
  
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
     }
     
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
      
    document.getElementById('hours').innerHTML = h + "<br><span>Hours</span>"; 
    document.getElementById('minutes').innerHTML = m+"<br><span>Minutes</span>" ;
    document.getElementById('seconds').innerHTML = s +"<br><span>Seconds</span>" ;
    document.getElementById('ampm').innerHTML = session ;


    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    hh.style.strokeDashoffset = 440 -  (440 * h ) / 12 ;
    mm.style.strokeDashoffset = 440 -   (440 * m ) / 60 ;
    ss.style.strokeDashoffset = 440 -  (440 * s ) / 60  ;


    let hr_dot = document.querySelector('.hr_dot');
    let mr_dot=  document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    hr_dot.style.transform = `rotate(${h *30}deg)`;
    mr_dot.style.transform = `rotate(${m *6}deg)`;
    sec_dot.style.transform = `rotate(${s *6}deg)`; 

    let t = setTimeout(function(){ currentTime() },1000);
  }
  currentTime();