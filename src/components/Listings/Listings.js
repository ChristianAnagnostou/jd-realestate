import React, { useState } from "react";
// Util
import ListingData from "./ListingsData";
import ScrollTop from "../ScrollTop";

function Listings() {
  const [filteredData, setFilteredData] = useState(ListingData());

  const filterListingData = (status) => {
    setFilteredData(
      ListingData().filter((data) => {
        return data.status === status;
      })
    );
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="ListingsPage">
      <ScrollTop />
      <h1>LISTINGS</h1>
      <div className="tabs">
        <div className="tab" onClick={() => setFilteredData(ListingData())}>
          All
        </div>
        <div className="tab" onClick={() => filterListingData("active")}>
          Active
        </div>
        <div className="tab" onClick={() => filterListingData("exclusive")}>
          Exclusive
        </div>
        <div className="tab" onClick={() => filterListingData("sold")}>
          Sold
        </div>
      </div>
      <div className="active-listings">
        {filteredData.map((listing) => {
          return (
            <div className="listing">
              <div className="listing-img">
                <p className="listing-status-banner">{listing.status}</p>
                <img src={listing.imgSrc} alt={listing.address} />
              </div>
              <div className="listing-info">
                <h1>{listing.location}</h1>
                <h2>{listing.address}</h2>
                <div className="listing-specs">
                  <div>
                    <p>{listing.beds}</p>
                    <p>BEDS</p>
                  </div>
                  <div>
                    <p>{listing.baths}</p>
                    <p>BATHS</p>
                  </div>
                  <div>
                    <p>{numberWithCommas(listing.sq_ft_lot)}</p>
                    <p>SQ FT LOT</p>
                  </div>
                </div>
                <div className="price">
                  <p>${numberWithCommas(listing.price)}</p>
                  <div className="details">DETAILS</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Listings;
