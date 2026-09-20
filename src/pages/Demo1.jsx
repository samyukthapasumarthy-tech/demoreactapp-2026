function Demo1()
{
    let a=10
    let name="klu"
    let status=true



    return (
        <div>
        <h3> Functional Component</h3>
        <p siz="+3" >Demo React App</p>
        <font color="red" size="+2">
            Frontend Application Development
        </font>

        <p>{name}</p>
        <p>{a}</p>
        
        <p>{status.toString()}</p>
        </div>
    )
}

export default Demo1


/*
 Element : start tag, end tag and info b/w them 
 - all tags should be closed properly
 - if there are more than one element enclose it with parent element 

 when you want to include more than one element you need to use parent element


 css - inline , internal , external 
*/

/*
 
If you want display JS variable in HTML code then we have to use {} (template variable)

*/