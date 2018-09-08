import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className={css.hello}>Hi, I'm Beau</p>
      <p className={css.desc}>I climb mountains and write code</p>
      <div className={css.hiddenScroll}>
      &nbsp;
      </div>
      <div className={css.hidden}>
        Test
      </div>
    </Layout>
)