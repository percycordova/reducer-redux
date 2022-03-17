import React from "react";

const Resumen = ({ cart, setShowResumen }) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div className="mt-5 mb-5 border p-2 sm: p-4 position-relative mx-auto resumen" style={{
      maxWidth: "600px",
    }}>
      <p
        className="position-absolute btn btn-danger"
        style={{ right: "2px", top: "2px" }}
        onClick={() => setShowResumen(false)}
      >
        -
      </p>
      <h2 className="mb-5 d-inline-block  " style={{borderBottom:'.12rem solid gray',paddingBottom:'1rem'}}>Total a Pagar</h2>

      <div className="d-flex justify-content-between align-items-center ">
        <p >
          Productos <span style={{ fontWeight: "bold" }}>({cart.length})</span>
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>$ {total}</p>
      </div>
      <ul className="list-group list-group-flush  ">
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between px-2 py-3 align-items-start"
            key={item.id}
          >
            <div className="d-flex gap-1 justify-content-between align-items-center">
              <img
                src={item.img}
                alt="img"
                width={100}
                height={70}
                className=""
              />
              <div className="">
                <h6
                  className=""
                  style={{
                    fontSize: ".9rem",
                  }}
                >
                  {item.name}
                </h6>
                <p className="text-danger" style={{ fontWeight: "bold", fontSize: ".85rem", }}>
                  $ {item.price}
                </p>
              </div>
            </div>
            <div className=" mt-1">
              <p
                style={{
                  fontSize: ".9rem",
                }}
              >
                código: <span style={{ fontWeight: "600" }}>0{item.id}</span>{" "}
              </p>
              <p
                className=""
                style={{
                  textAlign: "right",
                  fontSize: ".7rem",
                  marginTop: "-13px",
                }}
              >
                {item.count} un.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resumen;
