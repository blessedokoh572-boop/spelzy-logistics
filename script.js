function trackPackage() {
  const input = document.getElementById("trackingInput").value;

  fetch(`https://your-backend-url/track/${input}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <p>Status: ${data.status}</p>
        <p>Location: ${data.location}</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerHTML = "Tracking not found";
    });
}