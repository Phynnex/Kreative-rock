import Wallet1 from "../../../assets/images/earning/Wallet1.png";
import Wallet2 from "../../../assets/images/earning/Wallet2.png";
import Wallet3 from "../../../assets/images/earning/Wallet3.png";

const FundWallet = () => {
  return (
    <>
      <div style={{ margin: "2rem 4rem 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img src={Wallet1} alt="" />
            </div>
            <div style={{ marginLeft: ".5rem" }}>
              <p style={{ marginBottom: "-.2rem" }}>
                Lorem ipsum dolor sit amet.
              </p>
              <p>21.01.2021 3pm</p>
            </div>
          </div>
          <div>
            <p>$25</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img src={Wallet2} alt="" />
            </div>
            <div style={{ marginLeft: ".5rem" }}>
              <p style={{ marginBottom: "-.2rem" }}>
                Lorem ipsum dolor sit amet.
              </p>
              <p>21.01.2021 3pm</p>
            </div>
          </div>
          <div>
            <p>$25</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img src={Wallet3} alt="" />
            </div>
            <div style={{ marginLeft: ".5rem" }}>
              <p style={{ marginBottom: "-.2rem" }}>
                Lorem ipsum dolor sit amet.
              </p>
              <p>21.01.2021 3pm</p>
            </div>
          </div>
          <div>
            <p>$25</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundWallet;
