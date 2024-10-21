export async function updateRecommendation(id: string, isAccepted: boolean) {
  const url = `https://api.example/recommendations/${id}`;
  const PUT = "PUT";

  // "Assume you have a backend", if it is real world scenario try/catch also
  if (isAccepted) {
    // fetch(`${url}/accept`, { method: PUT });
    console.log(`Recommendation accepted: ${id}`);
  } else {
    //fetch(`${url}/reject`, { method: PUT });
    console.log(`Recommendation rejected: ${id}`);
  }
}
