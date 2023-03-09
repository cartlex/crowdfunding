import walletProvider from "../walletProvider"
import crowdfunding from "./crowdfunding";

const getCrowdfundingWithSigner = async () => {
    const signer = await walletProvider.getSigner();
    return crowdfunding.connect(signer);
}

export default getCrowdfundingWithSigner;