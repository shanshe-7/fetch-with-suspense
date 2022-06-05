const BASE_URL = "https://swapi.dev/api/";

export async function getStarWarsCharacters(id) {
  const res = await fetch(`${BASE_URL}people/${id}`);
  return res.json();
}

export function suspensify(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      }

      if (status === "error") {
        throw result;
      }
      if (status === "success") {
        return result;
      }
    },
  };
}
