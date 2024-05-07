export const ADD_TO_PREFERITI = "ADD_TO PREFERITI";
export const REMOVE_PREFERITI = "REMOVE_PREFERITI";
export const GET_COMPANY = "GET_COMPANY";

export const removePreferitiAction = (i) => ({
  type: REMOVE_PREFERITI,
  payload: i,
});

export const aggiungiPreferitiAction = (data) => ({
  type: ADD_TO_PREFERITI,
  payload: data,
});

export const fetchData = (data_company) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" + data_company
      );
      if (response.ok) {
        let fetched = await response.json();
        dispatch({ type: GET_COMPANY, payload: fetched });
      } else {
        console.log("errore");
        throw new Error("Errore nel reperimento dei dati, Riprova più Tardi");
      }
    } catch (error) {}
  };
};
