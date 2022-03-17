import React from 'react'

const BottomBar = () => {
    return (
        
<div className="bottom_wrapper" style={{backgroundColor:"#3a3d3e"}}>
<h4 style={{textAlign:"center"}}>---Connect With Us Socially--- </h4>
<div style={{justifyContent:"space-evenly",display:"flex",paddingBottom:"20px"}}>
{/* placing logos images */}
<a href="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" alt=""/></a>
<a href="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" alt=""/></a>
<a href="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" alt=""/></a>
<a href="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-messenger.png" alt=""/></a>

</div>


<div className="Bottom" >



{/* 1st div  */}
    <div style={{backgroundColor:"#e1b976", color:"#8d8e7c"}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, ullam perferendis cumque, doloribus culpa ad provident officiis ratione neque fugiat nemo voluptate, sint tempore fuga eveniet autem esse. Asperiores, eligendi.


    </div>

{/* 2nd div */}

<div style={{backgroundColor:"#8d8e7c",color:"#e1b976"}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, ullam perferendis cumque, doloribus culpa ad provident officiis ratione neque fugiat nemo voluptate, sint tempore fuga eveniet autem esse. Asperiores, eligendi.


</div>

{/* 3rd Div */}
<div style={{backgroundColor:"#94b393",color:"#263439"}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, ullam perferendis cumque, doloribus culpa ad provident officiis ratione neque fugiat nemo voluptate, sint tempore fuga eveniet autem esse. Asperiores, eligendi.

</div>


{/* 4th div */}
<div style={{backgroundColor:"#263439",color:"#94b393"}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, ullam perferendis cumque, doloribus culpa ad provident officiis ratione neque fugiat nemo voluptate, sint tempore fuga eveniet autem esse. Asperiores, eligendi.

</div>




</div>
</div>
        
    )
}

export default BottomBar
