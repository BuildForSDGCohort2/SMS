import React from 'react'
export const PrimaryClasses=({clas,value})=>{
    return(
    <select name="clas" onChange={clas} value={value ? value : null} id="SelectLm" class=" form-control">
                                                       <option>Please select</option>
                                                       <option>Creche</option>
                                                       <option>KG1</option>
                                                       <option>KG2</option>
                                                       <option>NUR1</option>
                                                       <option>NUR2</option>
                                                       <option>Basic1</option>
                                                       <option>Basic2</option>
                                                       <option>Basic3</option>
                                                       <option>Basic4</option>
                                                       <option>Basic5</option>
                                                       <option>Basic6</option>
                                                   </select>
)}
export const SecondaryClasses=({clas,value})=>{
    return(
    <select name="clas" onChange={clas} value={value ? value : null} id="SelectLm" class=" form-control">
                                                       <option>Please select</option>
                                                       <option>Jss1</option>
                                                       <option>Jss2</option>
                                                       <option>Jss3</option>
                                                       <option>Sss1</option>
                                                       <option>Sss2</option>
                                                       <option>Sss3</option>
                                                   </select>
)}
export const AllClasses=({clas,value})=>{
    return(
    <select name="clas" onChange={clas} value={value ? value : null} id="SelectLm" class=" form-control">
                                                       <option>Please select</option>
                                                       <option>Creche</option>
                                                       <option>KG1</option>
                                                       <option>KG2</option>
                                                       <option>NUR1</option>
                                                       <option>NUR2</option>
                                                       <option>Basic1</option>
                                                       <option>Basic2</option>
                                                       <option>Basic3</option>
                                                       <option>Basic4</option>
                                                       <option>Basic5</option>
                                                       <option>Basic6</option>
                                                       <option>Jss1</option>
                                                       <option>Jss2</option>
                                                       <option>Jss3</option>
                                                       <option>Sss1</option>
                                                       <option>Sss2</option>
                                                       <option>Sss3</option>
                                                   </select>
)}
export const States=[
    {name:"Abia"},
    {name:"Adamawa"},
    {name:"Akwa Ibom"},
    {name:"Anambra"},
    {name:"Bauchi"},
    {name:"Bayelsa"},
    {name:"Benue"},
    {name:"Borno"},
    {name:"Cross River"},
    {name:"Delta"},
    {name:"Ebonyi"},
    {name:"Edo"},
    {name:"Ekiti"},
    {name:"Enugu"},
    {name:"FCT - Abuja"},
    {name:"Gombe"},
    {name:"Imo"},
    {name:"Jigawa"},
    {name:"Kaduna"},
    {name:"Kano"},
    {name:"Katsina"},
    {name:"Kebbi"},
    {name:"Kogi"},
    {name:"Kwara"},
    {name:"Lagos"},
    {name:"Nasarawa"},
    {name:"Niger"},
    {name:"Ogun"},
    {name:"Ondo"},
    {name:"Osun"},
    {name:"Oyo"},
    {name:"Plateau"},
    {name:"Rivers"},
    {name:"Sokoto"},
    {name:"Taraba"},
    {name:"Yobe"},
    {name:"Zamfara"}
  ]