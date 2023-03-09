import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useState } from "react";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormSumbit = () => {};

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && "Loading..."}
      <div className="flex items-center justify-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a campaign
        </h1>
      </div>
      <form
        onSumbit={handleFormSumbit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={() => {}}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={() => {}}
          />
        </div>
        <FormField
            labelName="Story *"
            placeholder="Write a story"
            isTextArea
            value={form.description}
            handleChange={() => {}}
          />
      </form>
      <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
        <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
        <h4 className="font-epilogue font-bold text-[25px] ml-[20px] text-white">You wil get 100% of the raised money</h4>
      </div>
      <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={() => {}}
          />
          <FormField
            labelName="End Data *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={() => {}}
          />
          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
                btnType="submit"     
                title="Submit new campaign" 
                styles="bg-[#1dc071]"
            />
          </div>
        </div>
    </div>
  );
};

export default CreateCampaign;
