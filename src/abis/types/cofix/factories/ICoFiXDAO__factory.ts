/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ICoFiXDAO, ICoFiXDAOInterface } from '../ICoFiXDAO'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'flag',
        type: 'uint256',
      },
    ],
    name: 'ApplicationChanged',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    name: 'addETHReward',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'checkApplication',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'status',
            type: 'uint8',
          },
          {
            internalType: 'uint16',
            name: 'cofiPerBlock',
            type: 'uint16',
          },
          {
            internalType: 'uint32',
            name: 'cofiLimit',
            type: 'uint32',
          },
          {
            internalType: 'uint16',
            name: 'priceDeviationLimit',
            type: 'uint16',
          },
        ],
        internalType: 'struct ICoFiXDAO.Config',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getTokenExchange',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exchange',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'quotaOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'payback',
        type: 'address',
      },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'payback',
        type: 'address',
      },
    ],
    name: 'redeemToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'flag',
        type: 'uint256',
      },
    ],
    name: 'setApplication',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'status',
            type: 'uint8',
          },
          {
            internalType: 'uint16',
            name: 'cofiPerBlock',
            type: 'uint16',
          },
          {
            internalType: 'uint32',
            name: 'cofiLimit',
            type: 'uint32',
          },
          {
            internalType: 'uint16',
            name: 'priceDeviationLimit',
            type: 'uint16',
          },
        ],
        internalType: 'struct ICoFiXDAO.Config',
        name: 'config',
        type: 'tuple',
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exchange',
        type: 'uint256',
      },
    ],
    name: 'setTokenExchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'settle',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    name: 'totalETHRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class ICoFiXDAO__factory {
  static readonly abi = _abi
  static createInterface(): ICoFiXDAOInterface {
    return new utils.Interface(_abi) as ICoFiXDAOInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICoFiXDAO {
    return new Contract(address, _abi, signerOrProvider) as ICoFiXDAO
  }
}
