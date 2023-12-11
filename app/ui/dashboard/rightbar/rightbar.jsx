import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import styles from './rightbar.module.css'
import Image from "next/image";

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <dir className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt='' fill className={styles.bg} />
                </dir>
                <div className={styles.text}>
                    <span className={styles.notification}>
                        🔥 Available Now
                    </span>
                    <h3 className={styles.title}>
                        How to use the new Version of Admin Dashboard?
                    </h3>
                    <span className={styles.subtitle}>
                        Takes 4 minutes to learn
                    </span>
                    <p className={styles.desc}>
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>
                        🚀 Comming Soon
                    </span>
                    <h3 className={styles.title}>
                        New Server Actions are available, partial pre-rendering is coming up!
                    </h3>
                    <span className={styles.subtitle}>
                        📈 Boost your productivity
                    </span>
                    <p className={styles.desc}>
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
}
export default RightBar