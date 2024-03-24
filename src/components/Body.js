
//making a body
//making dynamic  restaurant card
/**
 * In dyynamic restaurant card we get data 
 * resObj is the data and resData is the prop which is the unique key
 *We are mapping resObj array and passing data to RestaurantCard component as props with unique key as index
 *Whatever we are passing on resData key will go as a prop in RestaurantCard component. resObj is a javascript object.

 */

 /**
  * now to show the restaurant list dynamically we have to use map function to loop over array
  * resList is an array of restaurants details
  * using map function to loop over
  * now for each "restaurant, we have to return restaurant card"
  * now want to pass the data dynamically to the restaurant
  */

 /**
  * 
  *  
  */

 const Body = () => (
    <div className="body">
        <div className="search">
            search
        </div>
    
        <div className="restaurant-container">
        
        {resList.map(
            (restaurant) => (<RestaurantCard key = {restaurant.data.id}
              resData = {restaurant} />
            )
    )}
    
    
    
        </div>
    </div>
    )
    