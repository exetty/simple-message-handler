import React, {useMemo} from 'react';

export const UsePagination = (totalCount) => {
    const result = useMemo(() => {
        const result = []
        for (let i = 0; i < totalCount; i++) {
            result.push(i + 1)
        }
        return result
    }, [totalCount])

    return result
};

export default UsePagination;