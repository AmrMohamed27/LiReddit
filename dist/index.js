"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const post_1 = require("./entity/post");
data_source_1.AppDataSource.initialize()
    .then(async () => {
    const postRepo = data_source_1.AppDataSource.getRepository(post_1.Post);
    const post = new post_1.Post();
    post.title = "First Post";
    post.content = "This is the first post";
    await postRepo.save(post);
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map