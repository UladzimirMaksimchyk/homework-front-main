type AddressType = {
  street: string; 
  city: string; 
};

type UserType = {
  id:number,
  name:string,
  age:number,
  address:AddressType,
};

type UserListPropsType = {
  users: UserType[];
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
       {props.users.map((UserType,id) => (
         <li key={UserType.id} id={`hw01-user-${UserType.id}`}>
           <strong>{UserType.name}</strong> (Age: {UserType.age})<strong> Address:</strong>
           {UserType.address.street}, {UserType.address.city}
         </li>
       ))}
      </ul> 
    </div>
  );
};
