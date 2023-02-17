-- USE task3;

-- practice-3

CREATE TABLE Teams (
  team_id INT AUTO_INCREMENT PRIMARY KEY,
  team_name VARCHAR(50)
);

CREATE TABLE Players (
  player_id INT AUTO_INCREMENT PRIMARY KEY,
  player_name VARCHAR(50),
  country VARCHAR(50),
  expertise VARCHAR(50),
  team_id INT,
  FOREIGN KEY (team_id) REFERENCES Teams(team_id)
);

INSERT INTO Teams(team_id,team_name)
VALUE
(101,"csk"),
(102,"mi"),
(103,"rcb"),
(104,"csk"),
(105,"kkr"),
(106,"gl");

INSERT INTO Players(player_id,player_name,country,expertise,team_id)
VALUE
(1,"M.S_dhoni","india","batting",101),
(2,"rohit_sharma","india","batting",102),
(3,"virat_kohli","india","batting",103),
(4,"suresh_raina","india","all_rounder",104),
(5,"sunil_narine","west_indies","all_rounder",105),
(6,"k.l_rahul","india","batting",106);


