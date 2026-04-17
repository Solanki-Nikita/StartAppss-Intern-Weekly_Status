//  BEFORE — UserList.jsx (manual axios)


import { useDeleteUser, useUsers } from "../hooks/useUserQuery";

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function UserList() {
//   const [users, setUsers]     = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError]     = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error)   return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name} — {user.email}</li>
//       ))}
//     </ul>
//   );
// }
// export default UserList;



// AFTER — UserList.jsx (React Query)


function UserList({onSlectUser}) {
   const {data: users, isLoading, isError, error, isFetching } = useUsers();
   const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();

   if(isLoading) return <div className="spinner">Loading Users...</div>
   if(isError) return <div className="error">Error:{error.message}</div>

   return(
    <div>
    {/* subtle indicator for background refetches */}
    {isFetching && <p style={{color:'greenyellow'}}> Refreshing....</p>}

       <ul>
            {users.map(user => (
                <li key={user.id}>
                    <span>{user.name}-{user.email}</span>

                    <button onClick={() => onSlectUser(user.id)}>
                        View
                    </button>

                    <button onClick={() => deleteUser(user.id)}
                       disabled={isDeleting}  >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </li>
            ))}
        </ul>

    </div>
   )
}

export default UserList;