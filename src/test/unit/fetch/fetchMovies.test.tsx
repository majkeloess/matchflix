import { fetchMovies } from "../../../utils/fetch";

const mockData = {
  id: "539",
  imageURL: "https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
  title: "Psycho",
  summary:
    "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
  rating: 8.4,
  genre: "Horror",
};

describe("Data fetching", () => {
  it("should fetch movies", async () => {
    const data = await fetchMovies("horror");
    expect(data[0].id).toBe(mockData.id);
  });
});
