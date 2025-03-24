const heroesData = [
  {
    "name": "Slark",
    "role": "carry",
    "lane": "Hard",
    "build": ["Echo Sabre", "Diffusal Blade", "Silver Edge"],
    "tips": [
      "Используй Ultimate (Shadow Dance) для доджа спамов",
      "Dark Pact снимает дебаффы"
    ]
  },
  {
    "name": "Meepo",
    "role": "carry", 
    "lane": "Mid",
    "build": ["Dragon Lance", "Ethereal Blade", "Scythe of Vyse"],
    "tips": [
      "Контроль клонов через табуляцию",
      "Используй Poof для фарма"
    ]
  }
];

function renderHeroes() {
  const container = document.getElementById('heroes-container');
  
  heroesData.forEach(hero => {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.innerHTML = `
      <h3>${hero.name}</h3>
      <p>Роль: ${hero.role}</p>
      <div class="build">
        <strong>Билд:</strong>
        <ul>${hero.build.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="tips">
        <strong>Советы:</strong>
        <ul>${hero.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderHeroes);