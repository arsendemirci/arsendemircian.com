import styles from './page.module.scss';
import Icon from '@icon';
export default function Home() {
  return (
    <div className={styles.main}>
      <h1>
        <a download={true} href="/files/Arsen-Resume.pdf">
          About Me
          <div className={styles.download}>
            <Icon width={28} height={28} icon="download" />
            <label>Download Resume</label>
          </div>
        </a>
      </h1>
      <div className={styles.mainWrapper}>
        <div className={styles.about}>
          <div>
            Software developer since 2010. Excellent front-end skills with
            Vue.js, React.js, JavaScript, and CSS. Excellent back-end skills
            with .NET technologies, C#, MVC, SQL, RESTful, Node.js. Excellent
            leading and mentoring skills with long years of technical and
            business experience.
          </div>
        </div>
        <div className={styles.profile}>
          <ul>
            <li>
              <span>Residence</span>
              <span>Armenia</span>
            </li>
            <li>
              <span>Address</span>
              <span>Yerevan, Armenia</span>
            </li>
            <li>
              <span>e-mail</span>
              <span>demirci.arsen@gmail.com</span>
            </li>
            <li>
              <span>Phone</span>
              <span>+90 554 253 03 42</span>
            </li>
            <li>
              <span>Freelance</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
