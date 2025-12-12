// gets the nextId of any list (array of object)

export default function getNextId(list) {
    if (list.length === 0) {
        return 1;
    }

    const maxId = list.reduce(
        (maxId, listItem) => Math.max(maxId, listItem.id),
        0
    );

    return maxId + 1;
}
