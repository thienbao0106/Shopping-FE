/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type ListComponentProps = {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
  className?: string;
};

const ListComponent = ({ data, renderItem, className }: ListComponentProps) => {
  return (
    <main className={className}>{data.map((item) => renderItem(item))}</main>
  );
};

export default ListComponent;
