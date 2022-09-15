import axios from "axios";
import https from "https";
import * as cheerio from "cheerio";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const result = async (req, res) => {
  console.log(`@str Crawler`);
  const result = await axios.get("https://www.hmall.com/m/index.do", {
    httpsAgent,
  });

  const $ = cheerio.load(result.data);

  //console.log(result.data);
  //res.json(result.data);
  res.json($.html("main"));
  //return result.data;
};

export default result;
