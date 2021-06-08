import React, { useState } from "react";

export default function Exercises() {
  // const [USD, setUSD] = useState(null);
  // const [MXN, setMXN] = useState(null);

  //   return (
  //     <div className="container h-100">
  //       <div className="row h-100 justify-content-center align-items-center">
  //         <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
  //           <div className="col p-5">
  //             <form>
  //               <div className="form-group col-12">
  //                 <label className="text-white" htmlFor="USDInput">
  //                   USD
  //                 </label>
  //                 <input
  //                   type="number"
  //                   className="form-control"
  //                   id="USDInput"
  //                   aria-describedby="emailHelp"
  //                   placeholder="Enter USD"
  //                   value={Number(USD)}
  //                   onChange={(event) => {
  //                     setUSD(event.target.value);
  //                     setMXN((event.target.value * 19.84).toFixed(2));
  //                   }}
  //                 />
  //               </div>
  //               <div className="form-group col-12">
  //                 <label className="text-white" htmlFor="MXNInput">
  //                   MXN
  //                 </label>
  //                 <input
  //                   type="number"
  //                   className="form-control"
  //                   id="MXNInput"
  //                   placeholder="Enter MXN"
  //                   value={Number(MXN)}
  //                   onChange={({ target: { value } }) => {
  //                     setUSD((value / 19.84).toFixed(2));
  //                     setMXN(value);
  //                   }}
  //                 />
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  const [Item1, setItem1] = useState();
  const [Item2, setItem2] = useState();
  const [Item3, setItem3] = useState();
  const [Item4, setItem4] = useState();
  const [Name, setName] = useState();
  const [Date, setDate] = useState();
  const [CVV, setCVV] = useState();

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center mt-5">
        <div className="col-md-5">
          <div className="card bg-primary mx-4">
            <div className="card-body">
              <h1 className="text-white text-end fw-bold p-4">VISA</h1>
              <h3 className="text-white text-center pb-2">
                {Item1}&nbsp;&nbsp;{Item2}&nbsp;&nbsp;{Item3}&nbsp;&nbsp;{Item4}
              </h3>
              <div className="d-flex justify-content-between px-4 pb-1">
                <h4 className="text-white text-center pt-3">&nbsp;{Name}</h4>
                <div>
                  <p className="text-white text-center pb-0 mb-0">Expira</p>
                  <p className="text-white text-center">&nbsp;{Date}</p>
                </div>
              </div>
              <h5 className="text-white text-end px-4">&nbsp;{CVV}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="bg-dark rounded">
            <div className="p-5">
              <form>
                <div className="form-group">
                  <label className="text-white" htmlFor="USDInput">
                    Número de tarjeta
                  </label>
                  <div className="d-flex">
                    <input
                      type="number"
                      className="form-control"
                      id="item1Input"
                      aria-describedby="nameHelp"
                      placeholder="****"
                      value={Number(Item1)}
                      onChange={(event) => {
                        setItem1(event.target.value);
                      }}
                    />
                    <h3 className="text-white">&nbsp;-&nbsp;</h3>
                    <input
                      type="number"
                      className="form-control"
                      id="item2Input"
                      aria-describedby="nameHelp"
                      placeholder="****"
                      value={Number(Item2)}
                      onChange={(event) => {
                        setItem2(event.target.value);
                      }}
                    />
                    <h3 className="text-white">&nbsp;-&nbsp;</h3>
                    <input
                      type="number"
                      className="form-control"
                      id="item3Input"
                      aria-describedby="nameHelp"
                      placeholder="****"
                      value={Number(Item3)}
                      onChange={(event) => {
                        setItem3(event.target.value);
                      }}
                    />
                    <h3 className="text-white">&nbsp;-&nbsp;</h3>
                    <input
                      type="number"
                      className="form-control"
                      id="item4Input"
                      aria-describedby="nameHelp"
                      placeholder="****"
                      value={Number(Item4)}
                      onChange={(event) => {
                        setItem4(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group col-12">
                  <label className="text-white" htmlFor="USDInput">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                    value={Name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>

                <div className="form-group col-12">
                  <label className="text-white" htmlFor="DateInput">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateInput"
                    aria-describedby="dateHelp"
                    value={Date}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                  />
                </div>

                <div className="form-group col-12">
                  <label className="text-white" htmlFor="USDInput">
                    CVV
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="CVVInput"
                    aria-describedby="cvvHelp"
                    placeholder="Enter CVV"
                    value={Number(CVV)}
                    onChange={(event) => {
                      setCVV(event.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
