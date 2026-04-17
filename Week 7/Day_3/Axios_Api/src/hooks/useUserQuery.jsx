import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import {
     fetchAllUsers, 
     fetchUserById,
     fetchPostByUser,
     createUser,
     updateUser, 
     deleteUser, 
    
     } from "../api/useApi";



export const userKeys = {
    all: () => ['users'],
    detail: (id) => ['users', id],
    posts: (id) => ['user', id, 'posts']
};

// ── Fetch All Users
export const useUsers = () => useQuery({
  queryKey: userKeys.all(),
  queryFn:  fetchAllUsers,
});

// ── Fetch Single User
export const useUser = (id) => useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => fetchUserById(id),
    enabled: !!id,
});
// ── Fetch Posts by User (Dependent Query)
export const useUserPosts = (userid) => useQuery({
    queryKey: userKeys.posts(userid),
    queryFn: () => fetchPostByUser(userid),
    enabled: !!userid,
});
export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
             // invalidate users list so it refetches
            queryClient.invalidateQueries({ queryKey: userKeys.all() });
        },
    });
};


export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUser,
        onSuccess:(data) => {

            queryClient.setQueriesData(userKeys.detail(data.id), data);
            queryClient.invalidateQueries({ queryKey:userKeys.all() })
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUser,
        onSuccess:(_, deletedId) => {
            queryClient.invalidateQueries({ queryKey: userKeys.all() });
            queryClient.removeQueries({ queryKey:userKeys.detail(deletedId) });
        },
    });
};

