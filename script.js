function track() {
  const input = document.getElementById("trackingInput").value;
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "<p>Please enter a tracking number</p>";
    return;
  }

  // Show loading spinner
  result.innerHTML = `
    <div class="loader"></div>
    <p style="margin-top:10px;">Tracking shipment...</p>
  `;

  // Fake delay (like real API)
  setTimeout(() => {
    result.innerHTML = `
      <div class="card">
        <h3>Tracking: ${input}</h3>
        <div class="timeline">
          <div class="step done">✔ Package received</div>
          <div class="step done">✔ In transit</div>
          <div class="step active"> Arrived in Lagos</div>
          <div class="step"> Out for delivery</div>
        </div>
      </div>
    `;
  }, 2000);
}