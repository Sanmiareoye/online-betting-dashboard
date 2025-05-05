export const getEventsAPI = async () => {
  const res = await fetch("http://localhost:8000/events");
  const json = await res.json();
  return json.data;
};
