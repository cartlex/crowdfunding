// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Crowdfunding {
    uint public numberOfCampaigns;
    struct Campaign {
        address owner;
        string title;
        string description;
        uint target;
        uint deadlin;
        uint amountCollected;
        string image;
        address[] donators;
        uint[] donations;
    }

    mapping(uint => Campaign) public campaigns;

}