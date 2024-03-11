import React from "react";
import Column from "./column";
import { TiInputChecked } from "react-icons/ti";
import Row from "./row";
import FormBanner from "./form-banner";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="min-h-24 bg-green-dark py-24 ">
      <div className="my-container">
        <Column className="text-white text-center gap-6">
          <div>
            <div className="text-2xl font-medium">{`Funds could be yours by the next business day*`}</div>
            <div>{`All Online With No Phone Calls`}</div>
          </div>
          <div>
            <FormBanner />
          </div>

          <Column className=" mx-auto">
            <Row gap={3}>
              <TiInputChecked size={25} />
              <div> Available for all credit types</div>
            </Row>
            <Row gap={3}>
              <TiInputChecked size={25} />
              <div> Money straight to your bank</div>
            </Row>
            <Row gap={3}>
              <TiInputChecked size={25} />
              <div> Safe, secure and reliable</div>
            </Row>
          </Column>
        </Column>
      </div>
    </div>
  );
};

export default Banner;
