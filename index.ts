import { PrismaClient } from "@prisma/client";
 const prisma = new PrismaClient()
 async function main() {
    //Prisma Queries
    //create user
    const user = await prisma.user.create({
      data: {
         name: 'Sri Narayan',
         email: 'sri21@gmail.com'
      }
    })

    const users = await prisma.user.findMany();

    const article = await prisma.article.create({
      data: {
         title: 'Sris first Article',
         body: 'This is Sris first article',
         author: {
            connect: {
               id: 1,
            }
         }
      }
    })
    console.log(article)
 }

 main()
 .then(async () => {
    await prisma.$disconnect();
 })
 .catch(async(e)=> {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
 })