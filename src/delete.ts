import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const deleteData = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  const deleteData = await prisma.post.deleteMany({});
};

main();
