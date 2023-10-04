import { getBreeds } from "../Api/getBreeds";
import { useEffect, useState } from "react";
import Loading from "../Parts/Loading";

const Form = (props) => {
  const [allBreeds, setAllBreeds] = useState(null);

  useEffect(() => {
    getBreeds().then((breeds) => {
      setAllBreeds(Object.keys(breeds));
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.setBreed(breed.value);
  };

  if (allBreeds == null) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="breed" defaultValue="shiba">
                {allBreeds.map((breed) => {
                  return (
                    <option value={breed} key={breed}>
                      {breed}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="controll">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
