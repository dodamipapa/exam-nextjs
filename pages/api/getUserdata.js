import axios from "axios";

const result = async () => {
  console.log(`@render getUserData.js`);
  const result = await axios.get("http://jsonplaceholder.typicode.com/users");

  //console.log(result.data);
  return result.data;
};

export default result;
