import { useContext, useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { CollectionContext } from "../../Layouts/CollectionLayout";
import { Pagination, Stack } from "@mui/material";
import Loader from "../../Components/Loader";
import { useParams } from "react-router-dom";
import { categories } from "./data";

function Collection() {
  const { id } = useParams();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [products, setProducts] = useState([]);
  const collectionContext = useContext(CollectionContext);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, number) => {
    setPage(number);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setLoading(true);
    const res = categories.find((item) => item._id === id);
    setTimeout(() => {
      setProducts(res.data.docs);
      setLoading(false);
      setTotalPage(res.data.totalPages);
    }, 500);
    // eslint-disable-next-line
  }, [id]);

  // filter price range

  var filteredProducts = [];
  if (collectionContext) {
    function filterPrice(priceRange, products) {
      if (priceRange.length === 0) return products;
      const filtered = [];
      for (let product of products) {
        for (let range of priceRange) {
          if (
            product.variantOptions[0].price >= range.from &&
            product.variantOptions[0].price <= range.to
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
            page={page}
            onChange={handleChange}
            count={totalPage}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default Collection;
