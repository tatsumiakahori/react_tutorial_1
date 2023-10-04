import Loading from "../Parts/Loading";

const Gallery = (props) => {
  if (props.urls === null) {
    return <Loading />;
  }
  
  return (
    <div className="columns is-vcentered is-multiline">
      {props.urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
};

const Image = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="container">
          <img src={props.src} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
