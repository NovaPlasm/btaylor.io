import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className={css.hello}>Beau has experience doing things</p>
      <p className={css.desc}>Such as climbing mountains and writing code that works</p>
    </Layout>
)