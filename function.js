let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

time = new Date();

hrs.innerText = (time.getHours()<10?"0":"")+time.getHours();
min.innerText = (time.getMinutes()<10?"0":"")+time.getMinutes();
sec.innerText = (time.getSeconds()<10?"0":"")+time.getSeconds();


setInterval(() => {
  time = new Date();

  hrs.innerText = (time.getHours()<10?"0":"")+time.getHours();
  min.innerText = (time.getMinutes()<10?"0":"")+time.getMinutes();
  sec.innerText = (time.getSeconds()<10?"0":"")+time.getSeconds();
}, 1000);

