import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css'
import Link from 'next/link';

const Card = ({ item }) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={item.path}>
                <MdSupervisedUserCircle size={24} className={styles.icon} />
                <div className={styles.texts}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.number}>{item.amount}</span>
                    <span className={styles.detail}>
                        <span className={styles.positive}>{item.secondaryAmount}</span>{item.description}
                    </span>
                </div>
            </Link>
        </div>
    );
}
export default Card