import { fetchImages } from "../Api/fetchImages";
import { useEffect, useState } from "react";

import Form from "./From";
import Gallery from "./Gallery";

const Main = () => {
  const [urls, setUrls] = useState(null);
  const [breed, setBreed] = useState("shiba");
  
  useEffect(() => {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }, [breed]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form setBreed={setBreed} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
};

export default Main;
