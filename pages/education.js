import Layout from '../components/Layout.js'
import css from "../styles.scss"

export default () => (
    <Layout>
      <div className="educationBox">
        <h3>Harvey Mudd College | Bachelor | 2021</h3>
        <p className="subtext"><em>Computer Science, Economics</em></p>
        <p className="description">Courses (In Progress):</p>
        <ul className="courseList">
          <li>Data Structures and Program Development</li>
          <li>Computer Science Practicum</li>
          <li>Discrete Math</li>
          <li>Multivariable Calculus</li>
          <li>Financial Economics</li>
        </ul>
        <p className="description">Completed:</p>
        <ul className="courseList">
          <li>Principles & Practice: Computer Science</li>
          <li>Engineering of Autonomous Vehicles</li>
          <li>Linear Algebra</li>
          <li>Differential Equations</li>
          <li>Proof-Based Calculus</li>
          <li>Probability and Statistics</li>
        </ul>
      </div>
    </Layout>
)