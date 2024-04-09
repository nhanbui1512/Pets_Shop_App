import { useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { getProducts } from "../../Services/API/Products";

function AllProducts() {
  const [page] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ page: page, perPage: 10 })
      .then((res) => {
        setProducts(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      <ListProduct products={products} />
    </div>
  );
}

export default AllProducts;
