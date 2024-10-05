-- Create Student Table
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    student_email VARCHAR(255)
);

-- Create Student_Info Table
CREATE TABLE Student_Info (
    student_info_id INT PRIMARY KEY,
    student_id INT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    active_status INT(11),
    added_date DATETIME,
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);

-- Create Student_Pass Table
CREATE TABLE Student_Pass (
    student_pass_id INT PRIMARY KEY,
    student_id INT,
    student_password_hashed VARCHAR(255),
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);

-- Create Quarters Table
CREATE TABLE Quarters (
    quarter_id INT PRIMARY KEY,
    quarter_name VARCHAR(255),
    start_date DATE,
    end_date DATE,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);

-- Create Weeks Table
CREATE TABLE Weeks (
    week_id INT PRIMARY KEY,
    week_number INT,
    week_name_or_description VARCHAR(255),
    quarter_id INT,
    FOREIGN KEY (quarter_id) REFERENCES Quarters(quarter_id)
);

-- Create Videos Table
CREATE TABLE Videos (
    video_id INT PRIMARY KEY,
    video_title VARCHAR(255),
    video_link TEXT,
    video_description TEXT,
    week_id INT,
    uploaded_at DATETIME,
    FOREIGN KEY (week_id) REFERENCES Weeks(week_id)
);

-- Create Documents Table
CREATE TABLE Documents (
    document_id INT PRIMARY KEY,
    doc_name VARCHAR(255),
    doc_link TEXT,
    week_id INT,
    uploaded_at DATETIME,
    FOREIGN KEY (week_id) REFERENCES Weeks(week_id)
);

-- Create Attendance Table
CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY,
    student_id INT,
    attendance_date DATETIME,
    week_id INT,
    zoom_link TEXT,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (week_id) REFERENCES Weeks(week_id)
);

-- Create Company_Roles Table
CREATE TABLE Company_Roles (
    company_role_id INT PRIMARY KEY,
    company_role_name VARCHAR(255)
);

-- Create Employee Table
CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    employee_email VARCHAR(255),
    active_employee INT
);

-- Create Employee_Info Table
CREATE TABLE Employee_Info (
    employee_info_id INT PRIMARY KEY,
    employee_id INT,
    employee_first_name VARCHAR(255),
    employee_last_name VARCHAR(255),
    employee_phone VARCHAR(255),
    employee_city VARCHAR(255),
    employee_country VARCHAR(255),
    added_date DATETIME,
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
);

-- Create Employee_Pass Table
CREATE TABLE Employee_Pass (
    employee_pass_id INT PRIMARY KEY,
    employee_id INT,
    employee_password_hashed VARCHAR(255),
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
);

-- Create Employee_and_Student_Role Table
CREATE TABLE Employee_and_Student_Role (
    employee_and_student_role_id INT PRIMARY KEY,
    employee_id INT,
    company_role_id INT,
    student_id INT,
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id),
    FOREIGN KEY (company_role_id) REFERENCES Company_Roles(company_role_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);

-- Create Password Resets Table for Students
CREATE TABLE Password_Resets_Students (
    reset_id INT PRIMARY KEY,
    student_pass_id INT,
    otp_code VARCHAR(6),
    expires_at DATETIME,
    used INT(11),
    FOREIGN KEY (student_pass_id) REFERENCES Student_Pass(student_pass_id)
);

-- Create Password Resets Table for Employees
CREATE TABLE Password_Resets_Employees (
    reset_id INT PRIMARY KEY,
    employee_pass_id INT,
    otp_code VARCHAR(6),
    expires_at DATETIME,
    used TINYINT(1),
    FOREIGN KEY (employee_pass_id) REFERENCES Employee_Pass(employee_pass_id)
);
