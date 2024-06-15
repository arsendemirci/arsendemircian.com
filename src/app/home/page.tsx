import Image from 'next/image';
import styles from './page.module.scss';
import { UnderConstruction } from '@/components';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <h1>About Me</h1>
        <div>
          lorem Ipsum Dolor Sit Amet Lorem Ipsum sit amet dolor sit peto fema
          setum pedro
        </div>
        <button>Download Resume</button>
      </div>
      <div className={styles.profile}>
        <ul>
          <li><span>Residence</span><span>Armenia</span></li>
          <li><span>Address</span><span>Yerevan, Armenia</span></li>
          <li><span>e-mail</span><span>demirci.arsen@gmail.com</span></li>
          <li><span>Phone</span><span>+90 554 253 03 42</span></li>
          <li><span>Freelance</span><span>Available</span></li>
        </ul>
      </div>
    </div>
  );
}
