import Link from "next/link";
import styles from "../styles/gridTable.module.scss";

const GridTable = ({ gridtable }) => {
  console.log(`@render gridTable.js`);
  //console.log(gridtable);

  return (
    <>
      <div className={styles.grid}>
        {gridtable.map((test) => (
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

export default GridTable;
