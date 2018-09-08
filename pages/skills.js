import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className={css.hello}>Beau has many skills</p>
      <p className={css.desc}>Such as climbing mountains and writing code</p>
    </Layout>
)