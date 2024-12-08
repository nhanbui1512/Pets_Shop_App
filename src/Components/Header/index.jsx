import { Link } from "react-router-dom";
import style from "./header.module.scss";
import classNames from "classnames/bind";
import * as React from "react";
import { useState } from "react";

import { CircularProgress, Paper } from "@mui/material";
import { useDebounce } from "../../Hooks";
import { searchProduct } from "../../Services/API/Products";
import SearchItem from "../SearchItem";

const cx = classNames.bind(style);
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchPopper, setSearchPopper] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounceValue = useDebounce(searchValue, 600);

  React.useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      setSearchPopper(false);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      try {
        const result = await searchProduct({ search: debounceValue });
        setSearchResult(result.data);
        if (result.data?.length > 0) {
          setSearchPopper(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [debounceValue]);

  return (
    <header className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("header-content_logo")}>
          <Link to={"/"}>
            <img src="/images/logo.webp" alt="logo" />
          </Link>
        </div>
        <div className={cx(["header-content_search", "search-container"])}>
          <div className="relative w-full h-full">
            <input
              onBlur={() => setSearchPopper(false)}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              className={cx("input-search_header")}
              id={cx("search-box")}
              type="text"
              placeholder="Search for products, brands and more"
            />

            {loading && (
              <div className="absolute right-3 top-3">
                <CircularProgress size={20} />
              </div>
            )}
          </div>

          <Paper hidden={!searchPopper} className={cx("menu")}>
            <div className="flex flex-col px-2 gap-3">
              {searchResult.map((product, index) => {
                const productName = product.name;
                const image = product.product_images?.[0]?.fileUrl;
                const price = product.options?.[0]?.price;
                return (
                  <SearchItem
                    key={index}
                    title={productName}
                    image={image}
                    price={price}
                    productId={product.id}
                  />
                );
              })}
            </div>
          </Paper>

          <button id={cx("search-button")}>Search</button>
        </div>
        <div className={cx("header-content_auth")}>
          <div className={cx("header-content_auth_login")}>
            <Link to={"/login"}>Login</Link>
          </div>
          <span className={cx("divider")}></span>
          <div className={cx("header-content_auth_signup")}>
            <Link to={"/signup"}>Signup</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
