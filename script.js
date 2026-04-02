async function track() {
  const input = document.getElementById("trackingInput").value;
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "<p>Please enter a tracking number</p>";
    return;
  }

  result.innerHTML = `
    <div class="loader"></div>
    <p>Tracking shipment...</p>
  `;

  try {
    const res = await fetch(`/api/track?tracking=${input}`);
    const data = await res.json();

    if (data.error) {
      result.innerHTML = `<p>${data.error}</p>`;
      return;
    }

    let stepsHTML = "";

    data.steps.forEach((step, index) => {
      let className = "step";
      if (index < data.steps.length - 1) className += " done";
      if (index === data.steps.length - 1) className += " active";

      stepsHTML += `<div class="${className}">${step}</div>`;
    });

    result.innerHTML = `
      <div class="card">
        <h3>${input}</h3>
        <p>Status: ${data.status}</p>
        <p>Location: ${data.location}</p>
        <div class="timeline">${stepsHTML}</div>
      </div>
    `;
  } catch (err) {
    result.innerHTML = "<p>Error connecting to server</p>";
  }
}