import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SellerList from "../../Components/SellerList";
import { useEffect, useState } from "react";
import { getProducts } from "../../Services/API/Products";
import Loader from "../../Components/Loader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const cx = classNames.bind(styles);

function Home() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getProducts({ page: page, perPage: 21 })
      .then((res) => {
        setLoading(false);
        setProducts(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
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
      >
        <Stack
          sx={{
            mt: 2,
          }}
          spacing={2}
        >
          <Pagination onChange={handleChange} count={10} color="primary" />
        </Stack>
      </div>
    </div>
  );
}
export default Home;
