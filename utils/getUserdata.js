import axios from "axios";
import https from "https";
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const result = async () => {
  console.log(`@render getUserData.js`);
  const result = await axios.get("https://jsonplaceholder.typicode.com/users", {
    httpsAgent,
  });

  //console.log(result.data);
  return result.data;
};

export default result;
