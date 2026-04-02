async function trackPackage() {
  const trackingNumber = document.getElementById("trackingInput").value;

  const res = await fetch("/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ trackingNumber })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <div class="card">
      <h2>${data.status}</h2>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>ETA:</strong> ${data.estimatedDelivery}</p>
    </div>
  `;
}