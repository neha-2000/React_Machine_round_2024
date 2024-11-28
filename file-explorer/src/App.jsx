import { useState } from 'react'
import './App.css'
import explorer from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hook/use-traverse-tree';
import Folder2 from "./new/Folder2"

function App() {
  const{insertNode}=useTraverseTree();
  const [explorerData, setexplorerData] = useState(explorer);

  const handleInsertNode=(folderId,item,isFolder)=>{
    const finalTree=insertNode(explorerData,folderId,item,isFolder);
    setexplorerData(finalTree);


  }

  function insertNode2(obj,floderId,name,isFolder){
    console.log("obj",obj)
    if(obj.id===floderId ){
        let mewobj={
            id:new Date().getTime(),
            name:name,
            isFolder:isFolder,
            items:[]
        }
        obj.items.unshift(mewobj)

        
        return obj
    }

    let latestNode=[]
    latestNode=obj.items.map((ob)=>{
      return insertNode2(ob,floderId,name,isFolder)
  })

  return {...obj,items:latestNode}

   

 }

 function handleInsertCustom(folderId,name,isFolder){
  let newvals=  insertNode2(explorerData,folderId,name,isFolder)
  setexplorerData(newvals);

 }


 
console.log(explorerData)
  return (
    <>
      <h1>Folder 2</h1>
      <Folder2 explorerData={explorerData} handleInsertCustom={handleInsertCustom} />
      <h1>Folder 1</h1>
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode}/>
    </>
  )
}

export default App
