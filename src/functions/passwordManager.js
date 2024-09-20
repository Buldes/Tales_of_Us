import key from "../data/key.json"

export async function CheckForSavedPassword(secPass, vari){
    var res =  localStorage.getItem("pass")
    console.log(`saved item: ${res}`)

    if (res === undefined) {
        vari(false)
    }
    else if (res !== key.password){
        vari(false)
    }
    else {
        secPass(res)
        vari(true)
    }
    
}

export function SavePassword(pass){
    console.log("Saving item: " + pass)
    localStorage.setItem("pass", pass)
}