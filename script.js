function track() {
  const input = document.getElementById("trackingInput").value;
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "<p>Please enter a tracking number</p>";
    return;
  }

  result.innerHTML = `
    <div style="margin-top:20px;">
      <h3>Tracking Number: ${input}</h3>
      <p>Status: In Transit</p>
      <p>Location: Lagos, Nigeria</p>
      <p>Estimated Delivery: 3-5 days</p>
    </div>
  `;
}