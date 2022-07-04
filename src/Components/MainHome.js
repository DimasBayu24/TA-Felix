import React, { useEffect, useState } from "react";
import Header from "./Header";
import TopCities from "./TopCities";
import HeadoutPicks from "./Picks";
import Collections from "./Collections";
import Download from "./Download";
import Media from "./Media";
import Footer from "./footer";
import "./Styles/main-home.css";
import UserService from "../services/user.service";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "../App.css";
import { Dropdown, Menu, Space, message } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { FormText } from "react-bootstrap";
import history from "../history";

const MainHome = () => {
  const [collection, setCollection] = useState(undefined);
  const [cities, setCities] = useState(undefined);
  const [pick, setPick] = useState(undefined);
  const [itemPick, setItemPick] = useState([]);
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    console.log("ini apa ", key);
  };
  useEffect(() => {
    // window.scrollTo(0, 0);
    UserService.getPublicContent().then(
      (response) => {
        setCollection(response.data);
        // this.setState({ collection: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
    UserService.getCities().then(
      (response) => {
        setCities(response.data);
        let allData = [];
        for (let i = 0; i < response.data.length; i++) {
          console.log("ini apa woi", response.data[i]);
          let pickData = {
            label: response.data[i].Place,
            key: response.data[i].Place,
          };
          allData = [...allData, pickData];
          // this.setState({
          //   itemPick: [...this.state.itemPick, pickData],
          // });
        }
        setItemPick(allData);
        console.log("apakah ada adik ", allData);
        // this.setState({ collection: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
    UserService.getPicks().then(
      (response) => {
        setPick(response.data);
        // this.setState({ pick: response.data });
        console.log("ini apa woi", response.data);
        console.log("ini apa woi", response.data.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="App">
      <Header
        backgroundImagesData={backgroundImagesData}
        // history={this.props.history}
        navigationData={HeaderNavData}
      />
      {/* <p id="external">
      {" "}
      <span role="img" aria-label="Warn">
        👷
      </span>{" "}
      Currently Building{" "}
      <span role="img" aria-label="Warn">
        🛠💪🔧
      </span>{" "}
      New York City{" "}
      <span role="img" aria-label="Warn">
        🌆
      </span>{" "}
      <span role="img" aria-label="Warn">
        🦇
      </span>
    </p> */}
      {/* <TopCities /> */}
      <div style={{ marginTop: 115 }} />
      <Link to="/custom-destination">
        <Button type="primary">Pick your custom destination</Button>
      </Link>
      <HeadoutPicks
        pickedData={pick ? pick : pickedData}
        headline={"Headout Picks"}
      />
      <div style={{ justifyContent: "left" }}>
        {/* <Dropdown overlay={<Menu onClick={onClick} items={itemPick} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Select your destination
              <DownOutlined />
            </Space>
          </a>
        </Dropdown> */}
      </div>
      <Collections
        collectionsData={collection ? collection : collectionsData}
      />
      <Download />
      <Media />
      <Footer />
    </div>
  );
};

// class MainHome extends Component {
//   constructor(props) {
//     super(props);
//     // Don't do this!
//     this.state = { collection: undefined, pick: undefined, itemPick: [] };
//   }

//   componentDidMount() {
//     window.scrollTo(0, 0);
//     UserService.getPublicContent().then(
//       (response) => {
//         this.setState({ collection: response.data });
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//     UserService.getPicks().then(
//       (response) => {
//         this.setState({ pick: response.data });
//         console.log("ini apa woi", response.data);
//         console.log("ini apa woi", response.data.length);
//         for (let i = 0; i < response.data.length; i++) {
//           console.log("ini apa woi", response.data[i]);
//           let pickData = {
//             key: i + 1,
//             label: (
//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://www.antgroup.com"
//               >
//                 {response.data[i].DestinationCity}
//               </a>
//             ),
//           };
//           this.setState({
//             itemPick: [...this.state.itemPick, pickData],
//           });
//         }
//         console.log("aakah ada adik ", this.state.itemPick);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
//   onClickDestination = ({ key }) => {
//     console.log(key);
//   };
//   render() {
//     return (
//       <div className="App">
//         <Header
//           backgroundImagesData={backgroundImagesData}
//           history={this.props.history}
//           navigationData={HeaderNavData}
//         />
//         {/* <p id="external">
//           {" "}
//           <span role="img" aria-label="Warn">
//             👷
//           </span>{" "}
//           Currently Building{" "}
//           <span role="img" aria-label="Warn">
//             🛠💪🔧
//           </span>{" "}
//           New York City{" "}
//           <span role="img" aria-label="Warn">
//             🌆
//           </span>{" "}
//           <span role="img" aria-label="Warn">
//             🦇
//           </span>
//         </p> */}
//         {/* <TopCities /> */}
//         <div style={{ marginTop: 115 }} />
//         <HeadoutPicks
//           pickedData={this.state.pick ? this.state.pick : pickedData}
//           headline={"Headout Picks"}
//         />
//         <div style={{ justifyContent: "left" }}>
//           <Dropdown
//             overlay={
//               <Menu
//                 onClick={() => this.onClickDestination}
//                 items={
//                   this.state.itemPick.length != 0 ? this.state.itemPick : []
//                 }
//               />
//             }
//           >
//             <a onClick={(e) => e.preventDefault()}>
//               <Space>
//                 Pick your own destination
//                 <DownOutlined />
//               </Space>
//             </a>
//           </Dropdown>
//         </div>
//         <Collections
//           collectionsData={
//             this.state.collection ? this.state.collection : collectionsData
//           }
//         />
//         <Download />
//         <Media />
//         <Footer />
//       </div>
//     );
//   }
// }

// Caraousel Images for Home

const backgroundImagesData = [
  {
    id: 1,
    url:
      "https://cdn-imgix-open.headout.com/desktop-flaps/cashback-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min",
  },
  {
    id: 2,
    url:
      "https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min",
  },
  {
    id: 3,
    url:
      "https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?auto=compress&fm=webp&h=501&crop=faces&fit=min",
  },
];

// Header Navigation Data

const HeaderNavData = [
  {
    id: 1,
    name: "Headout Picks",
  },
  {
    id: 2,
    name: "Best Sellers",
  },
  {
    id: 3,
    name: "Abu Dhabi City Tours",
  },
  {
    id: 4,
    name: "Amsterdam Attractions",
  },
  {
    id: 5,
    name: "Burj Khalifa",
  },
];

// Currently using this Data for Headout Top Picks

const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: "$",
    stars: 4.6,
    ratings: 681,
    city: "NEW YORK",
    description: "The Phantom of the Opera",
    url:
      "https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: "$",
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    city: "NEW YORK",
    description: "Aladdin",
    url:
      "https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
  {
    id: 3,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: "$",
    discount: 49,
    city: "NEW YORK",
    description: "King Kong - Broadway Week Discount",
    url:
      "https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
  {
    id: 4,
    currentPrice: 141,
    lastPrice: 146,
    currency: "AED",
    discount: 16,
    stars: 4.6,
    ratings: 2588,
    cashback: 5,
    city: "DUBAI",
    description: "Burj Khalifa: At the Top (Level 124 & 125)",
    url:
      "https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
  {
    id: 5,
    currentPrice: 196,
    lastPrice: 206,
    currency: "AED",
    discount: 8,
    stars: 4.6,
    ratings: 1240,
    cashback: 5,
    city: "DUBAI",
    description: "Dubai Acquarium & Underwater Zoo + Burj Khalifa Combo",
    url:
      "https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
  {
    id: 6,
    currentPrice: 20,
    currency: "€",
    stars: 4.6,
    ratings: 437,
    city: "PARIS",
    description:
      "Palace of Versailles All Access Passport Entry with Audioguide",
    url:
      "https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
  {
    id: 7,
    currentPrice: 31,
    lastPrice: 45,
    currency: "€",
    discount: 31,
    stars: 4.6,
    ratings: 474,
    cashback: 10,
    city: "PARIS",
    description: "Skip The Line: Eiffel Tower Tickets with Host",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
  },
];

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: "City Tours",
    url:
      "https://cdn-imgix.headout.com/category/349/image/49d50732-f94b-4027-9dfd-58891e960a96-hong-kong-city-tour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 2,
    description: "Abu Dhabi City Tours",
    url:
      "https://cdn-imgix.headout.com/category/152/abu-dhabi/image/daytour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 3,
    description: "Amsterdam Attractions",
    url:
      "https://cdn-imgix.headout.com/category/177/amsterdam/image/Amsterdam-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 4,
    description: "Burj Khalifa",
    url:
      "https://cdn-imgix.headout.com/category/158/dubai/image/Dubai-Khalifa.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 5,
    description: "Museums & Art Galleries",
    url:
      "https://cdn-imgix.headout.com/category/510/image/a2c6da57-3994-4910-97ad-abe2b9b31a65-uffizi-gallery-hallway.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 6,
    description: "Alhambra",
    url:
      "https://cdn-imgix.headout.com/category/1449/image/f1b8a5ab-ffa6-47a4-a50e-e96bd92b64a5-willian-justen-de-vasconcellos-499722-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 7,
    description: "Hong Kong Attractions",
    url:
      "https://cdn-imgix.headout.com/category/348/image/7a5e9926-9f14-45aa-b915-23c5bc9e1a17-hong-kong-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 8,
    description: "Entrainment Shows",
    url:
      "https://cdn-imgix.headout.com/category/49/image/9bf7c5aa-9012-4687-9ada-ecf7ba26048a-49-las-vegas-aerial-01.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 9,
    description: "London Attractions",
    url:
      "https://cdn-imgix.headout.com/category/168/london/image/london-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 10,
    description: "Madrid Attractions",
    url:
      "https://cdn-imgix.headout.com/category/201/madrid/image/Madrid-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 11,
    description: "Last Supper",
    url:
      "https://cdn-imgix.headout.com/category/1178/image/61c6d18d-36c0-4537-863f-efc8a0a1b24c-the-last-supper.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 12,
    description: "Neuschwanstein",
    url:
      "https://cdn-imgix.headout.com/category/1520/image/206de694-146f-4bc9-8fa1-d77074da8b7e-nikita-semerenko-776957-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 13,
    description: "Pompeii",
    url:
      "https://cdn-imgix.headout.com/category/1223/image/3f77a082-970d-43df-bc5d-7e6e301925c6-pompeii.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 14,
    description: "Broadway Show Tickets",
    url:
      "https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 15,
    description: "Weekend in Prague",
    url:
      "https://cdn-imgix.headout.com/category/1219/image/a49bbc22-258b-48c0-93fe-c7fdf9a8c65a-city.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 16,
    description: "Vatican",
    url:
      "https://cdn-imgix.headout.com/category/189/image/e16239ea-0531-4a95-9c18-ced64eb08d54-nicolas-hoizey-408661-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
];

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

export default MainHome;
