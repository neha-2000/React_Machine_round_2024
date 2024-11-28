import { useState } from "react";

const Folder = ({ explorerData, handleInsertNode }) => {

  const [expand, setexpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: true,
    
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder,
    });
    setexpand(true);
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorerData?.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div
          className="folder"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setexpand(!expand);
          }}>

          <span>📂{explorerData?.name}</span>
         
          <div>
            <button
              onClick={(e) => {
                handleNewFolder(e, true);
              }}> Folder + </button>

            <button
              onClick={(e) => {
                handleNewFolder(e, false);
              }}> File + </button>

          </div>
        </div>

        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.visible && (
            <div style={{ marginLeft: "20px" }}>
              {showInput.isFolder ? <span>📂</span> : <span>📄 </span>}
              <input
                type="text"
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
                onKeyDown={onAddFolder}
                autoFocus
              />
            </div>
          )}

          {explorerData?.items?.map((exp,index) => {
            return (
              <div style={{ marginLeft: "20px" }}  key={exp.id}>
                <Folder
                  key={exp.id}
                  explorerData={exp}
                  handleInsertNode={handleInsertNode}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="file">📄 {explorerData.name}</div>;
  }
};

export default Folder;
