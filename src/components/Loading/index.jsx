import React from 'react';
import Loading  from "react-fullscreen-loading";

function WithLoading(props)
{
    return(
       <div>
           <Loading {...props}  background="#181823" loaderColor="#3498db" />
       </div>
    )
}

export default WithLoading;

