// Dummy data simulation (you can connect APIs here)
document.addEventListener("DOMContentLoaded", () => {
  updateElectricityStatus();
  updateWaterStatus();
});

function updateElectricityStatus() {
  const status = "Power Supply: ✔️ Stable (24x7), Voltage: 220V";
  document.getElementById("electricity-status").innerText = status;
}

function updateWaterStatus() {
  const status = "Water Supply: ✔️ On (Morning 6-9 AM & Evening 5-8 PM)";
  document.getElementById("water-status").innerText = status;
}

function openMarketplace() {
  alert("Marketplace module coming soon!");
}

function openWastePlatform() {
  alert("Waste management portal loading...");
}
