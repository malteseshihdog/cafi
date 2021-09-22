/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ITransferable, ITransferableInterface } from '../ITransferable'

const _abi = [
  {
    inputs: [
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
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ITransferable__factory {
  static readonly abi = _abi
  static createInterface(): ITransferableInterface {
    return new utils.Interface(_abi) as ITransferableInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ITransferable {
    return new Contract(address, _abi, signerOrProvider) as ITransferable
  }
}
