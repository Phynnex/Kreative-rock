import FundWallet from "../components/Earning/FundWallet/FundWallet";
import PieChart from "../components/Earning/PieChart";
import TransactionTable from "../components/Earning/TransactionTable";

const Earning = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <h2>Wallet</h2>
      </div>
      <br />
      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px 64px",
        }}
      >
        <div>
          <h4>Wallet Balance</h4>
          <div
            style={{
              border: "2px solid #CFCFCF",
              background: "#fff",
              width: "435px",
              height: "350px",
              borderRadius: "10px",
            }}
          >
            <PieChart />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Fund Wallet</h4>
            <button>PAY NOW</button>
          </div>
          <div
            style={{
              border: "2px solid #CFCFCF",
              background: "#fff",
              width: "617px",
              height: "350px",
              borderRadius: "10px",
            }}
          >
            <FundWallet />
          </div>
        </div>
      </div>

      <div style={{ margin: "4rem 4rem 1rem" }}>
        <TransactionTable />
      </div>
    </>
  );
};

export default Earning;
