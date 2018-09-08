import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className={css.hello}>Beau has worked on many projects</p>
      <p className={css.desc}>His favorites include the mountain projects and the coding projects</p>
    </Layout>
)