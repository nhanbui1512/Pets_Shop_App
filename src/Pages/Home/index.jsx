import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SellerList from "../../Components/SellerList";
import { useEffect, useState } from "react";
import { getProducts } from "../../Services/API/Products";

const cx = classNames.bind(styles);

function Home() {
  const [page] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ page: page, perPage: 20 })
      .then((res) => {
        setProducts(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div className={cx("wrapper")}>
      <SellerList items={products} />
    </div>
  );
}
export default Home;
