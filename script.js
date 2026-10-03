// Parking Slot Data Generators
const totalSlotsPerLevel = 30; // Displayed 30 slots per level as per UI grid layout

// Pattern representations matching image layout roughly
const levelGStatuses = [
  'available', 'available', 'occupied', 'reserved', 'available', 'available', 'occupied', 'available', 'available', 'occupied',
  'available', 'occupied', 'available', 'available', 'occupied', 'available', 'reserved', 'available', 'available', 'available',
  'available', 'occupied', 'available', 'occupied', 'available', 'available', 'occupied', 'available', 'occupied', 'available'
];

const levelL1Statuses = [
  'available', 'available', 'occupied', 'available', 'available', 'reserved', 'available', 'available', 'available', 'available',
  'occupied', 'available', 'available', 'available', 'occupied', 'available', 'available', 'reserved', 'available', 'available',
  'available', 'available', 'occupied', 'available', 'available', 'available', 'available', 'available', 'available', 'available'
];

const levelL2Statuses = [
  'available', 'occupied', 'available', 'available', 'available', 'available', 'occupied', 'available', 'available', 'available',
  'available', 'available', 'available', 'reserved', 'available', 'occupied', 'available', 'available', 'available', 'available',
  'occupied', 'available', 'available', 'available', 'reserved', 'occupied', 'available', 'available', 'available', 'available'
];

// Function to render slot grid dynamically
function renderSlots(containerId, statusList) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  statusList.forEach((status, index) => {
    const slotNumber = (index + 1).toString().padStart(2, '0');
    const slotDiv = document.createElement('div');
    slotDiv.className = `slot ${status}`;
    slotDiv.innerText = slotNumber;

    // Optional click alert for demo interactivity
    slotDiv.addEventListener('click', () => {
      alert(`Slot ${slotNumber} is currently ${status.toUpperCase()}`);
    });

    container.appendChild(slotDiv);
  });
}

// Update clock in real-time
function updateClock() {
  const now = new Date();
  const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
  document.getElementById('current-datetime').innerText = now.toLocaleString('en-US', options);
}

document.addEventListener('DOMContentLoaded', () => {
  renderSlots('slots-level-g', levelGStatuses);
  renderSlots('slots-level-l1', levelL1Statuses);
  renderSlots('slots-level-l2', levelL2Statuses);

  setInterval(updateClock, 1000);
});
