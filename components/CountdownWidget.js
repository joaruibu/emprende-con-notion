import { useEffect, useState } from "react";

export default function CountdownWidget() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <iframe
      src="https://indify.co/widgets/live/countdown/wtZ2rVBLBpBDyeEiKHxV"
      style={{ border: "none", width: "100%", height: "300px" }}
      allowFullScreen
    />
  );
}
