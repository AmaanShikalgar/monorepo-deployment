import { prismaClient } from  "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
     <div>
         {JSON.stringify(users)}
      </div>
      );
    }

    //export const revalidate = 60 // revalidate evry 60 seconds
    //or
    //export const dynamic = 'force-dynamic';