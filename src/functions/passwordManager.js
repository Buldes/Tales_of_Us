import key from "../data/key.json"

export async function CheckForSavedPassword(secPass, vari){
    var res =  localStorage.getItem("pass")

    if (res === undefined) {
        vari(false)
    }
    else if (res !== key.password && res !== key.parantPass){
        vari(false)
    }
    else {
        secPass(res)
        vari(true)
    }
    
}

export function SavePassword(pass){
    localStorage.setItem("pass", pass)
}