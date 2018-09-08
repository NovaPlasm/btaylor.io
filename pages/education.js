import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className={css.hello}>Beau went to school</p>
      <p className={css.desc}>Mountain school and coding school made him who he is</p>
    </Layout>
)