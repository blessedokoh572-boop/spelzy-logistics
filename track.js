export default function handler(req, res) {
  if (req.method === "POST") {
    const { trackingNumber } = req.body;

    if (!trackingNumber) {
      return res.status(400).json({ message: "Tracking number required" });
    }

    // Professional-style mock data
    return res.status(200).json({
      status: "In Transit",
      location: "Lagos Distribution Center",
      estimatedDelivery: "April 5, 2026"
    });
  }

  res.status(405).json({ message: "Method not allowed" });
}