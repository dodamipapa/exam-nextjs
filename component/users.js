import https from "https";
import Link from "next/link";

const Users = ({ userdata }) => {
  console.log(`@render users.js`);
  //console.log(`${userdata}`);

  return (
    <>
      <h1>Users page</h1>

      <ul>
        {userdata
          .filter((v) => v.id < 11)
          .map((datas) => (
            <li key={datas.id}>
              <Link href={`${datas.id}`}>
                <a>
                  {datas.name} : {datas.email}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
