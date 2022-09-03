import { useEffect, useState } from "react";
import "./App.css";
import { UserDetails } from "./interfaces/usuarios";
import { UserCard } from "./UserCard";

export const App = () => {
  const [userList, setUserList] = useState<UserDetails[]>([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="App">
      {userList.map((data) => (
        <UserCard key={data.id} data={data} />
      ))}
    </div>
  );
};
