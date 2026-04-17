import React, { useState } from 'react'
import { useUpdateUser, useUser, useUserPosts } from '../hooks/useUserQuery';

export default function UserDetails(userId) {

    const [isEditing, setIsEditing] =useState();
    const [name, setName] = useState();

    // automatically re-fetches when userId changes
    const {data: user, isLoading: loadingUser } = useUser(userId);
    const {data: posts, isLoading: loadingPosts } = useUserPosts(userId);
    const {mutate: updateUser, isPending: isUpdating} =useUpdateUser();

    const handleUpdate = () => { 
        updateUser(
            {id: userId, name },
            {
                onSuccess: () => setIsEditing(false),
                onError:(err) => alert(err.message),
            }
        );
    };
    if(loadingUser || loadingPosts) return<P>Loading details....</P>





  return (
    <div>
        {isEditing ? (
            <div>
                <input value={name} onChange={e => setName(e.target.value)} />
                <button onClick={handleUpdate} disabled={isUpdating}>
                    {isUpdating ? 'Saving....' : '  Save'}
                </button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        ) : (
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={() => { setName(user.name); setIsEditing(true);}}>
                    Edit
                </button>
            </div>
        )}

        <h3> Posts ({posts.length})</h3>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  );
}
