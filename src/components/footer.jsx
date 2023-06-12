import React from "react";
const curYear = new Date().getFullYear();
function Footer(){
    return(
        <footer>
            <p>
                {curYear}
            </p>
        </footer>
        
    );
}

export default Footer;