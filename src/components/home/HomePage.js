import videoHomePage from '../../assets/123.mp4'

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
