import { Loader, Tabs } from "components";
import { SearchPanel } from "modules";
import { useEffect, useState } from "react";
import { OrderListElement } from "types";
import { OrderCard } from "./components";
import "./Orders.scss";

export const Orders = () => {
  const [orders, setOrders] = useState<OrderListElement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getList = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/orders/list`
        );
        const json = await response.json();
        setOrders(json);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      }
    };

    getList();
  }, []);

  return (
    <div className="orders">
      <SearchPanel />
      <Tabs />
      {isLoading || isError ? (
        <Loader />
      ) : (
        <div className="orders__list-container">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};
