import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const addInFile = ( orgData , pid , text , isFolder )=>{
    const obj = {
        id : uuidv4(),
        name : text,
        isFolder : isFolder,
        child : []
    }

    const clonedata = { ...orgData }

    recursiveAdd( clonedata , pid , obj );
    
    return clonedata ;
}

const recursiveAdd = ( data , pid , obj )=>{
    if( data?.id === pid ){
        data?.child?.unshift(obj);
        return
    }

    data?.child?.forEach( (ele) => { recursiveAdd(ele , pid , obj) } );
}

export const deleteInFile = ( orgData ,id   )=>{
    
    const clonedata = { ...orgData }

    recursiveDelete( clonedata , id );
    // console.log(clonedata);
    
    return clonedata ;
}

const recursiveDelete = (data, id)=>{
    
    data.child =  data.child.filter( (ele)=> {
        if( ele?.id===id && ele?.child?.length!==0){
            // console.log("Error bro");
            toast.error( "Folder is not empty!!!" )
            return ele?.id === id
        }
        return ele?.id !== id
    });
    data.child.forEach((ele)=>  recursiveDelete( ele , id ) );
    
}



export const folder = {
    id: 1,
    isFolder: true,
    name: "root",
    child: [
      
    //   {
    //     id: 2,
    //     isFolder: false,
    //     name: "text.txt",
    //     child: [
    
    //     ],
    //   }
    //   ,


    //   {
    //     id: 22,
    //     isFolder: true,
    //     name: "f1",
    //     child: [
    
          
    
    //     ],
    //   }
    //   ,
    //   {
    //     id: 3,
    //     isFolder: true,
    //     name: "f3",
    //     child: [
    //       {
    //         id: 11,
    //         isFolder: true,
    //         name: "root",
    //         child: [
        
    //           {
    //             id: 234,
    //             isFolder: true,
    //             name: "f1",
    //             child: [
            
    //               {
    //                 id: 541,
    //                 isFolder: true,
    //                 name: "root",
    //                 child: [
                
    //                   {
    //                     id: 5452,
    //                     isFolder: true,
    //                     name: "f1",
    //                     child: [
                    
                          
                    
    //                     ],
    //                   }
    //                   ,
    //                   {
    //                     id: 3468,
    //                     isFolder: true,
    //                     name: "f3",
    //                     child: [
                    
                          
                    
    //                     ],
    //                   }
                
                
    //                 ],
    //               }
            
    //             ],
    //           }
    //           ,
    //           {
    //             id: 38465,
    //             isFolder: true,
    //             name: "f3",
    //             child: [
            
                  
            
    //             ],
    //           }
        
        
    //         ],
    //       }
          
    
    //     ],
    //   }


    ],
  }