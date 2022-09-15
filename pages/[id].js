// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const id = Number(router.query.id);

  return <p>Param id : {id}</p>;
}
