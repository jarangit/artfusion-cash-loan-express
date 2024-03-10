import React from "react";
import Column from "./column";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="min-h-24 bg-green-dark py-24 ">
      <div className="my-container">
        <Column className="text-white text-center gap-6">
          <div>
            <div className="text-2xl font-bold">{`Funds could be yours by the next business day*`}</div>
            <div>{`All Online With No Phone Calls`}</div>
          </div>
          <div>FORM</div>

          <Column>
            <div> Available for all credit types</div>
            <div> Money straight to your bank</div>
            <div> Safe, secure and reliable</div>
          </Column>
        </Column>
      </div>
    </div>
  );
};

export default Banner;
