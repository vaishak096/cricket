
const map = L.map('mapContainer').setView([20, 0], 2); // Set initial map view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const players = {
    player1: {
        name: 'Sachin Tendulkar',
        country: 'India',
        stats: '200 Matches, 15,000 Runs',
        achievements: 'World Cup Winner, MVP 2011',
        lat: 19.0760,  // Mumbai, India
        lon: 72.8777
    },
    player2: {
        
        lat: 17.087635,
        lon: -61.772346
    },
    player3:{
        lat:-33.865143,
        lon:151.209900
    },
    
    player4:{
        lat:28.6520 ,
        lon: 77.2315
    },
    
};


for (const playerId in players) {
    const player = players[playerId];
    const marker = L.marker([player.lat, player.lon]).addTo(map);
    marker.bindPopup(`<b>${player.name}</b><br>${player.country}`);
}


function openProfile(playerId) {
    const player = players[playerId];
    document.getElementById('playerName').innerText = player.name;
    document.getElementById('playerCountry').innerText = `Country: ${player.country}`;
    document.getElementById('playerStats').innerText = `Career Stats: ${player.stats}`;
    document.getElementById('playerAchievements').innerText = `Achievements: ${player.achievements}`;
    document.getElementById('playerProfileModal').style.display = 'flex';
}
function playHighlight(videoFile) {
    alert(`Playing highlights for ${videoFile}`);
  }


function closeProfile() {
    document.getElementById('playerProfileModal').style.display = 'none';
}

function showOnMap(playerId) {
    const player = players[playerId];
    map.setView([player.lat, player.lon], 5);
}

document.querySelectorAll('.match-video').forEach((video) => {
    video.addEventListener('mouseover', () => video.play());
    video.addEventListener('mouseout', () => video.pause());
});

document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const name = document.getElementById('name').value;
    const player = document.getElementById('player').value;
    const story = document.getElementById('story').value;

   
    const storyList = document.getElementById('storiesList');
    const newStory = document.createElement('li');
    newStory.classList.add('fade-in-story'); 
    newStory.innerHTML = `<strong>${name}</strong> on <strong>${player}</strong>: ${story}`;

   
    storyList.appendChild(newStory);
    setTimeout(() => newStory.style.opacity = '1', 0); 

   
    document.getElementById('storyForm').reset();
});


const voteMessage = document.getElementById('voteMessage');
function vote(player) {
    voteMessage.innerText = `Thank you for voting for ${player}!`;
    voteMessage.classList.add('highlight'); 
    setTimeout(() => voteMessage.classList.remove('highlight'), 2000); 
}
