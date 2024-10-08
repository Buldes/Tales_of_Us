import keyData from "../data/key.json"
import { isAndroid } from "react-device-detect";
import { hash } from "./convertToHash";

export async function securityCheck(input, output){

    await hash(input).then(async (out) => {
        input = out

        if (!isAndroid){
            output(false)
            return false
        }
        else if (input !== keyData.password && input !== keyData.parantPass){
            output(false)
            return false
        }
        else{
            output(true)
            return true
        }
        
    })

   
}