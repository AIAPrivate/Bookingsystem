import './style.css'

const rooms = [
  { name: 'gold', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { name: 'jade', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Select', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Booth 1', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Booth 2', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { name: 'Booth 3', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' }
];

document.querySelector('#app').innerHTML = `
  <div class="booking-header">
    <h1>會議室預約系統</h1>
    <p class="subtitle">專業・高效・尊榮</p>
  </div>
  <div class="rooms-container">
    <h2>選擇會議室</h2>
    <div class="rooms-grid">
      ${rooms.map(room => `
        <div class="room-card gold-black" style="background-image: url('${room.img}'); background-size: cover; background-position: center;">
          <div class="room-overlay"></div>
          <div class="room-content">
            <div class="room-title">${room.name.toUpperCase()}</div>
            <button class="reserve-btn">預約</button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;
