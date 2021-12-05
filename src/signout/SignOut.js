import React from 'react'

import { getAuth, signOut } from "firebase/auth";





const SignOut = () => {


const auth = getAuth();
signOut(auth).then(() => {

})
.catch((error) => {

});
    

    return (
        <div>
            {/* <button onChange={auth}> Log OUT</button> */}

            
            
        </div>
    )
}

export default SignOut

