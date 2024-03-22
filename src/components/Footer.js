import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link

          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link

          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
