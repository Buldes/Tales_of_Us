
export function SaveMenu(menu){
    localStorage.setItem("cMenu", menu)
}

export function GetSavedMenu(){
    const res = localStorage.getItem("cMenu")

    if (res !== "parent" && res !== "privat" && res !== "test"){
        return null
    }
    else{
        return res
    }
}