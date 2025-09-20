const TARGET_DATE = new Date('2025-09-30T18:00:00'); // عدل التاريخ هنا

document.getElementById('event-date').textContent = TARGET_DATE.toLocaleString('ar-EG', {
  dateStyle: 'full', timeStyle: 'short'
});

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, TARGET_DATE - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60*60*24));
  const hours = Math.floor((totalSeconds % (60*60*24)) / (60*60));
  const minutes = Math.floor((totalSeconds % (60*60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
