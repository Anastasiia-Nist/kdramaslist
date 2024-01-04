import './Home.scss';
import Slideshow from '../../components/Slideshow/Slideshow';
function Home({ loggedIn }) {
  return (
    <>
      <main className="main">
        <Slideshow />
        <div className="home">
          <h1 className="home__title">
            Сохраняй дорамы, записывай чувства и впечатления — твой личный
            <span> дневник </span>в мире азиатских сериалов!
          </h1>
          <div className="home__description">
            <span>
              Добро пожаловать в наше уютное сообщество ценителей дорам! 🌟
            </span>
            <p>
              Если ты разделяешь наше восхищение красочными сюжетами и красивыми
              персонажами, то ты там, где нужно! Создай свой собственный дневник
              просмотров: сохраняй сериалы и добавляй свои впечатления от
              просмотра.
            </p>
          </div>
          <span className="home__declaration">
            <p className="home__remark">ДИСКЛЕЙМЕР!</p>
            <p>
              Сайт находится в процессе доработки, часть функций пока не
              доступна. Топ дорам взят с сайта{' '}
              <a
                href="https://doramy.club"
                target="_blank"
                rel="nofollow noreferrer"
              >
                https://doramy.club
              </a>
            </p>
          </span>
        </div>
      </main>
    </>
  );
}
export default Home;
