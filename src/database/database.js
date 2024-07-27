import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb", 
  "postgres", 
  "2266", 
  {
    host: "localhost",
    dialect: "postgres",
  }
);


