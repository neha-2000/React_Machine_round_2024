import { useState } from "react";
import { ShoppingCartState } from "../context/context";
const Home = () => {
  const [page, setPage] = useState(1);

  const { state } = ShoppingCartState();
  console.log("page,",state?.products?.length)

  const selectPageHandler=(selectedPage)=>{
    if(selectedPage >= 1 && selectedPage<=state?.products?.length && selectedPage!==page){
      setPage(selectedPage)
    }
    
  }
  return (
    <div>
      <div className="container">
        {state?.products?.slice(page * 10 - 10, page * 10).map((item) => (
          <div key={item.id} className="box">
            <img src={item.thumbnail} alt="all" />
            <span className="title">{item.title}</span>{" "}
          </div>
        ))}
      </div>
      {
        state?.products?.length > 0 && <div className="pagination">
           <span 
           onClick={()=>{
            selectPageHandler(page-1)
          }}
           >⏮️</span>
           {[...Array(state?.products?.length/10)].map((_,index)=>{
                return  <span key={index}
                className={page===index+1 ? "pagination_selected":""}
                onClick={()=>{
                  selectPageHandler(index+1)
                }}> {index+1}</span>
           })}
           <span  onClick={()=>{
            selectPageHandler(page+1)
          }}>⏭️</span>
        </div>
      }
    </div>
  );
};

export default Home;
