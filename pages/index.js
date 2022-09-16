import styles from "../styles/Home.module.scss";

import result from "./api/getUserdata";
import Users from "../component/users";

// test
import GridTable from "../component/gridTable";

export default function Home({ gridTable, userdata }) {
  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `Test ${randomNum}`,
        email: `test${randomNum}@test.com`,
      }),
    });

    const data = await res.json();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={createTest}>Create Test</button>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Users userdata={userdata} />
        <GridTable gridtable={gridTable} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/find");
    const gridTable = await res.json();

    // "./api/getUserdata"
    const userData = await result();

    return {
      props: {
        gridTable,
        userdata: JSON.parse(JSON.stringify(userData)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
