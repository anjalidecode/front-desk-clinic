import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Call backend API
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
      const result = await response.json();
      setData(result.message); // assuming backend returns { message: '...' }
    };

    fetchData();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Front Desk System</h1>
      <p>Message from backend:</p>
      <p className="text-green-600 font-mono">{data || "Loading..."}</p>
    </main>
  );
}
