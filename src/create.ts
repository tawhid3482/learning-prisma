import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.createMany({
    data: [
      {
        title: "this is title",
        content: "this is content",
        author: "ami5",
      },
      {
        title: "this is title",
        content: "this is content",
        author: "ami",
      },
      {
        title: "this is title",
        content: "this is content",
        author: "ami",
      },
    ],
  });

  console.log(result);
};

main();
