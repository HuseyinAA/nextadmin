import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";


const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <select name="cat" id="cat" required>
                    <option value="general">Choose Make</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="seat">Seat</option>
                    <option value="audi">Audi</option>
                    <option value="kia">Kia</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="mg">MG</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                </select>
                <input type="text" placeholder="Model" name="model" required />
                <input type="number" placeholder="Price" name="price" required />
                <input type="number" placeholder="Stock" name="stock" required />
                <input type="number" placeholder="Date From" name="dateFrom" required />
                <input type="number" placeholder="Date To" name="dateTo" />
                <input type="text" placeholder="Colour" name="colour" />
                <textarea name="desc" id="desc" rows="16" placeholder="Description"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddProductPage