import React from "react";

type SVGProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const SVGRightElement: React.FC<SVGProps> = ({ Icon }) => {
  return (
    <>
      <Icon className="page-content__rightFragment"></Icon>
    </>
  );
};

export default SVGRightElement;
