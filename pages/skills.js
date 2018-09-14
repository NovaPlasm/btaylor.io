import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <p className="hello">Programming Langages</p>
      <div className="hello">
        <img width="142px" src="http://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png" />
        <img width="142px" src="https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png" />
        <img width="142px" src="https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png" />
        <img width="142px" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" />
        <img width="142px" src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" />
        <img width="142px" src="https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67" />
        <img width="142px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png" />
        <img width="142px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png" />
      </div>
      <p className="desc" style={{fontSize:45, alignSelf: "end", margin: 0}}>Tools</p>
      <div className="desc">
        <img width="142px" src="https://cdn-images-1.medium.com/max/512/1*6kK9j74vyOmXYm1gN6ARhQ.png" />
        <img width="142px" src="https://nodejs.org/static/images/logo.svg" />
        <img width="142px" src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/22/formation-mongodb.png" />
        <img width="142px" src="http://maven.apache.org/images/maven-logo-white-on-black.svg" />
        <img width="142px" style={{filter: "invert(100%)"}} src="https://image.flaticon.com/icons/svg/25/25231.svg" />
        <img width="142px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/2000px-IntelliJ_IDEA_Logo.svg.png" />
        <img width="142px" src="https://cdn.worldvectorlogo.com/logos/eclipse-11.svg" />
        <img width="142px" src="https://bodex.io/sites/default/files/aem-logo-6.3.png" />
      </div>
      <span></span>
    </Layout>
)