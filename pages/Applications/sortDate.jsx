export const sortByDate = (data, direction) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (direction === 'oldest') {
            return dateA - dateB;
        } else if (direction === 'latest') {
            return dateB - dateA;
        }

        return 0;
    });

    return sortedData;
};
