-- Update Company_Roles Table (adding Partner role)
CREATE TABLE IF NOT EXISTS `Company_Roles` (
    `company_role_id` INT PRIMARY KEY,
    `company_role_name` VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Insert roles: Admin, Manager, Student, Partner
INSERT INTO `Company_Roles` (`company_role_id`, `company_role_name`) VALUES
    (1, 'Admin'),
    (2, 'Manager'),
    (3, 'Student'),
    (4, 'Partner')
ON DUPLICATE KEY UPDATE
    `company_role_name` = VALUES(`company_role_name`);

-- Create Users Table (updated to include company_role_id)
CREATE TABLE IF NOT EXISTS `Users` (
    `user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `phone_number` VARCHAR(15),
    `city` VARCHAR(100),
    `country` VARCHAR(100),
    `active_status` TINYINT(1) NOT NULL DEFAULT 1,
    `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `company_role_id` INT NOT NULL,
    FOREIGN KEY (`company_role_id`) REFERENCES `Company_Roles`(`company_role_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create Emails Table (emails linked to users)
CREATE TABLE IF NOT EXISTS `Emails` (
    `email_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Create User_Passwords Table (passwords for users)
CREATE TABLE IF NOT EXISTS `User_Passwords` (
    `password_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `password_hashed` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insert default admin user
INSERT INTO `Users` (`first_name`, `last_name`, `phone_number`, `city`, `country`, `company_role_id`)
VALUES ('Admin', 'User', '11111111', 'Admin City', 'Admin Country', 1);

-- Insert admin email
INSERT INTO `Emails` (`user_id`, `email`)
VALUES ((SELECT `user_id` FROM `Users` WHERE `first_name` = 'Admin' AND `last_name` = 'User'), 'admin@admin.com');

-- Insert admin password (hashed version of '123456')
INSERT INTO `User_Passwords` (`user_id`, `password_hashed`)
VALUES ((SELECT `user_id` FROM `Users` WHERE `first_name` = 'Admin' AND `last_name` = 'User'), MD5('123456'));

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    quarter VARCHAR(20) NOT NULL,
    status BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);



-- Create Quarter1 Table
CREATE TABLE Quarter1 (
    id SERIAL PRIMARY KEY,
    year VARCHAR(10) NOT NULL, 
    week VARCHAR(10) NOT NULL,  
    video VARCHAR(255) NOT NULL,
    video_description TEXT NOT NULL,
    document VARCHAR(255) NOT NULL,
    document_description TEXT NOT NULL
);

-- Create Quarter2 Table
CREATE TABLE Quarter2 (
    id SERIAL PRIMARY KEY,
    year VARCHAR(10) NOT NULL,
    week VARCHAR(10) NOT NULL,
    video VARCHAR(255) NOT NULL,
    video_description TEXT NOT NULL,
    document VARCHAR(255) NOT NULL,
    document_description TEXT NOT NULL
);

-- Create Quarter3 Table
CREATE TABLE Quarter3 (
    id SERIAL PRIMARY KEY,
    year VARCHAR(10) NOT NULL,
    week VARCHAR(10) NOT NULL,
    video VARCHAR(255) NOT NULL,
    video_description TEXT NOT NULL,
    document VARCHAR(255) NOT NULL,
    document_description TEXT NOT NULL
);

-- Insert Data into Quarter1 with updated descriptions
INSERT INTO Quarter1 (year, week, video, video_description, document, document_description)
VALUES
-- Year 1, Week 1 to 12
('Year 1', 'Week 1', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 1 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 1 document'),
('Year 1', 'Week 2', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 2 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 2 document'),
('Year 1', 'Week 3', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 3 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 3 document'),
('Year 1', 'Week 4', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 4 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 4 document'),
('Year 1', 'Week 5', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 5 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 5 document'),
('Year 1', 'Week 6', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 6 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 6 document'),
('Year 1', 'Week 7', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 7 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 7 document'),
('Year 1', 'Week 8', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 8 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 8 document'),
('Year 1', 'Week 9', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 9 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 9 document'),
('Year 1', 'Week 10', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 10 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 10 document'),
('Year 1', 'Week 11', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 11 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 11 document'),
('Year 1', 'Week 12', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 1 Week 12 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 1 Week 12 document'),

-- Year 2, Week 1 to 12
('Year 2', 'Week 1', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 1 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 1 document'),
('Year 2', 'Week 2', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 2 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 2 document'),
('Year 2', 'Week 3', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 3 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 3 document'),
('Year 2', 'Week 4', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 4 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 4 document'),
('Year 2', 'Week 5', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 5 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 5 document'),
('Year 2', 'Week 6', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 6 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 6 document'),
('Year 2', 'Week 7', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 7 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 7 document'),
('Year 2', 'Week 8', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 8 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 8 document'),
('Year 2', 'Week 9', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 9 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 9 document'),
('Year 2', 'Week 10', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 10 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 10 document'),
('Year 2', 'Week 11', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 11 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 11 document'),
('Year 2', 'Week 12', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 1 Week 12 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 1 Week 12 document');

-- Insert Data into Quarter2 with updated descriptions
INSERT INTO Quarter2 (year, week, video, video_description, document, document_description)
VALUES
-- Year 1, Week 1 to 12
('Year 1', 'Week 1', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 1 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 1 document'),
('Year 1', 'Week 2', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 2 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 2 document'),
('Year 1', 'Week 3', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 3 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 3 document'),
('Year 1', 'Week 4', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 4 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 4 document'),
('Year 1', 'Week 5', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 5 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 5 document'),
('Year 1', 'Week 6', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 6 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 6 document'),
('Year 1', 'Week 7', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 7 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 7 document'),
('Year 1', 'Week 8', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 8 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 8 document'),
('Year 1', 'Week 9', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 9 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 9 document'),
('Year 1', 'Week 10', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 10 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 10 document'),
('Year 1', 'Week 11', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 11 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 11 document'),
('Year 1', 'Week 12', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 2 Week 12 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 2 Week 12 document'),

-- Year 2, Week 1 to 12
('Year 2', 'Week 1', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 1 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 1 document'),
('Year 2', 'Week 2', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 2 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 2 document'),
('Year 2', 'Week 3', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 3 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 3 document'),
('Year 2', 'Week 4', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 4 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 4 document'),
('Year 2', 'Week 5', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 5 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 5 document'),
('Year 2', 'Week 6', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 6 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 6 document'),
('Year 2', 'Week 7', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 7 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 7 document'),
('Year 2', 'Week 8', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 8 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 8 document'),
('Year 2', 'Week 9', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 9 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 9 document'),
('Year 2', 'Week 10', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 10 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 10 document'),
('Year 2', 'Week 11', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 11 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 11 document'),
('Year 2', 'Week 12', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 2 Week 12 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 2 Week 12 document');

-- Insert Data into Quarter3 with updated descriptions
INSERT INTO Quarter3 (year, week, video, video_description, document, document_description)
VALUES
-- Year 1, Week 1 to 12
('Year 1', 'Week 1', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 1 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 1 document'),
('Year 1', 'Week 2', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 2 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 2 document'),
('Year 1', 'Week 3', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 3 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 3 document'),
('Year 1', 'Week 4', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 4 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 4 document'),
('Year 1', 'Week 5', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 5 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 5 document'),
('Year 1', 'Week 6', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 6 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 6 document'),
('Year 1', 'Week 7', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 7 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 7 document'),
('Year 1', 'Week 8', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 8 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 8 document'),
('Year 1', 'Week 9', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 9 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 9 document'),
('Year 1', 'Week 10', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 10 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 10 document'),
('Year 1', 'Week 11', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 11 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 11 document'),
('Year 1', 'Week 12', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 1 Quarter 3 Week 12 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 1 Quarter 3 Week 12 document'),

-- Year 2, Week 1 to 12
('Year 2', 'Week 1', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 1 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 1 document'),
('Year 2', 'Week 2', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 2 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 2 document'),
('Year 2', 'Week 3', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 3 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 3 document'),
('Year 2', 'Week 4', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 4 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 4 document'),
('Year 2', 'Week 5', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 5 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 5 document'),
('Year 2', 'Week 6', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 6 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 6 document'),
('Year 2', 'Week 7', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 7 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 7 document'),
('Year 2', 'Week 8', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 8 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 8 document'),
('Year 2', 'Week 9', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 9 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 9 document'),
('Year 2', 'Week 10', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 10 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 10 document'),
('Year 2', 'Week 11', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 11 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 11 document'),
('Year 2', 'Week 12', 'https://www.youtube.com/watch?v=t_Td4bU', 'Year 2 Quarter 3 Week 12 video', 'C:\\Users\\HP\\Desktop\\1.pdf', 'Year 2 Quarter 3 Week 12 document');

-- Create Password Resets Table for Users
CREATE TABLE IF NOT EXISTS `Password_Resets` (
    `reset_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `password_id` INT NOT NULL,
    `otp_code` VARCHAR(6) NOT NULL,
    `expires_at` DATETIME NOT NULL,
    `used` TINYINT(1) NOT NULL DEFAULT 0,
    FOREIGN KEY (`password_id`) REFERENCES `User_Passwords`(`password_id`) ON DELETE CASCADE
) ENGINE=InnoDB;
