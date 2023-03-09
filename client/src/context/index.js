import {useContext, createContext} from "react";
import getCrowdfundingWithSigner from "../abi/crowdfunding/getCrowdfundingWithSigner";
import { Contract, ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const publishCampaign = async(form) => {
    try {
        const crowdfundingWithSigner = await getCrowdfundingWithSigner();
        const data = await crowdfundingWithSigner.createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime() ,
        form.image
    ])
    } catch(error) {
      console.error(error)
    }
  }
}