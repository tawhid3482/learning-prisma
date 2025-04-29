import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find all
    // const getAllFormDB = await prisma.post.findMany()
    // // console.log(getAllFormDB)

    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where:{
    //         author: 'kal'
    //     }
    // })
    // console.log({findFirst})
    const findFirstUnique = await prisma.post.findUnique({
        where:{
           id: 2
        }
    })
    console.log({findFirstUnique})
};

main();
