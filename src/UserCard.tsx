interface UserDetails {
  data: {
    id: number;
    name: string;
    username: string;
  };
}

export const UserCard = (props: UserDetails) => {
  console.log(props);
  const { id, name, username } = props.data;
  return (
    <div>
      <h1>{id} - {name} - {username}</h1>
    </div>
  );
};
