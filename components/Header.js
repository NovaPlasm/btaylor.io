import Link from 'next/link'
import css from "../styles.scss"

const Header = () => (
    <div className={css.headerGrid}>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <span></span>
        <Link href="/">
          <a className={css.buttonStyle}>Home</a>
        </Link>
        <Link href="/skills">
          <a className={css.buttonStyle}>Skills</a>
        </Link>
        <Link href="/projects">
          <a className={css.buttonStyle}>Projects</a>
        </Link>
        <span></span>
        <span></span>
        <Link href="/education">
          <a className={css.buttonStyle}>Education</a>
        </Link>
        <Link href="/experience">
          <a className={css.buttonStyle}>Experience</a>
        </Link>
        <Link href="/contact">
          <a className={css.buttonStyle}>Contact Me</a>
        </Link>
        <span></span>
    </div>
)

export default Header