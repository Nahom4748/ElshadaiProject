const employeeService = require("../services/employee.service");

// Import Multer configuration
const multer = require("../config/multer.config");

const createEmployee = async (req, res) => {
  try {
    const employeeExists = await employeeService.checkIfEmployeeExists(
      req.body.employee_email
    );

    if (employeeExists) {
      return res.status(400).json({
        error:
          "This email address is already associated with another employee!",
      });
    }

    const employeeImage = req.file ? `/uploads/${req.file.filename}` : null;

    const row1 = [
      req.body.employee_email,
      req.body.active_employee,
      employeeImage, // Path to the uploaded image
    ];
    const row2 = [
      req.body.employee_first_name,
      req.body.employee_last_name,
      req.body.employee_phone,
    ];
    const row3 = [req.body.company_role_id];
    const employeePassword = req.body.employee_password;

    const employee = await employeeService.createEmployee(
      row1,
      row2,
      row3,
      employeePassword
    );

    if (!employee) {
      return res.status(400).json({
        error: "Failed to add the employee!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Employee added successfully",
        data: employee,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong!",
    });
  }
};

// Update your employeeService.createEmployee function to handle the image URL.

// Create the getAllEmployees controller
async function getAllEmployees(req, res, next) {
  // Call the getAllEmployees method from the employee service
  const employees = await employeeService.getAllEmployees();
  // console.log(employees);
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}
async function updateEmployee(req, res, next) {
  const updatedEmployeeData = req.body;
  console.log(updatedEmployeeData);
  try {
    const result = await employeeService.updateEmployee(updatedEmployeeData);
    if (!result) {
      return res.status(400).json({
        error: "Failed to update employee!",
      });
    }
    res.status(200).json({
      success: "true",
      message: "Employee updated successfully",
    });
  } catch (error) {
    console.log("Controller Error:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
    // console.log("controller error",error)
  }
}
//create the delete employee controller
async function deleteEmployee(req, res, next) {
  const employeeId = req.params.employeeId;
  try {
    const result = await employeeService.deleteEmployee(employeeId);
    if (!result) {
      return res.status(400).json({
        error: "Failed to delete employee!",
      });
    }
    res.status(200).json({
      success: "true",
      message: "Employee deleted successfully",
    });
  } catch (error) {
    console.log("Controller Error:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
    // console.log("controller error",error)
  }
}
// Export the createEmployee controller
module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
