import { useState } from "react";

const Folder2 = ({ explorerData ,handleInsertCustom}) => {
  const [expand, setexpand] = useState(false);
  const[selectInput,setselectedInput]=useState({
    visible:false,
    isFolder:true
  })
 const handleFolderSelector=(e,isFolder)=>{
    e.stopPropagation();
    setselectedInput((prev=>{
        return {
            ...prev,
            visible:true,
            isFolder
        
        }       
    }))
    setexpand(true);
 }

 const handlenodeInsert=(e)=>{
    if(e.keyCode==13 && e.target.value){
        let name=e.target.value;

        setselectedInput((prev=>{
            return {
                ...prev,
                visible:false,
               
            
            }       
        }))
        handleInsertCustom(explorerData.id,name,selectInput.isFolder)

    }

 }

 const handleClear=(e)=>{
    setselectedInput((prev=>{
        return {
            ...prev,
            visible:false,    
        }
       
    }))
 }


  return (
    <div>
      <div
        onClick={() => {
          setexpand(!expand);
        }}
        className="folder"         
        style={{ cursor: "pointer" }}>

        {explorerData.isFolder ? "📂" : "📄"} {explorerData.name}

        <div>
            <button onClick={(e)=>{handleFolderSelector(e,true)}} style={{border:"none",background:"none",cursor:'pointer'}}>📂+</button>
            <button onClick={(e)=>{handleFolderSelector(e,false)}} style={{border:"none",background:"none",cursor:'pointer'}}>📄+</button>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", cursor: "pointer" }}>
        {selectInput.visible && (<div style={{marginLeft:'20px'}}>
            {selectInput.isFolder ? "📂" : "📄"} 
            <input 
            autoFocus
            onKeyDown={(e)=>{handlenodeInsert(e)}}
            onBlur={(e)=>{handleClear(e)}}
            />
        </div>)}
        {explorerData.items.map((item) => {
          return (
            <div style={{marginLeft:'20px'}} key={item.id}>
              {/* {item.isFolder ? "📂" : "📄"} {item.name} */}
              <Folder2 explorerData={item} handleInsertCustom={handleInsertCustom} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder2;
