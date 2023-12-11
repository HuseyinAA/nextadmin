import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search Products"/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add Product</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} />
                                Kia Rio Bonnet
                            </div>
                        </td>
                        <td>Kia Rio/Sc</td>
                        <td>£10,000.00</td>
                        <td>13.01.2022</td>
                        <td>KR864306-H</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <Link href="">
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}
export default ProductsPage