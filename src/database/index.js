import { DataSource } from "typeorm";
import userEntity from "./user.entity.js";
// import path from "path";
// import fs from "fs";
import { caCertificate } from "./data.js";

// const certificatePath = path.join("..", "..", "global-bundle.pem");

// const ca = fs.readFileSync(certificatePath).toString();

// console.log({ ca });

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_URL ?? "localhost",
  port: process.env.DATABASE_PORT ?? 5432,
  username: process.env.DATABASE_USERNAME ?? "postgres",
  password: process.env.DATABASE_PASSWORD ?? "root",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [userEntity],
  ssl: {
    rejectUnauthorized: true,
    ca: caCertificate,
  },
});

const connectDB = async () => {
  try {
    await AppDataSource.initialize();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default connectDB;
