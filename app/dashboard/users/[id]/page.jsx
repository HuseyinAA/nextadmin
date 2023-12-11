import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <label>Username</label>
                <input type="text" name="username" placeholder="John Doe" />
                <label>Email</label>
                <input type="email" name="email" placeholder="John.Doe@email.com" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Helloworld" />
                <label>Phone</label>
                <input type="phone" name="phone" placeholder="073248956" />
                <label>Address</label>
                <textarea type="text" name="address" placeholder="London" />
                <label>Is Active</label>
                <select name="isActive" id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>Is Admin</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
        </div>
    );
}
export default SingleUserPage