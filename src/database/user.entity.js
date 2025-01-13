import { EntitySchema } from "typeorm";

const userEntity = new EntitySchema({
  name: "User",
  tableName: "users", // Optional: specify table name
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstName: {
      type: "varchar",
    },
    lastName: {
      type: "varchar",
    },
    isActive: {
      type: "boolean",
      default: true,
    },
  },
});

export default userEntity;