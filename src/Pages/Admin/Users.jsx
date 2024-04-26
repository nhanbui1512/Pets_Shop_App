import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment, useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { getUsers } from "../../Services/API/Users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function UserList() {
  const [open, setOpen] = useState("");
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  const handleClose = () => {
    setOpen("");
  };

  const handleDelete = (id) => {
    console.log(open);
    // deleteUser(open)
    //   .then((res) => {
    //     setOpen("");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getUsers({ page, perPage: 10 })
      .then((res) => {
        setTotalPage(res.totalPages);
        setUsers(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Select</TableCell>

              <TableCell>Email</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <span>
                    <input type="checkbox" />
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>
                <TableCell align="right">{user.firstName}</TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell sx={{ cursor: "pointer" }} align="right">
                  <button
                    onClick={() => {
                      setOpen(user._id);
                    }}
                    style={{ padding: 8 }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </TableCell>
                <Fragment>
                  <Dialog
                    open={open !== ""}
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
    </>
  );
}
