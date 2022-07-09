import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {<>
          <div className="pListItem">
            <img className='pListImg' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/97/46/9746632_v1.jpeg" alt="" />
            <div className="pListTitles">
                <h1>Hotele</h1>
                <h2>7 hoteli</h2>
            </div>
        </div>
          <div className="pListItem">
            <img className='pListImg' src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_360,q_auto,w_360/itemimages/35/28/3528776_v4.jpeg" alt="" />
            <div className="pListTitles">
                <h1>Apartamenty</h1>
                <h2>0 apartamentów</h2>
            </div>
        </div>
          <div className="pListItem">
            <img className='pListImg' src="https://img.holidu.com/images/2f386a67-0936-41ac-8222-d427eb719e66/t.jpg" alt="" />
            <div className="pListTitles">
                <h1>Wille</h1>
                <h2>0 willi</h2>
            </div>
        </div>
          <div className="pListItem">
            <img className='pListImg' src="https://www.willateresa.bialkatatrzanska.com/img/ph%3D280%2Cw%3D360//d/d0/d00/d009/4_1.jpg" alt="" />
            <div className="pListTitles">
                <h1>Domki letniskowe</h1>
                <h2>0 domków letniskowych</h2>
            </div>
        </div>
        </>}
        </>
      )}
    </div>
  );
};

export default PropertyList;
