import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/chart";
import styles from '../ui/dashboard/dashboard.module.css'
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {

    const cardItems = [
        {
            "title": "Total Users",
            "amount": "10.273",
            "secondaryAmount": "12%",
            "description": " more than previously",
            "path": "/dashboard/users",
        },
        {
            "title": "Today's Staff",
            "amount": "3",
            "secondaryAmount": "1",
            "description": " is on holiday",
            "path": "/dashboard/teams",
        },
        {
            "title": "Total Sales",
            "amount": "£6500",
            "secondaryAmount": "500",
            "description": " away from daily goal",
            "path": "/dashboard/sales",
        }
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {cardItems.map((item) => (
                        <Card item={item}/>
                    ))}
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <RightBar />
            </div>
        </div>
    );
}

export default Dashboard 