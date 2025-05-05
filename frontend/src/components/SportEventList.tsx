import SportEventCard from "./SportEventCard";
import { useEffect, useState } from "react";
import { PostProps } from "../types";
import Navbar from "./Navbar";
import { getEventsAPI } from "../api/getEventsApi";

const SportEventList = () => {
  const [data, setData] = useState<PostProps[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    getEventsAPI().then(setData);
  }, [refreshKey]);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        {error}
        {success}

        {data.length === 0 ? (
          <p className="text-emerald-500 text-center font-bold my-4">
            No events available
          </p>
        ) : (
          data.map((event) => (
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-emerald-500 transition-all hover:shadow-xl hover:translate-y-[-2px]">
              <SportEventCard
                key={event.event_id}
                {...event}
                onSuccess={(msg) => setSuccess(msg)}
                onError={(msg) => setError(msg)}
                triggerRefresh={() => setRefreshKey((prev) => prev + 1)}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SportEventList;
