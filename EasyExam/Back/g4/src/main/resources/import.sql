insert into teacher (email, is_admin, last_name, name, password, phone, points) values ('owo@owo.com', false, 'juan','gutierrez','123', '123', 10);

insert into question (id, allowed, answer, creation_date, description, score, title, creator_email) values (12312312123, true, 'owowo', '10/12/2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 15, 'owolandia', 'owo@owo.com');

insert into question (id, allowed, answer, creation_date, description, score, title, creator_email) values (12312212123, true, 'owowsd', '10/12/2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 17, 'owolandia', 'owo@owo.com');

insert into question (id, allowed, answer, creation_date, description, score, title, creator_email) values (12312612123, true, 'owowoadsafe', '10/12/2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 19, 'owolandia', 'owo@owo.com');

insert into question (id, allowed, answer, creation_date, description, score, title, creator_email) values (12312112123, true, 'owowfeawwwwre44o', '10/12/2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 20, 'owolandia', 'owo@owo.com');

insert into category (id, name) VALUES (1838, 'Computacion');
insert into category (id, name) VALUES (1825, 'Matematica');
insert into category (id, name) VALUES (1848, 'Lenguas');
insert into category (id, name) VALUES (1815, 'Quimica');

insert into subcategory (id, name, category_id) VALUES (1525, 'Analisis Asintotico', 1838);
insert into subcategory (id, name, category_id) VALUES (1545, 'Calculo Diferencial', 1825);
insert into subcategory (id, name, category_id) VALUES (1523, 'Gramatica y Ortografia', 1848);
insert into subcategory (id, name, category_id) VALUES (1535, 'Estequiometria', 1815);

insert into question_subcategory (question_id, subcategory_id) VALUES (12312312123, 1525);
insert into question_subcategory (question_id, subcategory_id) VALUES (12312212123, 1545);
insert into question_subcategory (question_id, subcategory_id) VALUES (12312612123, 1523);
insert into question_subcategory (question_id, subcategory_id) VALUES (12312112123, 1535);