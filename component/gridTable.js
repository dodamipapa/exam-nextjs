import Link from "next/link";

import styles from "../styles/gridTable.module.scss";

import connectMongo from "../utils/connectMongo";
import testSchema from "../models/testModel";

const GridTable = ({ tests }) => {
  console.log(`@render : gridTable`);
  //console.log(`${userdata}`);

  return (
    <>
      <div className={styles.grid}>
        {tests.map((test) => (
          <Link href="https://nextjs.org/docs" key={test._id}>
            <a className={styles.card}>
              <h2>{test.name} &rarr;</h2>
              <p>{test.email}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

GridTable.getServerSideProps = async () => {
  console.log(`@component getServerSideProps`);

  await connectMongo();
  console.log("CONNECTED component getServerSideProps TO MONGO");

  console.log("FETCHING component getServerSideProps DOCUMENTS");
  const tests = await testSchema.find();

  //console.log(tests);

  return tests;
};

export default GridTable;
