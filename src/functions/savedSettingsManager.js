
export function SaveMenu(menu){
    localStorage.setItem("cMenu", menu)
}

export function GetSavedMenu(vari){
    const res = localStorage.getItem("cMenu")

    if (res !== "parent" && res !== "privat"){
        return null
    }
    else{
        return res
    }
}