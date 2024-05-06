import { useEffect, useRef, useState } from "react";
import Editor from "../../Components/Editor";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MenuList, Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useDebounce } from "../../Hooks";
import { searchProduct } from "../../Services/API/Products";
import { addBreed } from "../../Services/API/Breeds";

const cx = classNames.bind(styles);

function AddBreed() {
  const contentRef = useRef();

  const [recommends, setRecommends] = useState([]);

  const [breedName, setBreedName] = useState("");
  const [appearance, setAppearance] = useState("");
  const [behavior, setBehavior] = useState("");
  const [issue, setIssue] = useState("");

  const [thumbnail, setThumbnail] = useState({});

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const debounceValue = useDebounce(searchValue, 600);

  const handleSubmit = () => {
    const DOMContent = contentRef.current.innerHTML;
    const idProducts = recommends.map((product) => product._id);

    addBreed({
      breed_name: breedName,
      appearance,
      behavior,
      htmlDomDescription: DOMContent,
      common_health_issues: issue,
      diet: idProducts,
      description: "No Description",
    })
      .then((res) => {
        toast.success("Thêm động vật thành công");
        setAppearance("");
        setBreedName("");
        setBehavior("");
        setIssue("");
        setThumbnail({});
        contentRef.current.innerHTML = "Edit Here !";
      })
      .catch((err) => {
        console.log(err);
        toast.error("Thêm động vật không thành công");
      });
  };

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      const result = await searchProduct({ value: debounceValue });
      setSearchResult(result.docs);
    };
    fetchApi();
  }, [debounceValue]);

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="form-validation">
              <div className="form-valide">
                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                  >
                    Breed Name <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      value={breedName}
                      onChange={(e) => {
                        setBreedName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="val-username"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-lg-4 col-form-label" htmlFor="val-desc">
                    Appearance <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <textarea
                      value={appearance}
                      onChange={(e) => {
                        setAppearance(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="val-desc"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                  >
                    Behavior <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <textarea
                      value={behavior}
                      onChange={(e) => setBehavior(e.target.value)}
                      type="text"
                      className="form-control"
                      id="val-username"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                  >
                    Health Issues <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <textarea
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      type="text"
                      className="form-control"
                      id="val-username"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                  >
                    Recommended Products <span className="text-danger">*</span>
                  </label>
                  <div style={{ position: "relative" }} className="col-lg-6">
                    <div className={cx("recommend-list")}>
                      {recommends.map((item, index) => {
                        return (
                          <div key={index} className={cx("recommend-item")}>
                            <p>{item.name}</p>
                            <span
                              onClick={() => {
                                setRecommends((prev) => {
                                  const filtered = prev.filter(
                                    (rcm) => rcm._id !== item._id
                                  );
                                  return filtered;
                                });
                              }}
                              className={cx("delete-btn")}
                            >
                              <FontAwesomeIcon icon={faXmark} />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <input
                      placeholder="Search Product"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      type="text"
                      className="form-control"
                      id="val-username"
                    />

                    <Paper
                      hidden={searchResult.length === 0}
                      className={cx("menu")}
                    >
                      <MenuList>
                        {searchResult.map((item, index) => {
                          return (
                            <MenuItem
                              key={index}
                              onClick={() => {
                                setRecommends((prev) => [
                                  ...prev,
                                  { name: item.name, _id: item._id },
                                ]);
                                setSearchResult([]);
                                setSearchValue("");
                              }}
                            >
                              <p className={cx("search-item")}>{item.name}</p>
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </Paper>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-lg-4 col-form-label" htmlFor="val-desc">
                    Thumbnail <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => {
                        if (e.target.files.length > 0) {
                          const file = e.target.files[0];
                          const previewURL = URL.createObjectURL(file);
                          file.preview = previewURL;
                          setThumbnail(file);
                        }
                      }}
                      className="form-control"
                      id="val-desc"
                    />
                    {thumbnail && <img src={thumbnail.preview} alt=""></img>}
                  </div>
                </div>

                <Editor contentRef={contentRef} />

                <div className="form-group row">
                  <div className="col-lg-8 ml-auto">
                    <Button onClick={handleSubmit} variant="contained">
                      Add Breed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddBreed;
