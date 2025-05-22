export async function fetchSaju() {
  const res = await fetch("/api/saju");

  if (!res.ok) {
    throw new Error("Failed to fetch saju data");
  }

  const data = await res.json();

  return data;
}
