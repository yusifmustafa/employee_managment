import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItemButton,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider.jsx";

const UpdateEmployee = () => {
  const context = useContext(EmpManagmentContext);
  const {
    openModal,
    handleClose,
    handleOnChangeAddEmployee,
    employee,
    allCategories,
    getAllCategories,
    handleOnChangeFile,
    allRoles,
    getAllRoles,
    updateEmployee,
  } = context;

  useEffect(() => {
    getAllCategories();
    getAllRoles();
  }, []);

  return (
    <div>
      <Dialog fullScreen open={openModal} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Update User
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <TextField
              name="emp_name"
              label="Name"
              type="text"
              fullWidth
              variant="filled"
              onChange={(e) => {
                handleOnChangeAddEmployee({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              value={employee.emp_name ? employee.emp_name : ""}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <TextField
              name="emp_email"
              label="Email"
              type="email"
              fullWidth
              variant="filled"
              onChange={(e) => {
                handleOnChangeAddEmployee({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              value={employee.emp_email ? employee.emp_email : ""}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <TextField
              name="emp_salary"
              label="Salary"
              type="text"
              fullWidth
              variant="filled"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                handleOnChangeAddEmployee({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              value={employee.emp_salary ? employee.emp_salary : ""}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <TextField
              name="emp_address"
              label="Address"
              type="text"
              fullWidth
              variant="filled"
              onChange={(e) => {
                handleOnChangeAddEmployee({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              value={employee.emp_address ? employee.emp_address : ""}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <TextField
              label="Password"
              name="emp_password"
              type="password"
              fullWidth
              variant="filled"
              onChange={(e) => {
                handleOnChangeAddEmployee({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              value={employee.emp_password ? employee.emp_password : ""}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                name="emp_categoryId"
                onChange={(e) => {
                  handleOnChangeAddEmployee({
                    name: e.target.name,
                    value: e.target.value,
                  });
                }}
              >
                {allCategories.map((item) => {
                  console.log("itemmmm:", item);
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.category_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <TextField
              name="emp_image"
              type="file"
              fullWidth
              variant="filled"
              onChange={handleOnChangeFile}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                name="emp_roleId"
                onChange={(e) => {
                  handleOnChangeAddEmployee({
                    name: e.target.name,
                    value: e.target.value,
                  });
                }}
              >
                {allRoles.map((item) => {
                  console.log("itemmmm:", item);
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.role_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </ListItemButton>
        </List>
        <Box
          sx={{
            margin: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            fullWidth
            onClick={() => {
              updateEmployee(employee.id, employee);
            }}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Dialog>
    </div>
  );
};

export default UpdateEmployee;
