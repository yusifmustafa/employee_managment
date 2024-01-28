import { Box, Modal, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal] = React.useState(false);
  const context = useContext(EmpManagmentContext);
  const {
    getAllCategories,
    allCategories,
    handleOnChangeAddCategory,
    createNewCategory,
    category,
    deleteCategory,
  } = context;
  console.log(category);
  useEffect(() => {
    getAllCategories();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpenCategoryAddModal = () => {
    setOpenCategoryModal(true);
  };

  const handleCloseCategoryAddModal = () => {
    setOpenCategoryModal(false);
  };

  return (
    <div>
      <Modal
        open={openCategoryModal}
        onClose={handleCloseCategoryAddModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Category
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h5>Category:</h5>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              name="category_name"
              onChange={(e) => {
                handleOnChangeAddCategory({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              value={category.category_name ? category.category_name : ""}
              type="text"
              className="form-control"
              placeholder="Enter Category"
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn btn-success mt-4"
                onClick={() => {
                  createNewCategory(category);
                }}
              >
                Add Category
              </button>
            </Box>
          </Typography>
        </Box>
      </Modal>
      <div>
        <h3 className="text-center">Category List</h3>
        <div className="list m-4">
          <div className="mb-4">
            <button
              onClick={() => {
                handleOpenCategoryAddModal();
              }}
              className="btn btn-success"
            >
              Add Category
            </button>
          </div>
          <h4>Name</h4>
          {allCategories.map((item, index) => {
            console.log(item);
            return (
              <ul key={index} className="list-group list-group-flush">
                <li
                  style={{
                    background: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="list-group-item"
                >
                  {item.category_name}
                  <div
                    style={{
                      marginRight: "2%",
                    }}
                  >
                    <button
                      onClick={() => {
                        deleteCategory(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Category;
