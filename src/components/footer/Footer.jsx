import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className={styles.social}>
          <Image className={styles.icon} src="/1.png" alt='Facebook image' width={15} height={15} />
          <Image className={styles.icon} src="/2.png" alt='Instagram image' width={15} height={15} />
          <Image className={styles.icon} src="/3.png" alt='Twitter image' width={15} height={15} />
          <Image className={styles.icon} src="/4.png" alt='Youtube image' width={15} height={15} />
        </div>
    </div>
  )
}

export default Footer