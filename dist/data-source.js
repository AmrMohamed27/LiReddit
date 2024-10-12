"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const post_1 = require("./entity/post");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2766",
    database: "",
    synchronize: true,
    logging: !constants_1.__prod__,
    entities: [post_1.Post],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map