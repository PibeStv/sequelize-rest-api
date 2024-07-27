import { DataTypes } from "sequelize";

import { sequelize } from "../database/database.js";

import { Task } from "./Task.js";

export const Project = sequelize.define("projects",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});


Project.hasMany(Task, {//un proyecto pertenece a muchas tareas 
    foreignKey: 'projectId', //se crea projectId en la tabla task
    sourceKey: 'id'//desde el id de project se enlaza a task
})

Task.belongsTo(Project, {//muchas tareas pertenecen a un proyecto
    foreignKey: 'projectId', 
    targetId: 'id'
})

