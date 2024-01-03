import './Footer.scss';
import telegram from '../../images/social/telegram.svg';
import github from '../../images/social/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <p className="footer__social">Follow me:</p>
        <ul className="footer__list">
          <li>
            <a
              className="icon-link"
              href="https://t.me/Anastasia_Niii"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <img src={telegram} alt="Telegram logo." />
            </a>
          </li>
          <li>
            <a
              className="icon-link"
              href="https://github.com/Anastasiia-Nist"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <img src={github} alt="Github logo." />
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copywriter">
        &copy; Дневник дорамщика, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
export default Footer;
