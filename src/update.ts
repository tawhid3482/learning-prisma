import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const updateSingleData = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      title: "Saikat",
    },
  });
};

main();
