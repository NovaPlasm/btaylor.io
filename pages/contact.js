import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className={css.hello}>Do you want to contact Beau?</p>
      <p className={css.desc}>You can usually find him climbing a mountain or writing some code</p>
    </Layout>
)