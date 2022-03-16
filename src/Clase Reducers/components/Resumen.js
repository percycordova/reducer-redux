import React from "react";

const Resumen = ({ cart, setShowResumen }) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div className="mt-5 mb-5 border p-5 position-relative">
      <p
        className="position-absolute btn btn-danger"
        style={{ right: "2px", top: "2px" }}
        onClick={() => setShowResumen(false)}
      >
        -
      </p>
      <h2 className="mb-5">Total a Pagar</h2>

      <div className="d-flex justify-content-between align-items-center">
        <p>
          Productos <span style={{ fontWeight: "bold" }}>({cart.length})</span>
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>$ {total}</p>
      </div>
      <ul className="list-group list-group-flush">
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <div className="d-flex">
              <img
                src="https://f.rpp-noticias.io/2021/01/18/1047228202101121653257897jpg.jpg "
                alt="img"
                width={100}
                className=""
              />
              <div className="">
                <h6 className="">{item.name}</h6>
                <p className="text-danger" style={{ fontWeight: "bold" }}>
                  S/. {item.price}
                </p>
              </div>
            </div>
            <div>
              <p>
                código: <span style={{ fontWeight: "600" }}>00{item.id}</span>{" "}
              </p>
              <p
                className=""
                style={{
                  textAlign: "right",
                  fontSize: ".8rem",
                  marginTop: "-12px",
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
