import Container from "@/components/container";
import SpotifyContainer from "./_components/spotify-container";

const Home = () => {
  return (
    <div>
      <Container className="flex-1 flex flex-col">
        <h2>interaction with spotify api 🎵</h2>
        <div className="flex flex-1 justify-center md:py-16 rounded-3xl __hero-section">
          <div className="flex flex-1 w-full max-w-5xl justify-center items-center rounded-3xl p-2 bg-gray-300/80 backdrop-blur">
            {SpotifyContainer()}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
