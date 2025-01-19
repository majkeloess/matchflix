export async function updateRecommendation(id: string, isAccepted: boolean) {
  if (isAccepted) {
    console.log(`Recommendation accepted: ${id}`);
  } else {
    console.log(`Recommendation rejected: ${id}`);
  }
}
