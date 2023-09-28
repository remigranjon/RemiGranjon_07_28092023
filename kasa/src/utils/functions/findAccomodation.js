import data from "../../assets/data/logements.json";

const findAccomodation = (id) => {
  for (const accomodation of data) {
    if (accomodation.id === id) {
      return accomodation;
    }
  }
  return false;
};

export default findAccomodation;
