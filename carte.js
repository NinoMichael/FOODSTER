'use strict';

const myMap = L.map('carte').setView([-18.919362, 47.527998], 60);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
  {attribution: '&copy; <a href= "https://www.openstreetmap.org/copypright">OpenStreetMap</a> contributors'}).addTo(myMap);

const marker = L.marker([-18.919362, 47.527998]).addTo(myMap)
  .bindPopup('Fast-Food FOODSTER')
  .openPopup();


