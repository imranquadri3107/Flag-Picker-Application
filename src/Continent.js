import React from 'react';

function Continent(props){
    console.log(props);
        return(
            <form onSubmit = {this.props}>
               <input type = 'text' value = 'continent' placeholder = 'continent' onChange = {this.props}/>
               <button>Get Continent</button>
               <input type = 'text' value = 'country' placeholder = 'country'/>
               <button>Get Country</button>
            </form>
        );
    }

export default Continent;