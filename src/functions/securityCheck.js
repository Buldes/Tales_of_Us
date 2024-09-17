import platform from "platform";
import keyData from "../data/key.json"


async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }


export async function securityCheck(input, output){

    await hash(input).then(async (out) => {
        input = out
        await hash(platform.os.toString().substring(0, 7)).then((out)=>{
            var os = out

            if (os !== keyData.deviceTyp){
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
    })

   
}