import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.createMany({
    data: [
      {
        title: "this is title5",
        content: "this is content5",
        author: "ami5",
      },
      {
        title: "this is title6",
        content: "this is content6",
        author: "ami6",
      },
      {
        title: "this is title7",
        content: "this is content7",
        author: "ami5",
      },
    ],
  });
  console.log(result);
};

main();
