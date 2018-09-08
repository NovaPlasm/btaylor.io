import Header from './Header'
import css from "../styles.scss"

const layoutStyle = {
  margin: 20,
  marginTop: 0,
  padding: 20
}

const Layout = (props) => (
  <div className={css.grid}>
    <div style={layoutStyle}>
      <Header />
    </div>
    {props.children}
  </div>
)

export default Layout