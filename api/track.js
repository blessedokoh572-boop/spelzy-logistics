export default function handler(req, res) {
  const { tracking } = req.query;

  const shipments = {
    "SP123": {
      status: "In Transit",
      location: "Lagos, Nigeria",
      steps: [
        "Package received",
        "In transit",
        "Arrived in Lagos",
        "Out for delivery"
      ]
    },
    "SP456": {
      status: "Delivered",
      location: "Abuja, Nigeria",
      steps: [
        "Package received",
        "In transit",
        "Out for delivery",
        "Delivered"
      ]
    }
  };

  if (!tracking || !shipments[tracking]) {
    return res.status(404).json({
      error: "Tracking number not found"
    });
  }

  res.status(200).json(shipments[tracking]);
}