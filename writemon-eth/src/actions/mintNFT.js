//smart contract API not working
//need to fix
//decoupled this for now




// require('dotenv').config();
// const API_URL = process.env.API_URL;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(API_URL);

// const contract = require("../artifacts/contracts/NFTminting.sol/MyNFT.json");
// const contractAddress = "0xBd770416a3345F91E4B34576cb804a576fa48EB1";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// export const mintNFT = async (url) => {
//     //error handling
//     if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
//       return {
//         success: false,
//         status: "❗Please make sure all fields are completed before minting.",
//       };
//     }
  
//     //make metadata
//     const metadata = new Object();
//     metadata.name = name;
//     metadata.image = url;
//     metadata.description = description;
  
//     //pinata pin request
//     const pinataResponse = await pinJSONToIPFS(metadata);
//     if (!pinataResponse.success) {
//       return {
//         success: false,
//         status: "😢 Something went wrong while uploading your tokenURI.",
//       };
//     }
//     const tokenURI = pinataResponse.pinataUrl;
  
//     //load smart contract
//     window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  
//     //set up your Ethereum transaction
//     const transactionParameters = {
//       to: contractAddress, // Required except during contract publications.
//       from: window.ethereum.selectedAddress, // must match user's active address.
//       data: window.contract.methods
//         .mintNFT(window.ethereum.selectedAddress, tokenURI)
//         .encodeABI(), //make call to NFT smart contract
//     };
  
  
//     const signedTx = await web3.eth.accounts.signTransaction(transactionParameters, PRIVATE_KEY);
//     const transactionReceipt = await web3.eth.sendSignedTransaction(
//       signedTx.rawTransaction
//     );
  
//     console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
//   };