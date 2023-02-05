import { useMemo } from 'react';

export const useSortedUsers = (users, sort) => {
    return useMemo(() => {
        if (sort === 'asc') {
            return [...users].sort((a, b) => a.username.localeCompare(b.username));
        }
        if (sort === 'desc') {
            return [...users].sort((a, b) => b.username.localeCompare(a.username));
        }
        return users;
    }, [sort, users]);
};

export const useUsers = (users, query, sort) => {
    const sortedUsers = useSortedUsers(users, sort);
    return useMemo(() => {
        return sortedUsers.filter(user => user.username.toLowerCase().includes(query));
    }, [query, sortedUsers])
};