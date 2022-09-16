import connectMongo from "../../utils/connectMongo";
import Test from "../../models/testModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findTest(req, res) {
  console.log(`@render find.js`);
  try {
    console.log("CONNECTING FIND TO MONGO");
    await connectMongo();
    console.log("CONNECTED FIND TO MONGO");

    console.log("CREATING FIND DOCUMENT");
    const test = await Test.find();
    console.log("CREATED FIND DOCUMENT");

    res.json(test);
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
