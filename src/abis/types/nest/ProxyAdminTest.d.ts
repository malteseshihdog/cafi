/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ProxyAdminTestInterface extends ethers.utils.Interface {
  functions: {
    '_governance()': FunctionFragment
    'initialize(address)': FunctionFragment
    'migrate(address,uint256)': FunctionFragment
    'update(address)': FunctionFragment
    'getAdmin()': FunctionFragment
  }

  encodeFunctionData(functionFragment: '_governance', values?: undefined): string
  encodeFunctionData(functionFragment: 'initialize', values: [string]): string
  encodeFunctionData(functionFragment: 'migrate', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'update', values: [string]): string
  encodeFunctionData(functionFragment: 'getAdmin', values?: undefined): string

  decodeFunctionResult(functionFragment: '_governance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'update', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAdmin', data: BytesLike): Result

  events: {}
}

export class ProxyAdminTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ProxyAdminTestInterface

  functions: {
    _governance(overrides?: CallOverrides): Promise<[string]>

    initialize(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    update(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getAdmin(overrides?: CallOverrides): Promise<[string] & { adm: string }>
  }

  _governance(overrides?: CallOverrides): Promise<string>

  initialize(
    nestGovernanceAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  migrate(
    tokenAddress: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  update(
    nestGovernanceAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getAdmin(overrides?: CallOverrides): Promise<string>

  callStatic: {
    _governance(overrides?: CallOverrides): Promise<string>

    initialize(nestGovernanceAddress: string, overrides?: CallOverrides): Promise<void>

    migrate(tokenAddress: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>

    update(nestGovernanceAddress: string, overrides?: CallOverrides): Promise<void>

    getAdmin(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    _governance(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    update(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getAdmin(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    _governance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initialize(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    update(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
