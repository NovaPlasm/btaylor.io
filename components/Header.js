import Link from 'next/link'
import css from "../styles.scss"

const Header = () => (
    <div className="headerGrid">
        <title>Beau Taylor-Ladd's Resume</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <span></span>
        <Link href="/">
          <a className="buttonStyle">Home</a>
        </Link>
        <Link href="/skills">
          <a className="buttonStyle">Skills</a>
        </Link>
        <Link href="/projects">
          <a className="buttonStyle">Projects</a>
        </Link>
        <span></span>
        <span></span>
        <Link href="/education">
          <a className="buttonStyle">Education</a>
        </Link>
        <Link href="/experience">
          <a className="buttonStyle">Experience</a>
        </Link>
        <Link href="/contact">
          <a className="buttonStyle">Contact Me</a>
        </Link>
        <span></span>
    </div>
)

export default Header