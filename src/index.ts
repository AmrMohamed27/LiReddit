import { AppDataSource } from "./data-source";
import { Post } from "./entity/post";

AppDataSource.initialize()
  .then(async () => {
    const postRepo = AppDataSource.getRepository(Post);
    const post = new Post();
    post.title = "First Post";
    post.content = "This is the first post";
    await postRepo.save(post);
  })
  .catch((error) => console.log(error));
