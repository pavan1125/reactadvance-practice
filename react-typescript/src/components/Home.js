import React, { useState } from "react";
import Card from "./Card";
import { Await } from "react-router-dom";
import { useLoaderData, defer } from "react-router-dom";

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return defer({ data });
};
const Home = React.memo((props) => {
  const data = useLoaderData();
  return (
    <div>
      <React.Suspense fallback={<h1>Loading......</h1>}>
        <Await resolve={data.data}>
          {(resolvedData) => {
            return (
              <>
                {resolvedData.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
});
export default Home;
