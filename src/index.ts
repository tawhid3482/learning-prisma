import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.post.create({
    //     data:{
    //         title:'this is title2',
    //         content:'this is content2',
    //         author:'ami2'
    //     }
    // })
    // console.log(result)
    const getAllFormDB = await prisma.post.findMany()
    console.log(getAllFormDB)
};

main();
