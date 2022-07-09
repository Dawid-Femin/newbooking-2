import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              
              src="https://static.wixstatic.com/media/a506d9_0eac1c7e1b7146b2ab2504d8c2e8f852~mv2.jpg/v1/fill/w_640,h_480,fp_0.60_0.54,q_80,usm_0.66_1.00_0.01,enc_auto/a506d9_0eac1c7e1b7146b2ab2504d8c2e8f852~mv2.jpg"
              alt="Berlin"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} hotele</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Plaza_de_Col%C3%B3n_%28Madrid%29_06.jpg/640px-Plaza_de_Col%C3%B3n_%28Madrid%29_06.jpg" 
              alt="Madrid"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madryt</h1>
              <h2>{data[1]} hotele</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://brintstudio.com/wp-content/uploads/2020/04/London-Bridge-640x480.jpg"
              alt="London"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Londyn</h1>
              <h2>{data[2]} hoteli</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
