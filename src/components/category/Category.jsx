import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal] = React.useState(false);

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
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <button className="btn btn-success">Add Category</button>
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
          <ul className="list-group list-group-flush">
            <li
              style={{
                background: "none",
              }}
              className="list-group-item"
            >
              IT
            </li>
            <li
              style={{
                background: "none",
              }}
              className="list-group-item"
            >
              Development
            </li>
            <li
              style={{
                background: "none",
              }}
              className="list-group-item"
            >
              Designing
            </li>
            <li
              style={{
                background: "none",
              }}
              className="list-group-item"
            >
              Managment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
