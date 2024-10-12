import "reflect-metadata";
import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Post } from "./entity/post";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "2766",
  database: "",
  synchronize: true,
  logging: !__prod__,
  entities: [Post],
  migrations: [],
  subscribers: [],
});
