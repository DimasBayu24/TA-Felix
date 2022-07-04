import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(
    () => {
      setProduct(props.detail);
      console.log("detail ", Product);
    },
    [props.detail]
  );

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">
          {" "}
          {/* {Product.PricePackage} */}
        </Descriptions.Item>
        <Descriptions.Item label="Sold">tes</Descriptions.Item>
        <Descriptions.Item label="View"> tes</Descriptions.Item>
        <Descriptions.Item label="Description">
          {" "}
          {/* {Product.Description} */}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </Button> */}
      </div>
    </div>
  );
}

export default ProductInfo;
