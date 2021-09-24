const { io } = require("socket.io-client");


setInterval(() => {
  console.log(Date.now())
  let socket = io('https://whispering-chamber-09886.herokuapp.com/');
  socket.emit("setUsername", 'ibaepiuahziugeroakugeruykgakfuybvqouylrvoautevfkaueyrgfuyeogrbfkhevroyguaeoufyvabeouuyfgqoegvfiuetrgy9823yibaepiuahziugeroakugeruykgakfuybvqouylrvoautevfkaueyrgfuyeogrbfkhevroyguaeoufyvabeouuyfgqoegvfiuetrgy9823yibaepiuahziugeroakugeruykgakfuybvqouylrvoautevfkaueyrgfuyeogrbfkhevroyguaeoufyvabeouuyfgqoegvfiuetrgy9823yibaepiuahziugeroakugeruykgakfuybvqouylrvoautevfkaueyrgfuyeogrbfkhevroyguaeoufyvabeouuyfgqoegvfiuetrgy9823y')
  socket.emit("message",  Date.now());
}, 100);

