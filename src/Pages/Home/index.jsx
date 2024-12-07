import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SellerList from "../../Components/SellerList";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import {
  getProducts,
  getProductsByCategory,
} from "../../Services/API/Products";
const cx = classNames.bind(styles);

function Home() {
  const [products, setProducts] = useState([]);
  const [catProducts, setCatProducts] = useState([]);
  const [dogProducts, setDogProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
    getProducts({ page: 1, perPage: 3 })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getProductsByCategory({ id: 8, perPage: 3 })
      .then((res) => {
        setCatProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getProductsByCategory({ id: 7, perPage: 3 })
      .then((res) => {
        setDogProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <div className={cx("wrapper")}>
      {loading && (
        <div className={cx("loader-container")}>
          <Loader className={cx("loading")} />
        </div>
      )}
      <SellerList headerColor="#f24f5a" items={products} hideCategory />
      <SellerList
        headerColor="#2bafa4"
        items={products}
        hideCategory
        title="Sản phẩm bán chạy"
      />
      <SellerList
        headerColor="#6170bc"
        items={dogProducts}
        hideCategory
        title="Thức ăn cho chó"
      />
      <SellerList
        headerColor="#f24f5a"
        items={catProducts}
        hideCategory
        title="Thức ăn cho mèo"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
}
export default Home;
