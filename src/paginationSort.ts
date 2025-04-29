import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const pagination = async () => {
  const findallData = await prisma.post.findMany();
  console.log(findallData);
};
pagination();
