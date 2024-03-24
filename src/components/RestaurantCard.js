//making a restaurant card component to reuse it again and again
//prop is an object over here. It is an js object
//in src, we have done string concaetination

/**
 * bunch of data is given as resList
 * now destructing the resData key to not write resData.data again and again by doing optional chaining
 * 
 */
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId, 
        name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
    <div className="res-card">
        <img className="res-img"
        src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            cloudinaryImageId
          }
    />

    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating}</h4>
    <h4>{costForTwo / 100}</h4>
    <h4>{deliveryTime} minutes</h4>
    </div> 
    );  
};
