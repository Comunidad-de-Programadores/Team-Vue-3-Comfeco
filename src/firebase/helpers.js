export const querySnapshot = (snap) => {
    let docs = [];

    snap.forEach(doc => {
        docs.push({
            id: doc.id,
            ...doc.data()
        })
    });

    return docs;
}

export const queryDocSnapshot = (doc) => {
    return {
        id: doc.id,
        ...doc.data()
    }
}