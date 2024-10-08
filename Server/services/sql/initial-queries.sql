-- Create Company_Roles Table with fixed IDs for roles
CREATE TABLE IF NOT EXISTS `Company_Roles` (
    `company_role_id` INT PRIMARY KEY,
    `company_role_name` VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Insert roles with specific IDs: Admin = 1, Manager = 2, Student = 3
INSERT INTO `Company_Roles` (`company_role_id`, `company_role_name`) VALUES
    (1, 'Admin'),
    (2, 'Manager'),
    (3, 'Student');

-- Create Students Table
CREATE TABLE IF NOT EXISTS `Students` (
    `student_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_email` VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Create Student_Info Table
CREATE TABLE IF NOT EXISTS `Student_Info` (
    `student_info_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_id` INT NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `phone_number` VARCHAR(15),
    `city` VARCHAR(100),
    `country` VARCHAR(100),
    `active_status` TINYINT(1) NOT NULL DEFAULT 1,
    `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Student_Pass Table
CREATE TABLE IF NOT EXISTS `Student_Pass` (
    `student_pass_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_id` INT NOT NULL,
    `student_password_hashed` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Years Table 
CREATE TABLE IF NOT EXISTS `Years` (
    `year_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `year_name` VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Insert predefined Years
INSERT INTO `Years` (`year_name`) VALUES ('1st Year'), ('2nd Year');

-- Create Quarters Table
CREATE TABLE IF NOT EXISTS `Quarters` (
    `quarter_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `quarter_name` VARCHAR(50) NOT NULL,
    `year_id` INT NOT NULL,
    FOREIGN KEY (`year_id`) REFERENCES `Years`(`year_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insert predefined Quarters for both years
INSERT INTO `Quarters` (`quarter_name`, `year_id`) VALUES 
('Quarter 1', 1), ('Quarter 2', 1), ('Quarter 3', 1), 
('Quarter 1', 2), ('Quarter 2', 2), ('Quarter 3', 2);

-- Create Weeks Table
CREATE TABLE IF NOT EXISTS `Weeks` (
    `week_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `week_number` INT NOT NULL,
    `quarter_id` INT NOT NULL,
    FOREIGN KEY (`quarter_id`) REFERENCES `Quarters`(`quarter_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insert default weeks for 1st and 2nd year (assuming 3 quarters per year and 4 weeks per quarter)
INSERT INTO `Weeks` (`week_number`, `quarter_id`) VALUES 
-- Weeks for 1st Year
(1, 1), (2, 1), (3, 1), (4, 1),
(1, 2), (2, 2), (3, 2), (4, 2),
(1, 3), (2, 3), (3, 3), (4, 3),
-- Weeks for 2nd Year
(1, 4), (2, 4), (3, 4), (4, 4),
(1, 5), (2, 5), (3, 5), (4, 5),
(1, 6), (2, 6), (3, 6), (4, 6);

-- Create Attendance Table
CREATE TABLE IF NOT EXISTS `Attendance` (
    `attendance_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_id` INT NOT NULL,
    `attendance_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `week_id` INT NOT NULL,
    `zoom_link` TEXT,
    FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`) ON DELETE CASCADE,
    FOREIGN KEY (`week_id`) REFERENCES `Weeks`(`week_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Employees Table
CREATE TABLE IF NOT EXISTS `Employees` (
    `employee_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_email` VARCHAR(100) NOT NULL UNIQUE,
    `active_employee` TINYINT(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB;

-- Create Employee_Info Table
CREATE TABLE IF NOT EXISTS `Employee_Info` (
    `employee_info_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_id` INT NOT NULL,
    `employee_first_name` VARCHAR(100) NOT NULL,
    `employee_last_name` VARCHAR(100) NOT NULL,
    `employee_phone` VARCHAR(15),
    `employee_city` VARCHAR(100),
    `employee_country` VARCHAR(100),
    `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`employee_id`) REFERENCES `Employees`(`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Employee_Pass Table
CREATE TABLE IF NOT EXISTS `Employee_Pass` (
    `employee_pass_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_id` INT NOT NULL,
    `employee_password_hashed` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`employee_id`) REFERENCES `Employees`(`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Employee_Student_Roles Table
CREATE TABLE IF NOT EXISTS `Employee_Student_Roles` (
    `employee_student_role_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_id` INT NOT NULL,
    `company_role_id` INT NOT NULL,
    `student_id` INT DEFAULT NULL,
    FOREIGN KEY (`employee_id`) REFERENCES `Employees`(`employee_id`) ON DELETE CASCADE,
    FOREIGN KEY (`company_role_id`) REFERENCES `Company_Roles`(`company_role_id`) ON DELETE CASCADE,
    FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Password Resets Table for Students
CREATE TABLE IF NOT EXISTS `Password_Resets_Students` (
    `reset_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_pass_id` INT NOT NULL,
    `otp_code` VARCHAR(6) NOT NULL,
    `expires_at` DATETIME NOT NULL,
    `used` TINYINT(1) NOT NULL DEFAULT 0,
    FOREIGN KEY (`student_pass_id`) REFERENCES `Student_Pass`(`student_pass_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Password Resets Table for Employees
CREATE TABLE IF NOT EXISTS `Password_Resets_Employees` (
    `reset_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_pass_id` INT NOT NULL,
    `otp_code` VARCHAR(6) NOT NULL,
    `expires_at` DATETIME NOT NULL,
    `used` TINYINT(1) NOT NULL DEFAULT 0,
    FOREIGN KEY (`employee_pass_id`) REFERENCES `Employee_Pass`(`employee_pass_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Videos Table with year_id, quarter_id, and week_id
CREATE TABLE IF NOT EXISTS `Videos` (
    `video_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `video_title` VARCHAR(255) NOT NULL,
    `video_link` TEXT,
    `video_description` TEXT,
    `year_id` INT NOT NULL,
    `quarter_id` INT NOT NULL,
    `week_id` INT NOT NULL,
    `uploaded_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`year_id`) REFERENCES `Years`(`year_id`) ON DELETE CASCADE,
    FOREIGN KEY (`quarter_id`) REFERENCES `Quarters`(`quarter_id`) ON DELETE CASCADE,
    FOREIGN KEY (`week_id`) REFERENCES `Weeks`(`week_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insert videos with year_id, quarter_id, and week_id
INSERT INTO `Videos` (`video_title`, `video_link`, `video_description`, `year_id`, `quarter_id`, `week_id`) VALUES 
-- Videos for 1st Year
('1st Year - Quarter 1 - Week 1 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 1st Year, Quarter 1, Week 1', 1, 1, 1),
('1st Year - Quarter 1 - Week 2 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 1st Year, Quarter 1, Week 2', 1, 1, 2),
('1st Year - Quarter 1 - Week 3 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 1st Year, Quarter 1, Week 3', 1, 1, 3),
('1st Year - Quarter 1 - Week 4 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 1st Year, Quarter 1, Week 4', 1, 1, 4),
-- Videos for 2nd Year
('2nd Year - Quarter 1 - Week 1 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 2nd Year, Quarter 1, Week 1', 2, 4, 5),
('2nd Year - Quarter 1 - Week 2 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 2nd Year, Quarter 1, Week 2', 2, 4, 6),
('2nd Year - Quarter 1 - Week 3 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 2nd Year, Quarter 1, Week 3', 2, 4, 7),
('2nd Year - Quarter 1 - Week 4 Video', 'https://youtube.com/watch?v=RQ2Zl0af', 'Educational Videos for 2nd Year, Quarter 1, Week 4', 2, 4, 8);

-- Insert the admin account into the Employees table
INSERT INTO `Employees` (`employee_email`, `active_employee`) VALUES ('admin@admin.com', 1);

-- Insert admin's personal information into the Employee_Info table
INSERT INTO `Employee_Info` (`employee_id`, `employee_first_name`, `employee_last_name`, `employee_phone`, `employee_city`, `employee_country`)
VALUES (LAST_INSERT_ID(), 'Admin', 'User', '1234567890', 'AdminCity', 'AdminCountry');

-- Insert admin's password into the Employee_Pass table
INSERT INTO `Employee_Pass` (`employee_id`, `employee_password_hashed`)
VALUES (LAST_INSERT_ID(), 'hashed_password_here');  -- Replace with an actual hashed password



