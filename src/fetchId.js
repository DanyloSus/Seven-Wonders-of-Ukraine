import data from "./data/data.json"

const fetchId = (name, id) => {
    const att = data[name].find(f => f.id == id)
    console.log(att)
    return new Promise(res => {
        setTimeout(() => res(att), 1000)
    })
}

export const fetchIdByRouted = ({ params: { nameA, attId } }) => fetchId(nameA, attId)