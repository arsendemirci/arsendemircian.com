'use client';

import styles from './page.module.scss';
import { SkillCard } from '@/components';
import { skills, experience } from '@/config';
import useBrowserDetect from '@/hooks/useBrowserDetect';
import { TimeLineItem } from '@/components';

const Resume = () => {
  const { browser } = useBrowserDetect();
  return (
    <div className={`${styles.main} ${browser && styles[browser]}`}>
      <div className={styles.skills}>
        <h1>Skills</h1>
        <div>
          {skills.map((item, index) => (
            <SkillCard key={index} browser={browser} {...item}></SkillCard>
          ))}
        </div>
      </div>
      <div className={styles.xp}>
        <h1>Experience</h1>
        <div className={styles.scrollbox}>
          <div className={styles.timeline}>
            {experience.map((item, index) => (
              <TimeLineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
