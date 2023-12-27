import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__avatar">
        <img
          src="https://avatars.githubusercontent.com/u/85379586?v=4"
          alt="avatar"
        />
      </div>
      <div className="home-page__info">
        <div className="home-page__field">
          <span className="home-page__title">Wilhen Ferney Gutiérrez Pabón</span>
        </div>
        <div className="home-page__field">
          <span className="home-page__text">Software Developer</span>
        </div>
        <div className="home-page__contact">
            <span className="home-page__contact__text">+57 305 929 9881</span>
            <div className="home-page__field__separator"/>
            <a href="mailto:w.gutierrez1206@gmail.com" className="home-page__contact__text">w.gutierrez1206@gmail.com</a>
            <div className="home-page__field__separator"/>
            <a href="https://www.linkedin.com/in/wilhen-ferney-gutierrez-pabon/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
