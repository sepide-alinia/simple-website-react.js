import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.headerWrapper}>
      <div className="cntr">
        <div className={styles.header}>
          <ul>
            <li>
              <Link to="/"> مقالات</Link>
            </li>
            <li> 
              <Link to="/createArticle">
              ساخت مقاله
              </Link>
            </li>
            <li>
            <Link to="/about"> درباره</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
