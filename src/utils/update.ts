export async function updateRecommendation(id: string, isAccepted: boolean) {
  const url = `https://api.majkeloess.dev/matchflix/recommendations/${id}`;

  const POST = "POST";

  if (isAccepted) {
    fetch(`${url}/accepted?key=${process.env.VITE_API_KEY}`, {
      method: POST,
    });
    console.log(`Recommendation accepted: ${id}`);
  } else {
    fetch(`${url}/rejected?key=${process.env.VITE_API_KEY}`, {
      method: POST,
    });
    console.log(`Recommendation rejected: ${id}`);
  }
}
