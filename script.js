const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');

const topics = [
  "Banana peel packaging (plastic alternative)",
  "Solar-powered smart backpack",
  "Mushroom based furniture",
  "Ocean plastic fashion brand",
  "Noise cancelling windows",
  "coffee grounds skincare",
  "Paper made from stone dust",
  "Gen Z Juice – Sip Energy, Spill Tea",
  "AI-Powered smart mirror",
  "Bio-Plastic made from Algae"
];

// Dynamically add labels
topics.forEach((topic, i) => {
  const angle = (360 / topics.length) * i;
  const label = document.createElement('div');
  label.className = 'label';
  label.style.transform = `rotate(${angle}deg) translateX(20px)`;
  label.textContent = topic.split(" – ")[0]; // Short title only
  wheel.appendChild(label);
});

let spinning = false;

spinBtn.addEventListener('click', () => {
  if (spinning) return;
  spinning = true;

  const randomDegree = Math.floor(Math.random() * 360);
  const rotations = 360 * (Math.floor(Math.random() * 3) + 3);
  const totalRotation = rotations + randomDegree;

  wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
  wheel.style.transform = `rotate(${totalRotation}deg)`;

  setTimeout(() => {
    spinning = false;
    const actualDegree = totalRotation % 360;
    const index = Math.floor((360 - actualDegree + 18) / 36) % topics.length;
  }, 4000);
});
