import Wallet1 from "../../../assets/images/earning/Wallet1.png";
import Wallet2 from "../../../assets/images/earning/Wallet2.png";
import Wallet3 from "../../../assets/images/earning/Wallet3.png";

const FundWallet = () => {
  return (
    <>
      <div className="fund-wallet-container">
        <div className="fund-wallet-div">
          <div className="fund-wallet-img-div">
            <div>
              <img src={Wallet1} alt="" />
            </div>
            <div className="fund-wallet-text-div">
              <p className="fund-wallet-text-text">
                Lorem ipsum dolor sit amet.
              </p>
              <p>21.01.2021 3pm</p>
            </div>
          </div>
          <div>
            <p>$25</p>
          </div>
        </div>
        <div className="fund-wallet-div">
          <div className="fund-wallet-img-div">
            <div>
              <img src={Wallet2} alt="" />
            </div>
            <div className="fund-wallet-text-div">
              <p className="fund-wallet-text-text">
                Lorem ipsum dolor sit amet.
              </p>
              <p>21.01.2021 3pm</p>
            </div>
          </div>
          <div>
            <p>$25</p>
          </div>
        </div>
        <div className="fund-wallet-div">
          <div className="fund-wallet-img-div">
            <div>
              <img src={Wallet3} alt="" />
            </div>
            <div className="fund-wallet-text-div">
              <p className="fund-wallet-text-text">
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
