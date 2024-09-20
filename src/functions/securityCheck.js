import keyData from "../data/key.json"
import { isMobile } from "react-device-detect";
import { hash } from "./convertToHash";

export async function securityCheck(input, output){

    await hash(input).then(async (out) => {
        input = out

        if (!isMobile){
            output(false)
            return false
        }
        else if (input !== keyData.password){
            output(false)
            return false
        }
        else{
            output(true)
            return true
        }
        
    })

   
}