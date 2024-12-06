import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SellerList from "../../Components/SellerList";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import data from "./data";
import { getProducts } from "../../Services/API/Products";
const cx = classNames.bind(styles);

function Home() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);

  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);
    setLoading(false);
    getProducts({ page: page, perPage: 6 })
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setProducts(data.docs);
  }, [page]);

  return (
    <div className={cx("wrapper")}>
      {loading && (
        <div className={cx("loader-container")}>
          <Loader className={cx("loading")} />
        </div>
      )}
      <SellerList headerColor="#f24f5a" items={products} />
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
