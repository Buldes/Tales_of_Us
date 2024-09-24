import key from "../data/key.json"

export async function LoadData(secLevl, saftyPass, finish, setData){
    if (saftyPass !== key.password){
        finish(false)
        return
    }

    const data = require(`../data/data-secLevl_${secLevl}.json`)

    if (data !== undefined){
        setData(data)
        finish(true)
    }
}