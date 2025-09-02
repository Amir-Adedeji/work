
// Tab behavior for Ride / Drive
const rideTab = document.getElementById('tab-ride');
const driveTab = document.getElementById('tab-drive');
const ridePanel = document.getElementById('panel-ride');
const drivePanel = document.getElementById('panel-drive');

function activate(tab){
  const isRide = tab === 'ride';
  rideTab.classList.toggle('active', isRide);
  driveTab.classList.toggle('active', !isRide);
  rideTab.setAttribute('aria-selected', isRide);
  driveTab.setAttribute('aria-selected', !isRide);
  ridePanel.hidden = !isRide;
  drivePanel.hidden = isRide;
}

rideTab.addEventListener('click', () => activate('ride'));
driveTab.addEventListener('click', () => activate('drive'));

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.style.display === 'block';
  mobileMenu.style.display = open ? 'none' : 'block';
  menuBtn.setAttribute('aria-expanded', String(!open));
});
