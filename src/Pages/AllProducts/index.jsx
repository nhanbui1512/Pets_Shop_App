import { useContext, useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { CollectionContext } from "../../Layouts/CollectionLayout";
import { Pagination, Stack } from "@mui/material";
import Loader from "../../Components/Loader";
import { getProducts } from "../../Services/API/Products";

function AllProducts() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const collectionContext = useContext(CollectionContext);
  const [loading, setLoading] = useState(true);
  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);

    getProducts({ page: page, perPage: 24 })
      .then((res) => {
        setProducts(res.data);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [page]);

  // filter price range

  var filteredProducts = [];
  if (collectionContext) {
    function filterPrice(priceRange, products) {
      if (priceRange.length === 0) return products;
      const filtered = [];
      for (let product of products) {
        for (let range of priceRange) {
          if (
            product.options?.[0]?.price >= range.from &&
            product.options?.[0]?.price <= range.to
          ) {
            filtered.push(product);
            break;
          }
        }
      }
      return filtered;
    }

    const priceRange = collectionContext.filterPrice;
    filteredProducts = filterPrice(priceRange, products);
  }
  return (
    <div>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
      <ListProduct products={filteredProducts} />

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
          <Pagination
            onChange={handleChange}
            count={totalPage}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default AllProducts;
