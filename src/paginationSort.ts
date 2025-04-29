import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const pagination = async () => {
  // offset pagination
  //   const findallData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  //   console.log(findallData);

  // cursor pagination
  //   const cursorBaseallData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 15,
  //     },
  //   });
  //   console.log(cursorBaseallData);
  const sortData = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
    where: {
      title: "this is title",
    },
  });
  console.log(sortData);
};
pagination();
