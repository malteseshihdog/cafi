/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { NestRedeeming, NestRedeemingInterface } from "../NestRedeeming";

const _abi = [
  {
    inputs: [],
    name: "_governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nestGovernanceAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nestGovernanceAddress",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "activeThreshold",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "nestPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "nestLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "ntokenPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "ntokenLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "priceDeviationLimit",
            type: "uint16",
          },
        ],
        internalType: "struct INestRedeeming.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "activeThreshold",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "nestPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "nestLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "ntokenPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "ntokenLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "priceDeviationLimit",
            type: "uint16",
          },
        ],
        internalType: "struct INestRedeeming.Config",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ntokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "paybackAddress",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ntokenAddress",
        type: "address",
      },
    ],
    name: "quotaOf",
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
];

export class NestRedeeming__factory {
  static readonly abi = _abi;
  static createInterface(): NestRedeemingInterface {
    return new utils.Interface(_abi) as NestRedeemingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NestRedeeming {
    return new Contract(address, _abi, signerOrProvider) as NestRedeeming;
  }
}
