import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { CrudMethods, Data } from "./types" 

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const queryExists = !!ctx.params;
  console.log("ctx.req: ", ctx.req.method)
  // console.log("ctx.res: ", ctx.res)
  console.log("getServerSideProps");
  const queryParam = !!ctx.params ? ctx.params[Object.keys(ctx.params)[0]] : "";
  const responsePromise = await fetch(`http://localhost:5001/api/v1/phones/${queryParam}`);
  const response: Data = await responsePromise.json()
  
  return {
    props: {
      data: response.data.phones
    }
  }
}

// function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   // will resolve posts to type Data
//   console.log(data)
// }

// export default Page