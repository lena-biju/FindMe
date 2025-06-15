import React, { useContext } from 'react';
import Header from '../components/Header';
import { Cardcontext } from '../contexts/CardsContext';
import './Details.css';
const Details = () => {
    const {card}=useContext(Cardcontext)
    return (
      <div class="websiteBody">
        {card?
      <div class="Page-outer">
    <div
      id="Page"
      data-name="Page"
      class="Page"
    >
      <div class="Frame-outer">
      <div
        id="Frame"
        data-name="Desktop - 1"
        class="Frame"
      >
        <div class="Rectangle-15-outer">
        <div
          id="Rectangle-15"
          data-name="Rectangle 15"
          alt="Rectangle 15"
          class="Rectangle-15"
        >
        </div>
        </div>
        <div class="Rectangle-16-outer">
        <div
          id="Rectangle-16"
          data-name="Rectangle 16"
          alt="Rectangle 16"
          class="Rectangle-16"
        >
        </div>
        </div>
        <div class="NAME-outer">
        <div
          id="NAME"
          data-name="NAME"
          class="NAME"
        ><div key="0">{card.firstname+' '+card.lastname}</div>
        </div>
        </div>
        <div class="q2023-09-14-outer">
        <div
          id="q2023-09-14"
          data-name="2023/09/14"
          class="q2023-09-14"
        ><div key="0">{card.reportingdate}</div>
        </div>
        </div>
        <div class="Missing-From-outer">
        <div
          id="Missing-From"
          data-name="Missing From"
          class="Missing-From"
        ><div key="0">Missing From</div>
        </div>
        </div>
        <div class="Age-outer">
        <div
          id="Age"
          data-name="Age"
          class="Age"
        ><div key="0">{card.age}</div>
        </div>
        </div>
        <div class="Age-1-outer">
        <div
          id="Age-1"
          data-name="Age"
          class="Age-1"
        ><div key="0">Age</div>
        </div>
        </div>
        <div class="Line-3-outer">
        <div
          id="Line-3"
          data-name="Line 3"
          alt="Line 3"
          class="Line-3"
        >
        </div>
        </div>
        <div class="Gender-outer">
        <div
          id="Gender"
          data-name="Gender"
          class="Gender"
        ><div key="0">{card.gender}</div>
        </div>
        </div>
        <div class="Gender-1-outer">
        <div
          id="Gender-1"
          data-name="Gender"
          class="Gender-1"
        ><div key="0">Gender</div>
        </div>
        </div>
        <div class="Line-2-outer">
        <div
          id="Line-2"
          data-name="Line 2"
          alt="Line 2"
          class="Line-2"
        >
        </div>
        </div>
        <div class="Key-Features-outer">
        <div
          id="Key-Features"
          data-name="Key Features"
          class="Key-Features"
        ><div key="0">{card.region}</div>
        </div>
        </div>
        <div class="Key-Features-1-outer">
        <div
          id="Key-Features-1"
          data-name="Key Features"
          class="Key-Features-1"
        ><div key="0">Region</div>
        </div>
        </div>
        <div class="Line-1-outer">
        <div
          id="Line-1"
          data-name="Line 1"
          alt="Line 1"
          class="Line-1"
        >
        </div>
        </div>
        <div class="Height-outer">
        <div
          id="Height"
          data-name="Height"
          class="Height"
        ><div key="0">{card.height}</div>
        </div>
        </div>
        <div class="Height-1-outer">
        <div
          id="Height-1"
          data-name="Height"
          class="Height-1"
        ><div key="0">Height</div>
        </div>
        </div>
        <div class="Line-4-outer">
        <div
          id="Line-4"
          data-name="Line 4"
          alt="Line 4"
          class="Line-4"
        >
        </div>
        </div>
        <div class="Weight-outer">
        <div
          id="Weight"
          data-name="Weight"
          class="Weight"
        ><div key="0">{card.weight}</div>
        </div>
        </div>
        <div class="Weight-1-outer">
        <div
          id="Weight-1"
          data-name="Weight"
          class="Weight-1"
        ><div key="0">Weight</div>
        </div>
        </div>
        <div class="Line-5-outer">
        <div
          id="Line-5"
          data-name="Line 5"
          alt="Line 5"
          class="Line-5"
        >
        </div>
        </div>
        <div class="Skin-Colour-outer">
        <div
          id="Skin-Colour"
          data-name="Skin Colour"
          class="Skin-Colour"
        ><div key="0">{card.color}</div>
        </div>
        </div>
        <div class="Skin-Colour-1-outer">
        <div
          id="Skin-Colour-1"
          data-name="Skin Colour"
          class="Skin-Colour-1"
        ><div key="0">Skin Colour</div>
        </div>
        </div>
        <div class="Line-6-outer">
        <div
          id="Line-6"
          data-name="Line 6"
          alt="Line 6"
          class="Line-6"
        >
        </div>
        </div>
        <div class="Last-Seen-outer">
        <div
          id="Last-Seen"
          data-name="Last Seen"
          class="Last-Seen"
        ><div key="0">{card.lastseen}</div>
        </div>
        </div>
        <div class="Last-Seen-1-outer">
        <div
          id="Last-Seen-1"
          data-name="Last Seen"
          class="Last-Seen-1"
        ><div key="0">Last Seen</div>
        </div>
        </div>
        <div class="Line-7-outer">
        <div
          id="Line-7"
          data-name="Line 7"
          alt="Line 7"
          class="Line-7"
        >
        </div>
        </div>
        <div class="Description-1-outer">
        <div
          id="Description-1"
          data-name="Description"
          class="Description-1"
        ><div key="0">Description</div>
        </div>
        </div>
        <div class="Description-outer">
        <div
          id="Description"
          data-name="Description"
          class="Description"
        ><div key="0">{card.description}</div>
        </div>
        </div>
        <div class="Line-8-outer">
        <div
          id="Line-8"
          data-name="Line 8"
          alt="Line 8"
          class="Line-8"
        >
        </div>
        </div>
        <div class="Line-10-outer">
        <div
          id="Line-10"
          data-name="Line 10"
          alt="Line 10"
          class="Line-10"
        >
        </div>
        </div>
        <div class="Line-9-outer">
        <div
          id="Line-9"
          data-name="Line 9"
          alt="Line 9"
          class="Line-9"
        >
        </div>
        </div>
        <div class="image-1-outer">
        <img
          id="image-1"
          data-name="image 1"
          alt="image 1"
          class="image-1"
          src={card.url}
        />
        </div>
      </div>
      </div>
    </div>
      
    </div>:window.location.replace('/')
}
    </div>
        
    );
}

export default Details;
