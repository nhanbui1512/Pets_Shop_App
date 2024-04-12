import { useContext, useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { getProducts } from "../../Services/API/Products";
import { CollectionContext } from "../../Layouts/CollectionLayout";

function AllProducts() {
  const [page] = useState(1);
  const [products, setProducts] = useState([]);

  const collectionContext = useContext(CollectionContext);

  useEffect(() => {
    getProducts({ page: page, perPage: 21 })
      .then((res) => {
        setProducts(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <ListProduct products={filteredProducts} />
    </div>
  );
}

export default AllProducts;
