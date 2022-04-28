import styled from "styled-components"

const Button = styled.button`

border: ${ (props)=>{

if(props.thm=="dsh"||props.thm=="def")
{
        return("1px solid black")
}
else
{
    return("none")
}


} };

 border-style:${ (props)=>{

if(props.thm=="dsh")
{
        return("dotted")
}


} };
 border-radius:4px;
 padding:10px;
 padding-top:8px;
 text-align:center;
 background-color : ${ (props) =>{

if(props.thm=="pri")
{
    return("skyblue")
}

if(props.thm!=="pri")
{
    return("white")
}

 }};
 color: ${(props)=>{

     if(props.thm==="lnk")
     {
         return("blue")
     }

     if(props.thm==="pri")
     {
         return("white")
     }

 }};
 cursor:pointer;
 margin:5px;
 

`;

export{Button}