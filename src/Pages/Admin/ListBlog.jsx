import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { getBlogs } from "../../Services/API/Blogs";

function ListBlog() {
  const handleDelete = () => {};
  const handleClose = () => {};
  useEffect(() => {
    getBlogs({ page: 1, perPage: 10 })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Short Content</TableCell>
              <TableCell align="right">Create At</TableCell>
              <TableCell align="right">Update At</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                email
              </TableCell>
              <TableCell align="right">data</TableCell>
              <TableCell align="right">data</TableCell>
              <TableCell align="right">data</TableCell>
              <TableCell sx={{ cursor: "pointer" }} align="right">
                <button
                  // onClick={() => {
                  //   setOpen(user._id);
                  // }}
                  style={{ padding: 8 }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </TableCell>
              <Fragment>
                <Dialog
                  open={false}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Do you want delete this user?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      The data will be deleted and cannot be restored.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDelete} autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </Fragment>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ListBlog;
