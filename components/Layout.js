import Header from './Header'
import css from "../styles.scss"

const layoutStyle = {
  paddingTop: 20
}

const Layout = (props) => (
  <div className="grid">
    <div style={layoutStyle}>
      <Header />
    </div>
    {props.children}
  </div>
)

export default Layout