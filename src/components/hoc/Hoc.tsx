import React, { useState, useEffect } from "react";

const Hoc = (WrappedComponenet: any, entity: any) => {
  return function NewComponenet() {
    const [state, setState] = useState({ data: [], term: "" });

    useEffect(() => {
      const fetchdata = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        setState({ ...state, data: json });
      };
      fetchdata();
    }, []);

    let { term, data } = state;

    let filteredData = data.slice(0, 10).filter((d: any) => {
      if (entity === "users") {
        const { name } = d;
        return name.indexOf(term) >= 0;
      }
      if (entity === "todos") {
        const { title } = d;
        return title.indexOf(term) >= 0;
      }
    });

    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setState({ ...state, term: e.target.value })}
        />
        <WrappedComponenet data={filteredData} />
      </div>
    );
  };
  //   return NewComponenet;
};
export default Hoc;
