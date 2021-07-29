/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestERC20, TestERC20Interface } from "../TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "value",
        type: "uint8",
      },
    ],
    name: "_setupDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010c8380380620010c88339810160408190526200003491620001f3565b8251839083906200004d90600390602085019062000096565b5080516200006390600490602084019062000096565b50505062000077816200008060201b60201c565b505050620002cb565b6005805460ff191660ff92909216919091179055565b828054620000a49062000278565b90600052602060002090601f016020900481019282620000c8576000855562000113565b82601f10620000e357805160ff191683800117855562000113565b8280016001018555821562000113579182015b8281111562000113578251825591602001919060010190620000f6565b506200012192915062000125565b5090565b5b8082111562000121576000815560010162000126565b600082601f8301126200014e57600080fd5b81516001600160401b03808211156200016b576200016b620002b5565b604051601f8301601f19908116603f01168101908282118183101715620001965762000196620002b5565b81604052838152602092508683858801011115620001b357600080fd5b600091505b83821015620001d75785820183015181830184015290820190620001b8565b83821115620001e95760008385830101525b9695505050505050565b6000806000606084860312156200020957600080fd5b83516001600160401b03808211156200022157600080fd5b6200022f878388016200013c565b945060208601519150808211156200024657600080fd5b5062000255868287016200013c565b925050604084015160ff811681146200026d57600080fd5b809150509250925092565b600181811c908216806200028d57607f821691505b60208210811415620002af57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610ded80620002db6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806361e9edb211610081578063a457c2d71161005b578063a457c2d7146101e9578063a9059cbb146101fc578063dd62ed3e1461020f57600080fd5b806361e9edb21461016757806370a08231146101ab57806395d89b41146101e157600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461015457600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610255565b6040516100ee9190610c92565b60405180910390f35b61010a610105366004610c45565b6102e7565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a366004610c09565b6102fd565b60055460405160ff90911681526020016100ee565b61010a610162366004610c45565b6103ef565b6101a9610175366004610c6f565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff92909216919091179055565b005b61011e6101b9366004610bb4565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100e1610433565b61010a6101f7366004610c45565b610442565b61010a61020a366004610c45565b61051c565b61011e61021d366004610bd6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026490610d34565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610d34565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b5050505050905090565b60006102f43384846105ee565b50600192915050565b600061030a8484846107a1565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338452909152902054828110156103d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103e485336103df8685610d1d565b6105ee565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916102f49185906103df908690610d05565b60606004805461026490610d34565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610503576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016103c7565b61051233856103df8685610d1d565b5060019392505050565b6000808211801561053a575033600090815260208190526040902054155b156105e4576a52b7d2dcc80cd2e40000008211156105da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5465737445524332303a206d696e742076616c75652063616e206e6f7420677260448201527f6561746572207468616e2031303030303030303020657468657200000000000060648201526084016103c7565b6105e43383610a5e565b6105128383610b7e565b73ffffffffffffffffffffffffffffffffffffffff8316610690576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103c7565b73ffffffffffffffffffffffffffffffffffffffff8216610733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103c7565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103c7565b73ffffffffffffffffffffffffffffffffffffffff82166108e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103c7565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020548181101561099d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103c7565b6109a78282610d1d565b73ffffffffffffffffffffffffffffffffffffffff80861660009081526020819052604080822093909355908516815290812080548492906109ea908490610d05565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a5091815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610adb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103c7565b8060026000828254610aed9190610d05565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610b27908490610d05565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60006102f43384846107a1565b803573ffffffffffffffffffffffffffffffffffffffff81168114610baf57600080fd5b919050565b600060208284031215610bc657600080fd5b610bcf82610b8b565b9392505050565b60008060408385031215610be957600080fd5b610bf283610b8b565b9150610c0060208401610b8b565b90509250929050565b600080600060608486031215610c1e57600080fd5b610c2784610b8b565b9250610c3560208501610b8b565b9150604084013590509250925092565b60008060408385031215610c5857600080fd5b610c6183610b8b565b946020939093013593505050565b600060208284031215610c8157600080fd5b813560ff81168114610bcf57600080fd5b600060208083528351808285015260005b81811015610cbf57858101830151858201604001528201610ca3565b81811115610cd1576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610d1857610d18610d88565b500190565b600082821015610d2f57610d2f610d88565b500390565b600181811c90821680610d4857607f821691505b60208210811415610d82577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212203255169b406cef773c0e4f64a338ccd9c6a0e789b8f14b31a352ccaba6a33f9164736f6c63430008060033";

export class TestERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(
      name,
      symbol,
      decimals,
      overrides || {}
    ) as Promise<TestERC20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
