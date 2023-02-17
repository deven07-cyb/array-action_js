                         -- practice-2


-- USE task2;

CREATE TABLE colleges (
  college_id INT NOT NULL AUTO_INCREMENT,
  college_name VARCHAR(255) NOT NULL,
  college_location VARCHAR(255) NOT NULL,
  PRIMARY KEY (college_id)
);

CREATE TABLE students (
  student_id INT NOT NULL AUTO_INCREMENT,
  student_name VARCHAR(255) NOT NULL,
  student_email VARCHAR(255) NOT NULL,
  college_id INT NOT NULL,
  PRIMARY KEY (student_id),
  FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);

INSERT INTO colleges(college_id,college_name,college_location)
VALUE
(1,"Atmiya","Rajkot"),
(2,"Marvadi","Rajkot"),
(3,"Gec","Rajkot"),
(4,"L.D","Ahemdabad"),
(5,"Atmiya","Rajkot");

INSERT INTO students(student_id,student_name,student_email,college_id)
VALUE
(190004041,"deven","devensurejads@gmail.com",1),
(190004042,"akash","akashpatel@gmail.com",3),
(190004043,"ronak","ronakkaneriya@gmail.com",2),
(190004044,"jeet","jeet22@gmail.com",5),
(190004045,"anand","patelanand07@gmail.com",4);







