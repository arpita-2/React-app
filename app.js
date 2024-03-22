import React from "react";
import  ReactDOM from "react-dom/client";

//making a header component/ functional component-react component
/**
 * logo inside header div
 * navigation bar
 */

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"></img>
            </div>

            <div className="navigation-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Offers</li>
                      <li>Cart</li>
                </ul>

            </div>
    </div>
);

/**
 * Restaurant card
 * -img
 * -name of restro
 * star rating with time
 * about the food, whether it is chinese or indian etc.
 */

//copied data of a restaurant basically it is a backend work but we should know what componenets to show in frontend through the available data
const resobj = {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Meghana's Foods",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "aqsnrylokzpn45qhg1pb",
      cuisines: ["Biryani, Kebabs, Tandoori"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  }




//making a restaurant card component to reuse it again and again
//prop is an object over here. It is an js object
//in src, we have done string concaetination
const RestaurantCard = (props) => {
    const {resData} = props;
    return (
    <div className="res-card">
        <img className="res-img"
        src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            resData.data.cloudinaryImageId
          }
    />

    <h3>{resData.data.name}</h3>
    <h4>{resData.data.cuisines}</h4>
    <h4>{resData.data.avgRating}</h4>
    <h4>{resData.data.costForTwo / 100}</h4>
    <h4>{resData.data.deliveryTime} minutes</h4>
    </div> 
    );  
};



//making a body
//making dynamic  restaurant card
/**
 * In dyynamic restaurant card we get data 
 * resObj is the data and resData is the prop which is the unique key
 *We are mapping resObj array and passing data to RestaurantCard component as props with unique key as index
 *Whatever we are passing on resData key will go as a prop in RestaurantCard component. resObj is a javascript object.

 */

const Body = () => (
<div className="body">
    <div className="search">
        search
    </div>

    <div className="restaurant-container">
    <RestaurantCard
    resData = {resobj}/>



    </div>
</div>
)

//making a app layout component/ react componenet

const AppLayout = () => (
    <div className="app">
        {Header()}
        {Body()}

    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

