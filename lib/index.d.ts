import { AddressLike, BaseContract, BigNumberish, BytesLike, ContractDeployTransaction, ContractFactory, ContractMethod, ContractRunner, ContractTransaction, ContractTransactionResponse, DeferredTopicFilter, EventFragment, EventLog, FunctionFragment, Interface, Listener, LogDescription, Result, Signer, TransactionRequest, Typed } from 'ethers';

export interface TypedDeferredTopicFilter<_TCEvent extends TypedContractEvent> extends DeferredTopicFilter {
}
export interface TypedContractEvent<InputTuple extends Array<any> = any, OutputTuple extends Array<any> = any, OutputObject = any> {
	(...args: Partial<InputTuple>): TypedDeferredTopicFilter<TypedContractEvent<InputTuple, OutputTuple, OutputObject>>;
	name: string;
	fragment: EventFragment;
	getFragment(...args: Partial<InputTuple>): EventFragment;
}
export type __TypechainAOutputTuple<T> = T extends TypedContractEvent<infer _U, infer W> ? W : never;
export type __TypechainOutputObject<T> = T extends TypedContractEvent<infer _U, infer _W, infer V> ? V : never;
export interface TypedEventLog<TCEvent extends TypedContractEvent> extends Omit<EventLog, "args"> {
	args: __TypechainAOutputTuple<TCEvent> & __TypechainOutputObject<TCEvent>;
}
export interface TypedLogDescription<TCEvent extends TypedContractEvent> extends Omit<LogDescription, "args"> {
	args: __TypechainAOutputTuple<TCEvent> & __TypechainOutputObject<TCEvent>;
}
export type TypedListener<TCEvent extends TypedContractEvent> = (...listenerArg: [
	...__TypechainAOutputTuple<TCEvent>,
	TypedEventLog<TCEvent>,
	...undefined[]
]) => void;
export type StateMutability = "nonpayable" | "payable" | "view";
export type BaseOverrides = Omit<TransactionRequest, "to" | "data">;
export type NonPayableOverrides = Omit<BaseOverrides, "value" | "blockTag" | "enableCcipRead">;
export type PayableOverrides = Omit<BaseOverrides, "blockTag" | "enableCcipRead">;
export type ViewOverrides = Omit<TransactionRequest, "to" | "data">;
export type Overrides<S extends StateMutability> = S extends "nonpayable" ? NonPayableOverrides : S extends "payable" ? PayableOverrides : ViewOverrides;
export type PostfixOverrides<A extends Array<any>, S extends StateMutability> = A | [
	...A,
	Overrides<S>
];
export type ContractMethodArgs<A extends Array<any>, S extends StateMutability> = PostfixOverrides<{
	[I in keyof A]-?: A[I] | Typed;
}, S>;
export type DefaultReturnType<R> = R extends Array<any> ? R[0] : R;
export interface TypedContractMethod<A extends Array<any> = Array<any>, R = any, S extends StateMutability = "payable"> {
	(...args: ContractMethodArgs<A, S>): S extends "view" ? Promise<DefaultReturnType<R>> : Promise<ContractTransactionResponse>;
	name: string;
	fragment: FunctionFragment;
	getFragment(...args: ContractMethodArgs<A, S>): FunctionFragment;
	populateTransaction(...args: ContractMethodArgs<A, S>): Promise<ContractTransaction>;
	staticCall(...args: ContractMethodArgs<A, "view">): Promise<DefaultReturnType<R>>;
	send(...args: ContractMethodArgs<A, S>): Promise<ContractTransactionResponse>;
	estimateGas(...args: ContractMethodArgs<A, S>): Promise<bigint>;
	staticCallResult(...args: ContractMethodArgs<A, "view">): Promise<R>;
}
export interface AutomationBaseInterface extends Interface {
}
export interface AutomationBase extends BaseContract {
	connect(runner?: ContractRunner | null): AutomationBase;
	waitForDeployment(): Promise<this>;
	interface: AutomationBaseInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface AutomationCompatibleInterface extends Interface {
	getFunction(nameOrSignature: "checkUpkeep" | "performUpkeep"): FunctionFragment;
	encodeFunctionData(functionFragment: "checkUpkeep", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "performUpkeep", values: [
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "checkUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "performUpkeep", data: BytesLike): Result;
}
export interface AutomationCompatible extends BaseContract {
	connect(runner?: ContractRunner | null): AutomationCompatible;
	waitForDeployment(): Promise<this>;
	interface: AutomationCompatibleInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	checkUpkeep: TypedContractMethod<[
		checkData: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
			performData: string;
		}
	], "nonpayable">;
	performUpkeep: TypedContractMethod<[
		performData: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "checkUpkeep"): TypedContractMethod<[
		checkData: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
			performData: string;
		}
	], "nonpayable">;
	getFunction(nameOrSignature: "performUpkeep"): TypedContractMethod<[
		performData: BytesLike
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface AutomationCompatibleInterfaceInterface extends Interface {
	getFunction(nameOrSignature: "checkUpkeep" | "performUpkeep"): FunctionFragment;
	encodeFunctionData(functionFragment: "checkUpkeep", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "performUpkeep", values: [
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "checkUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "performUpkeep", data: BytesLike): Result;
}
interface AutomationCompatibleInterface$1 extends BaseContract {
	connect(runner?: ContractRunner | null): AutomationCompatibleInterface$1;
	waitForDeployment(): Promise<this>;
	interface: AutomationCompatibleInterfaceInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	checkUpkeep: TypedContractMethod<[
		checkData: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
			performData: string;
		}
	], "nonpayable">;
	performUpkeep: TypedContractMethod<[
		performData: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "checkUpkeep"): TypedContractMethod<[
		checkData: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
			performData: string;
		}
	], "nonpayable">;
	getFunction(nameOrSignature: "performUpkeep"): TypedContractMethod<[
		performData: BytesLike
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface IFunctionsClientInterface extends Interface {
	getFunction(nameOrSignature: "handleOracleFulfillment"): FunctionFragment;
	encodeFunctionData(functionFragment: "handleOracleFulfillment", values: [
		BytesLike,
		BytesLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "handleOracleFulfillment", data: BytesLike): Result;
}
export interface IFunctionsClient extends BaseContract {
	connect(runner?: ContractRunner | null): IFunctionsClient;
	waitForDeployment(): Promise<this>;
	interface: IFunctionsClientInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	handleOracleFulfillment: TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "handleOracleFulfillment"): TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	filters: {};
}
declare namespace FunctionsResponse {
	type CommitmentStruct = {
		requestId: BytesLike;
		coordinator: AddressLike;
		estimatedTotalCostJuels: BigNumberish;
		client: AddressLike;
		subscriptionId: BigNumberish;
		callbackGasLimit: BigNumberish;
		adminFee: BigNumberish;
		donFee: BigNumberish;
		gasOverheadBeforeCallback: BigNumberish;
		gasOverheadAfterCallback: BigNumberish;
		timeoutTimestamp: BigNumberish;
	};
	type CommitmentStructOutput = [
		requestId: string,
		coordinator: string,
		estimatedTotalCostJuels: bigint,
		client: string,
		subscriptionId: bigint,
		callbackGasLimit: bigint,
		adminFee: bigint,
		donFee: bigint,
		gasOverheadBeforeCallback: bigint,
		gasOverheadAfterCallback: bigint,
		timeoutTimestamp: bigint
	] & {
		requestId: string;
		coordinator: string;
		estimatedTotalCostJuels: bigint;
		client: string;
		subscriptionId: bigint;
		callbackGasLimit: bigint;
		adminFee: bigint;
		donFee: bigint;
		gasOverheadBeforeCallback: bigint;
		gasOverheadAfterCallback: bigint;
		timeoutTimestamp: bigint;
	};
}
export interface IFunctionsRouterInterface extends Interface {
	getFunction(nameOrSignature: "fulfill" | "getAdminFee" | "getAllowListId" | "getContractById" | "getProposedContractById" | "getProposedContractSet" | "isValidCallbackGasLimit" | "pause" | "proposeContractsUpdate" | "sendRequest" | "sendRequestToProposed" | "setAllowListId" | "unpause" | "updateContracts"): FunctionFragment;
	encodeFunctionData(functionFragment: "fulfill", values: [
		BytesLike,
		BytesLike,
		BigNumberish,
		BigNumberish,
		AddressLike,
		FunctionsResponse.CommitmentStruct
	]): string;
	encodeFunctionData(functionFragment: "getAdminFee", values?: undefined): string;
	encodeFunctionData(functionFragment: "getAllowListId", values?: undefined): string;
	encodeFunctionData(functionFragment: "getContractById", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "getProposedContractById", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "getProposedContractSet", values?: undefined): string;
	encodeFunctionData(functionFragment: "isValidCallbackGasLimit", values: [
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "pause", values?: undefined): string;
	encodeFunctionData(functionFragment: "proposeContractsUpdate", values: [
		BytesLike[],
		AddressLike[]
	]): string;
	encodeFunctionData(functionFragment: "sendRequest", values: [
		BigNumberish,
		BytesLike,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "sendRequestToProposed", values: [
		BigNumberish,
		BytesLike,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "setAllowListId", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
	encodeFunctionData(functionFragment: "updateContracts", values?: undefined): string;
	decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getAdminFee", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getAllowListId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getContractById", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getProposedContractById", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getProposedContractSet", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isValidCallbackGasLimit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "proposeContractsUpdate", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "sendRequest", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "sendRequestToProposed", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setAllowListId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateContracts", data: BytesLike): Result;
}
export interface IFunctionsRouter extends BaseContract {
	connect(runner?: ContractRunner | null): IFunctionsRouter;
	waitForDeployment(): Promise<this>;
	interface: IFunctionsRouterInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	fulfill: TypedContractMethod<[
		response: BytesLike,
		err: BytesLike,
		juelsPerGas: BigNumberish,
		costWithoutFulfillment: BigNumberish,
		transmitter: AddressLike,
		commitment: FunctionsResponse.CommitmentStruct
	], [
		[
			bigint,
			bigint
		]
	], "nonpayable">;
	getAdminFee: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getAllowListId: TypedContractMethod<[
	], [
		string
	], "view">;
	getContractById: TypedContractMethod<[
		id: BytesLike
	], [
		string
	], "view">;
	getProposedContractById: TypedContractMethod<[
		id: BytesLike
	], [
		string
	], "view">;
	getProposedContractSet: TypedContractMethod<[
	], [
		[
			string[],
			string[]
		]
	], "view">;
	isValidCallbackGasLimit: TypedContractMethod<[
		subscriptionId: BigNumberish,
		callbackGasLimit: BigNumberish
	], [
		void
	], "view">;
	pause: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	proposeContractsUpdate: TypedContractMethod<[
		proposalSetIds: BytesLike[],
		proposalSetAddresses: AddressLike[]
	], [
		void
	], "nonpayable">;
	sendRequest: TypedContractMethod<[
		subscriptionId: BigNumberish,
		data: BytesLike,
		dataVersion: BigNumberish,
		callbackGasLimit: BigNumberish,
		donId: BytesLike
	], [
		string
	], "nonpayable">;
	sendRequestToProposed: TypedContractMethod<[
		subscriptionId: BigNumberish,
		data: BytesLike,
		dataVersion: BigNumberish,
		callbackGasLimit: BigNumberish,
		donId: BytesLike
	], [
		string
	], "nonpayable">;
	setAllowListId: TypedContractMethod<[
		allowListId: BytesLike
	], [
		void
	], "nonpayable">;
	unpause: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	updateContracts: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "fulfill"): TypedContractMethod<[
		response: BytesLike,
		err: BytesLike,
		juelsPerGas: BigNumberish,
		costWithoutFulfillment: BigNumberish,
		transmitter: AddressLike,
		commitment: FunctionsResponse.CommitmentStruct
	], [
		[
			bigint,
			bigint
		]
	], "nonpayable">;
	getFunction(nameOrSignature: "getAdminFee"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getAllowListId"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "getContractById"): TypedContractMethod<[
		id: BytesLike
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "getProposedContractById"): TypedContractMethod<[
		id: BytesLike
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "getProposedContractSet"): TypedContractMethod<[
	], [
		[
			string[],
			string[]
		]
	], "view">;
	getFunction(nameOrSignature: "isValidCallbackGasLimit"): TypedContractMethod<[
		subscriptionId: BigNumberish,
		callbackGasLimit: BigNumberish
	], [
		void
	], "view">;
	getFunction(nameOrSignature: "pause"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "proposeContractsUpdate"): TypedContractMethod<[
		proposalSetIds: BytesLike[],
		proposalSetAddresses: AddressLike[]
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "sendRequest"): TypedContractMethod<[
		subscriptionId: BigNumberish,
		data: BytesLike,
		dataVersion: BigNumberish,
		callbackGasLimit: BigNumberish,
		donId: BytesLike
	], [
		string
	], "nonpayable">;
	getFunction(nameOrSignature: "sendRequestToProposed"): TypedContractMethod<[
		subscriptionId: BigNumberish,
		data: BytesLike,
		dataVersion: BigNumberish,
		callbackGasLimit: BigNumberish,
		donId: BytesLike
	], [
		string
	], "nonpayable">;
	getFunction(nameOrSignature: "setAllowListId"): TypedContractMethod<[
		allowListId: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "unpause"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateContracts"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface FunctionsRequestInterface extends Interface {
	getFunction(nameOrSignature: "REQUEST_DATA_VERSION"): FunctionFragment;
	encodeFunctionData(functionFragment: "REQUEST_DATA_VERSION", values?: undefined): string;
	decodeFunctionResult(functionFragment: "REQUEST_DATA_VERSION", data: BytesLike): Result;
}
export interface FunctionsRequest extends BaseContract {
	connect(runner?: ContractRunner | null): FunctionsRequest;
	waitForDeployment(): Promise<this>;
	interface: FunctionsRequestInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	REQUEST_DATA_VERSION: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "REQUEST_DATA_VERSION"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	filters: {};
}
export interface OwnableInterface extends Interface {
	getFunction(nameOrSignature: "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace OwnershipTransferredEvent {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface Ownable extends BaseContract {
	connect(runner?: ContractRunner | null): Ownable;
	waitForDeployment(): Promise<this>;
	interface: OwnableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
	filters: {
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
	};
}
export interface IERC1967Interface extends Interface {
	getEvent(nameOrSignatureOrTopic: "AdminChanged" | "BeaconUpgraded" | "Upgraded"): EventFragment;
}
declare namespace AdminChangedEvent {
	type InputTuple = [
		previousAdmin: AddressLike,
		newAdmin: AddressLike
	];
	type OutputTuple = [
		previousAdmin: string,
		newAdmin: string
	];
	interface OutputObject {
		previousAdmin: string;
		newAdmin: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace BeaconUpgradedEvent {
	type InputTuple = [
		beacon: AddressLike
	];
	type OutputTuple = [
		beacon: string
	];
	interface OutputObject {
		beacon: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace UpgradedEvent {
	type InputTuple = [
		implementation: AddressLike
	];
	type OutputTuple = [
		implementation: string
	];
	interface OutputObject {
		implementation: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC1967 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC1967;
	waitForDeployment(): Promise<this>;
	interface: IERC1967Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "AdminChanged"): TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
	getEvent(key: "BeaconUpgraded"): TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
	getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
	filters: {
		"AdminChanged(address,address)": TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
		AdminChanged: TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
		"BeaconUpgraded(address)": TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
		BeaconUpgraded: TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
		"Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
		Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
	};
}
export interface IERC5267Interface extends Interface {
	getFunction(nameOrSignature: "eip712Domain"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
}
declare namespace EIP712DomainChangedEvent {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC5267 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC5267;
	waitForDeployment(): Promise<this>;
	interface: IERC5267Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
	filters: {
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
	};
}
export interface IERC1155ErrorsInterface extends Interface {
}
export interface IERC1155Errors extends BaseContract {
	connect(runner?: ContractRunner | null): IERC1155Errors;
	waitForDeployment(): Promise<this>;
	interface: IERC1155ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface IERC20ErrorsInterface extends Interface {
}
export interface IERC20Errors extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Errors;
	waitForDeployment(): Promise<this>;
	interface: IERC20ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface IERC721ErrorsInterface extends Interface {
}
export interface IERC721Errors extends BaseContract {
	connect(runner?: ContractRunner | null): IERC721Errors;
	waitForDeployment(): Promise<this>;
	interface: IERC721ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ERC1967UtilsInterface extends Interface {
}
export interface ERC1967Utils extends BaseContract {
	connect(runner?: ContractRunner | null): ERC1967Utils;
	waitForDeployment(): Promise<this>;
	interface: ERC1967UtilsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ProxyInterface extends Interface {
}
interface Proxy$1 extends BaseContract {
	connect(runner?: ContractRunner | null): Proxy$1;
	waitForDeployment(): Promise<this>;
	interface: ProxyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface IBeaconInterface extends Interface {
	getFunction(nameOrSignature: "implementation"): FunctionFragment;
	encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
	decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
}
export interface IBeacon extends BaseContract {
	connect(runner?: ContractRunner | null): IBeacon;
	waitForDeployment(): Promise<this>;
	interface: IBeaconInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	implementation: TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "implementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	filters: {};
}
export interface ERC20Interface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20 extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20;
	waitForDeployment(): Promise<this>;
	interface: ERC20Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
	};
}
export interface IERC20Interface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$1 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$1 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20;
	waitForDeployment(): Promise<this>;
	interface: IERC20Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$1.InputTuple, ApprovalEvent$1.OutputTuple, ApprovalEvent$1.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$1.InputTuple, TransferEvent$1.OutputTuple, TransferEvent$1.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$1.InputTuple, ApprovalEvent$1.OutputTuple, ApprovalEvent$1.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$1.InputTuple, ApprovalEvent$1.OutputTuple, ApprovalEvent$1.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$1.InputTuple, TransferEvent$1.OutputTuple, TransferEvent$1.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$1.InputTuple, TransferEvent$1.OutputTuple, TransferEvent$1.OutputObject>;
	};
}
export interface ERC20BurnableInterface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "burn", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "burnFrom", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$2 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$2 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Burnable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Burnable;
	waitForDeployment(): Promise<this>;
	interface: ERC20BurnableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	burn: TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	burnFrom: TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "burn"): TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$2.InputTuple, ApprovalEvent$2.OutputTuple, ApprovalEvent$2.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$2.InputTuple, TransferEvent$2.OutputTuple, TransferEvent$2.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$2.InputTuple, ApprovalEvent$2.OutputTuple, ApprovalEvent$2.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$2.InputTuple, ApprovalEvent$2.OutputTuple, ApprovalEvent$2.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$2.InputTuple, TransferEvent$2.OutputTuple, TransferEvent$2.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$2.InputTuple, TransferEvent$2.OutputTuple, TransferEvent$2.OutputObject>;
	};
}
export interface ERC20PermitInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "eip712Domain" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "EIP712DomainChanged" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$3 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$1 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$3 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Permit extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Permit;
	waitForDeployment(): Promise<this>;
	interface: ERC20PermitInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$3.InputTuple, ApprovalEvent$3.OutputTuple, ApprovalEvent$3.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$1.InputTuple, EIP712DomainChangedEvent$1.OutputTuple, EIP712DomainChangedEvent$1.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$3.InputTuple, TransferEvent$3.OutputTuple, TransferEvent$3.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$3.InputTuple, ApprovalEvent$3.OutputTuple, ApprovalEvent$3.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$3.InputTuple, ApprovalEvent$3.OutputTuple, ApprovalEvent$3.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$1.InputTuple, EIP712DomainChangedEvent$1.OutputTuple, EIP712DomainChangedEvent$1.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$1.InputTuple, EIP712DomainChangedEvent$1.OutputTuple, EIP712DomainChangedEvent$1.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$3.InputTuple, TransferEvent$3.OutputTuple, TransferEvent$3.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$3.InputTuple, TransferEvent$3.OutputTuple, TransferEvent$3.OutputObject>;
	};
}
export interface IERC20MetadataInterface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$4 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$4 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20Metadata extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Metadata;
	waitForDeployment(): Promise<this>;
	interface: IERC20MetadataInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$4.InputTuple, ApprovalEvent$4.OutputTuple, ApprovalEvent$4.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$4.InputTuple, TransferEvent$4.OutputTuple, TransferEvent$4.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$4.InputTuple, ApprovalEvent$4.OutputTuple, ApprovalEvent$4.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$4.InputTuple, ApprovalEvent$4.OutputTuple, ApprovalEvent$4.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$4.InputTuple, TransferEvent$4.OutputTuple, TransferEvent$4.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$4.InputTuple, TransferEvent$4.OutputTuple, TransferEvent$4.OutputObject>;
	};
}
export interface IERC20PermitInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "nonces" | "permit"): FunctionFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
}
export interface IERC20Permit extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Permit;
	waitForDeployment(): Promise<this>;
	interface: IERC20PermitInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface AddressInterface extends Interface {
}
export interface Address extends BaseContract {
	connect(runner?: ContractRunner | null): Address;
	waitForDeployment(): Promise<this>;
	interface: AddressInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ErrorsInterface extends Interface {
}
export interface Errors extends BaseContract {
	connect(runner?: ContractRunner | null): Errors;
	waitForDeployment(): Promise<this>;
	interface: ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface NoncesInterface extends Interface {
	getFunction(nameOrSignature: "nonces"): FunctionFragment;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
}
export interface Nonces extends BaseContract {
	connect(runner?: ContractRunner | null): Nonces;
	waitForDeployment(): Promise<this>;
	interface: NoncesInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	filters: {};
}
export interface ShortStringsInterface extends Interface {
}
export interface ShortStrings extends BaseContract {
	connect(runner?: ContractRunner | null): ShortStrings;
	waitForDeployment(): Promise<this>;
	interface: ShortStringsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface StringsInterface extends Interface {
}
export interface Strings extends BaseContract {
	connect(runner?: ContractRunner | null): Strings;
	waitForDeployment(): Promise<this>;
	interface: StringsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ECDSAInterface extends Interface {
}
export interface ECDSA extends BaseContract {
	connect(runner?: ContractRunner | null): ECDSA;
	waitForDeployment(): Promise<this>;
	interface: ECDSAInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface EIP712Interface extends Interface {
	getFunction(nameOrSignature: "eip712Domain"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
}
declare namespace EIP712DomainChangedEvent$2 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface EIP712 extends BaseContract {
	connect(runner?: ContractRunner | null): EIP712;
	waitForDeployment(): Promise<this>;
	interface: EIP712Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$2.InputTuple, EIP712DomainChangedEvent$2.OutputTuple, EIP712DomainChangedEvent$2.OutputObject>;
	filters: {
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$2.InputTuple, EIP712DomainChangedEvent$2.OutputTuple, EIP712DomainChangedEvent$2.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$2.InputTuple, EIP712DomainChangedEvent$2.OutputTuple, EIP712DomainChangedEvent$2.OutputObject>;
	};
}
export interface SafeCastInterface extends Interface {
}
export interface SafeCast extends BaseContract {
	connect(runner?: ContractRunner | null): SafeCast;
	waitForDeployment(): Promise<this>;
	interface: SafeCastInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface OwnableUpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace InitializedEvent {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$1 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface OwnableUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): OwnableUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: OwnableUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$1.InputTuple, OwnershipTransferredEvent$1.OutputTuple, OwnershipTransferredEvent$1.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$1.InputTuple, OwnershipTransferredEvent$1.OutputTuple, OwnershipTransferredEvent$1.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$1.InputTuple, OwnershipTransferredEvent$1.OutputTuple, OwnershipTransferredEvent$1.OutputObject>;
	};
}
export interface InitializableInterface extends Interface {
	getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
declare namespace InitializedEvent$1 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface Initializable extends BaseContract {
	connect(runner?: ContractRunner | null): Initializable;
	waitForDeployment(): Promise<this>;
	interface: InitializableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$1.InputTuple, InitializedEvent$1.OutputTuple, InitializedEvent$1.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$1.InputTuple, InitializedEvent$1.OutputTuple, InitializedEvent$1.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$1.InputTuple, InitializedEvent$1.OutputTuple, InitializedEvent$1.OutputObject>;
	};
}
export interface ContextUpgradeableInterface extends Interface {
	getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
declare namespace InitializedEvent$2 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ContextUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ContextUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: ContextUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$2.InputTuple, InitializedEvent$2.OutputTuple, InitializedEvent$2.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$2.InputTuple, InitializedEvent$2.OutputTuple, InitializedEvent$2.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$2.InputTuple, InitializedEvent$2.OutputTuple, InitializedEvent$2.OutputObject>;
	};
}
export interface LockInterface extends Interface {
	getFunction(nameOrSignature: "owner" | "unlockTime" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "unlockTime", values?: undefined): string;
	encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace WithdrawalEvent {
	type InputTuple = [
		amount: BigNumberish,
		when: BigNumberish
	];
	type OutputTuple = [
		amount: bigint,
		when: bigint
	];
	interface OutputObject {
		amount: bigint;
		when: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
interface Lock$1 extends BaseContract {
	connect(runner?: ContractRunner | null): Lock$1;
	waitForDeployment(): Promise<this>;
	interface: LockInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	unlockTime: TypedContractMethod<[
	], [
		bigint
	], "view">;
	withdraw: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "unlockTime"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
	filters: {
		"Withdrawal(uint256,uint256)": TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
		Withdrawal: TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
	};
}
export interface IARWSupplyInterface extends Interface {
	getFunction(nameOrSignature: "circulatingSupply" | "excludedAddresses" | "excludedSupply"): FunctionFragment;
	encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "excludedAddresses", values?: undefined): string;
	encodeFunctionData(functionFragment: "excludedSupply", values?: undefined): string;
	decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "excludedAddresses", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "excludedSupply", data: BytesLike): Result;
}
export interface IARWSupply extends BaseContract {
	connect(runner?: ContractRunner | null): IARWSupply;
	waitForDeployment(): Promise<this>;
	interface: IARWSupplyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	circulatingSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	excludedAddresses: TypedContractMethod<[
	], [
		string[]
	], "view">;
	excludedSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "circulatingSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "excludedAddresses"): TypedContractMethod<[
	], [
		string[]
	], "view">;
	getFunction(nameOrSignature: "excludedSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	filters: {};
}
export interface IERC20ExpInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$5 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$5 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20Exp extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Exp;
	waitForDeployment(): Promise<this>;
	interface: IERC20ExpInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$5.InputTuple, ApprovalEvent$5.OutputTuple, ApprovalEvent$5.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$5.InputTuple, TransferEvent$5.OutputTuple, TransferEvent$5.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$5.InputTuple, ApprovalEvent$5.OutputTuple, ApprovalEvent$5.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$5.InputTuple, ApprovalEvent$5.OutputTuple, ApprovalEvent$5.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$5.InputTuple, TransferEvent$5.OutputTuple, TransferEvent$5.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$5.InputTuple, TransferEvent$5.OutputTuple, TransferEvent$5.OutputObject>;
	};
}
export interface IERC20MintableInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "mint" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "burn", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "burnFrom", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "mint", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$6 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$6 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20Mintable extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Mintable;
	waitForDeployment(): Promise<this>;
	interface: IERC20MintableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	burn: TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	burnFrom: TypedContractMethod<[
		account: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "burn"): TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
		account: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$6.InputTuple, ApprovalEvent$6.OutputTuple, ApprovalEvent$6.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$6.InputTuple, TransferEvent$6.OutputTuple, TransferEvent$6.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$6.InputTuple, ApprovalEvent$6.OutputTuple, ApprovalEvent$6.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$6.InputTuple, ApprovalEvent$6.OutputTuple, ApprovalEvent$6.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$6.InputTuple, TransferEvent$6.OutputTuple, TransferEvent$6.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$6.InputTuple, TransferEvent$6.OutputTuple, TransferEvent$6.OutputObject>;
	};
}
export interface IInitializableProxyInterface extends Interface {
	getFunction(nameOrSignature: "admin" | "changeAdmin" | "implementation" | "initializeProxy" | "proxyDescription" | "upgradeToAndCall"): FunctionFragment;
	encodeFunctionData(functionFragment: "admin", values?: undefined): string;
	encodeFunctionData(functionFragment: "changeAdmin", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
	encodeFunctionData(functionFragment: "initializeProxy", values: [
		string,
		AddressLike,
		AddressLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "proxyDescription", values?: undefined): string;
	encodeFunctionData(functionFragment: "upgradeToAndCall", values: [
		AddressLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "proxyDescription", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
export interface IInitializableProxy extends BaseContract {
	connect(runner?: ContractRunner | null): IInitializableProxy;
	waitForDeployment(): Promise<this>;
	interface: IInitializableProxyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	admin: TypedContractMethod<[
	], [
		string
	], "view">;
	changeAdmin: TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	implementation: TypedContractMethod<[
	], [
		string
	], "view">;
	initializeProxy: TypedContractMethod<[
		_description: string,
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	proxyDescription: TypedContractMethod<[
	], [
		string
	], "view">;
	upgradeToAndCall: TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "admin"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "changeAdmin"): TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "implementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "initializeProxy"): TypedContractMethod<[
		_description: string,
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "proxyDescription"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	filters: {};
}
export interface IPriceFeedInterface extends Interface {
	getFunction(nameOrSignature: "decimals" | "getTokenType" | "latestAnswer" | "latestRound"): FunctionFragment;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "getTokenType", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRound", values?: undefined): string;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTokenType", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRound", data: BytesLike): Result;
}
export interface IPriceFeed extends BaseContract {
	connect(runner?: ContractRunner | null): IPriceFeed;
	waitForDeployment(): Promise<this>;
	interface: IPriceFeedInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getTokenType: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestAnswer: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRound: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getTokenType"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestAnswer"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRound"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	filters: {};
}
interface OwnableInterface$1 extends Interface {
	getFunction(nameOrSignature: "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace InitializedEvent$3 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$2 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
interface Ownable$1 extends BaseContract {
	connect(runner?: ContractRunner | null): Ownable$1;
	waitForDeployment(): Promise<this>;
	interface: OwnableInterface$1;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$3.InputTuple, InitializedEvent$3.OutputTuple, InitializedEvent$3.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$2.InputTuple, OwnershipTransferredEvent$2.OutputTuple, OwnershipTransferredEvent$2.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$3.InputTuple, InitializedEvent$3.OutputTuple, InitializedEvent$3.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$3.InputTuple, InitializedEvent$3.OutputTuple, InitializedEvent$3.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$2.InputTuple, OwnershipTransferredEvent$2.OutputTuple, OwnershipTransferredEvent$2.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$2.InputTuple, OwnershipTransferredEvent$2.OutputTuple, OwnershipTransferredEvent$2.OutputObject>;
	};
}
export interface SigLibInterface extends Interface {
}
export interface SigLib extends BaseContract {
	connect(runner?: ContractRunner | null): SigLib;
	waitForDeployment(): Promise<this>;
	interface: SigLibInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface WithSettlerInterface extends Interface {
	getFunction(nameOrSignature: "addSettler" | "initializeSettler" | "owner" | "removeSettler" | "renounceOwnership" | "settlers" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AddSettler" | "Initialized" | "OwnershipTransferred" | "RemoveSettler"): EventFragment;
	encodeFunctionData(functionFragment: "addSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initializeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "removeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "settlers", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "addSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "settlers", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace AddSettlerEvent {
	type InputTuple = [
		newSettler: AddressLike
	];
	type OutputTuple = [
		newSettler: string
	];
	interface OutputObject {
		newSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$4 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$3 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RemoveSettlerEvent {
	type InputTuple = [
		oldSettler: AddressLike
	];
	type OutputTuple = [
		oldSettler: string
	];
	interface OutputObject {
		oldSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface WithSettler extends BaseContract {
	connect(runner?: ContractRunner | null): WithSettler;
	waitForDeployment(): Promise<this>;
	interface: WithSettlerInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	addSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	initializeSettler: TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	removeSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	settlers: TypedContractMethod<[
	], [
		string[]
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "addSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeSettler"): TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "removeSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "settlers"): TypedContractMethod<[
	], [
		string[]
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "AddSettler"): TypedContractEvent<AddSettlerEvent.InputTuple, AddSettlerEvent.OutputTuple, AddSettlerEvent.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$4.InputTuple, InitializedEvent$4.OutputTuple, InitializedEvent$4.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$3.InputTuple, OwnershipTransferredEvent$3.OutputTuple, OwnershipTransferredEvent$3.OutputObject>;
	getEvent(key: "RemoveSettler"): TypedContractEvent<RemoveSettlerEvent.InputTuple, RemoveSettlerEvent.OutputTuple, RemoveSettlerEvent.OutputObject>;
	filters: {
		"AddSettler(address)": TypedContractEvent<AddSettlerEvent.InputTuple, AddSettlerEvent.OutputTuple, AddSettlerEvent.OutputObject>;
		AddSettler: TypedContractEvent<AddSettlerEvent.InputTuple, AddSettlerEvent.OutputTuple, AddSettlerEvent.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$4.InputTuple, InitializedEvent$4.OutputTuple, InitializedEvent$4.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$4.InputTuple, InitializedEvent$4.OutputTuple, InitializedEvent$4.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$3.InputTuple, OwnershipTransferredEvent$3.OutputTuple, OwnershipTransferredEvent$3.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$3.InputTuple, OwnershipTransferredEvent$3.OutputTuple, OwnershipTransferredEvent$3.OutputObject>;
		"RemoveSettler(address)": TypedContractEvent<RemoveSettlerEvent.InputTuple, RemoveSettlerEvent.OutputTuple, RemoveSettlerEvent.OutputObject>;
		RemoveSettler: TypedContractEvent<RemoveSettlerEvent.InputTuple, RemoveSettlerEvent.OutputTuple, RemoveSettlerEvent.OutputObject>;
	};
}
export interface ARWFeedInterface extends Interface {
	getFunction(nameOrSignature: "addSettler" | "asset" | "checkUpkeep" | "decimals" | "deploymentTimestamp" | "description" | "donID" | "gasLimit" | "getAnswer" | "getRoundData" | "getTimestamp" | "getTimestampAnswer" | "getUpkeepTime" | "handleOracleFulfillment" | "i_router" | "initializeARWFeedInfo" | "initializeConsumer" | "initializeFeed" | "initializeSettler" | "lastUpkeep" | "latestAnswer" | "latestRound" | "latestRoundData" | "latestTimestamp" | "maxBaseGasPrice" | "owner" | "performUpkeep" | "removeSettler" | "renounceOwnership" | "request" | "s_lastRequestId" | "sendRequestCBOR" | "setAsset" | "setDescription" | "setInterval" | "setUpkeep" | "setVersion" | "settlers" | "subscriptionId" | "transferOwnership" | "updateAnswer" | "updateInterval" | "updateRequest" | "upkeepContract" | "upkeepInterval" | "upkeepRateCap" | "upkeepRateInterval" | "upkeepRates" | "version"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AddSettler" | "AnswerUpdated" | "Initialized" | "InitializedConsumer" | "NewAsset" | "NewDescription" | "NewRound" | "OwnershipTransferred" | "RemoveSettler" | "RequestFulfilled" | "RequestSent" | "Response" | "SetUpkeep"): EventFragment;
	encodeFunctionData(functionFragment: "addSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "checkUpkeep", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deploymentTimestamp", values?: undefined): string;
	encodeFunctionData(functionFragment: "description", values?: undefined): string;
	encodeFunctionData(functionFragment: "donID", values?: undefined): string;
	encodeFunctionData(functionFragment: "gasLimit", values?: undefined): string;
	encodeFunctionData(functionFragment: "getAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getRoundData", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getTimestamp", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getTimestampAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getUpkeepTime", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "handleOracleFulfillment", values: [
		BytesLike,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "i_router", values?: undefined): string;
	encodeFunctionData(functionFragment: "initializeARWFeedInfo", values: [
		AddressLike,
		AddressLike,
		string,
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "initializeConsumer", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initializeFeed", values: [
		AddressLike,
		AddressLike,
		string
	]): string;
	encodeFunctionData(functionFragment: "initializeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "lastUpkeep", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRound", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRoundData", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestTimestamp", values?: undefined): string;
	encodeFunctionData(functionFragment: "maxBaseGasPrice", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "performUpkeep", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "removeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "request", values?: undefined): string;
	encodeFunctionData(functionFragment: "s_lastRequestId", values?: undefined): string;
	encodeFunctionData(functionFragment: "sendRequestCBOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "setAsset", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "setDescription", values: [
		string
	]): string;
	encodeFunctionData(functionFragment: "setInterval", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "setUpkeep", values: [
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "setVersion", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "settlers", values?: undefined): string;
	encodeFunctionData(functionFragment: "subscriptionId", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "updateAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "updateInterval", values?: undefined): string;
	encodeFunctionData(functionFragment: "updateRequest", values: [
		BytesLike,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "upkeepContract", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepInterval", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepRateCap", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepRateInterval", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepRates", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "version", values?: undefined): string;
	decodeFunctionResult(functionFragment: "addSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "checkUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deploymentTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "donID", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "gasLimit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getRoundData", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTimestampAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getUpkeepTime", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "handleOracleFulfillment", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "i_router", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeARWFeedInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeConsumer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeFeed", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lastUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRound", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxBaseGasPrice", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "performUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "s_lastRequestId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "sendRequestCBOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setAsset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setDescription", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setInterval", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setVersion", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "settlers", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "subscriptionId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateInterval", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateRequest", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepContract", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepInterval", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepRateCap", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepRateInterval", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepRates", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}
declare namespace AddSettlerEvent$1 {
	type InputTuple = [
		newSettler: AddressLike
	];
	type OutputTuple = [
		newSettler: string
	];
	interface OutputObject {
		newSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace AnswerUpdatedEvent {
	type InputTuple = [
		current: BigNumberish,
		roundId: BigNumberish,
		updatedAt: BigNumberish
	];
	type OutputTuple = [
		current: bigint,
		roundId: bigint,
		updatedAt: bigint
	];
	interface OutputObject {
		current: bigint;
		roundId: bigint;
		updatedAt: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$5 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedConsumerEvent {
	type InputTuple = [
		router: AddressLike
	];
	type OutputTuple = [
		router: string
	];
	interface OutputObject {
		router: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace NewAssetEvent {
	type InputTuple = [
		asset: AddressLike
	];
	type OutputTuple = [
		asset: string
	];
	interface OutputObject {
		asset: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace NewDescriptionEvent {
	type InputTuple = [
		description: string
	];
	type OutputTuple = [
		description: string
	];
	interface OutputObject {
		description: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace NewRoundEvent {
	type InputTuple = [
		roundId: BigNumberish,
		startedBy: AddressLike,
		startedAt: BigNumberish
	];
	type OutputTuple = [
		roundId: bigint,
		startedBy: string,
		startedAt: bigint
	];
	interface OutputObject {
		roundId: bigint;
		startedBy: string;
		startedAt: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$4 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RemoveSettlerEvent$1 {
	type InputTuple = [
		oldSettler: AddressLike
	];
	type OutputTuple = [
		oldSettler: string
	];
	interface OutputObject {
		oldSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RequestFulfilledEvent {
	type InputTuple = [
		id: BytesLike
	];
	type OutputTuple = [
		id: string
	];
	interface OutputObject {
		id: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RequestSentEvent {
	type InputTuple = [
		id: BytesLike
	];
	type OutputTuple = [
		id: string
	];
	interface OutputObject {
		id: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace ResponseEvent {
	type InputTuple = [
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	];
	type OutputTuple = [
		requestId: string,
		response: string,
		err: string
	];
	interface OutputObject {
		requestId: string;
		response: string;
		err: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetUpkeepEvent {
	type InputTuple = [
		upkeepContract: AddressLike,
		upkeepInterval: BigNumberish,
		upkeepRateInterval: BigNumberish,
		upkeepRateCap: BigNumberish,
		maxBaseGasPrice: BigNumberish
	];
	type OutputTuple = [
		upkeepContract: string,
		upkeepInterval: bigint,
		upkeepRateInterval: bigint,
		upkeepRateCap: bigint,
		maxBaseGasPrice: bigint
	];
	interface OutputObject {
		upkeepContract: string;
		upkeepInterval: bigint;
		upkeepRateInterval: bigint;
		upkeepRateCap: bigint;
		maxBaseGasPrice: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ARWFeed extends BaseContract {
	connect(runner?: ContractRunner | null): ARWFeed;
	waitForDeployment(): Promise<this>;
	interface: ARWFeedInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	addSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	checkUpkeep: TypedContractMethod<[
		arg0: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
		}
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deploymentTimestamp: TypedContractMethod<[
	], [
		bigint
	], "view">;
	description: TypedContractMethod<[
	], [
		string
	], "view">;
	donID: TypedContractMethod<[
	], [
		string
	], "view">;
	gasLimit: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getAnswer: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getRoundData: TypedContractMethod<[
		_roundId: BigNumberish
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			roundId: bigint;
			answer: bigint;
			startedAt: bigint;
			updatedAt: bigint;
			answeredInRound: bigint;
		}
	], "view">;
	getTimestamp: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getTimestampAnswer: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getUpkeepTime: TypedContractMethod<[
		timestamp: BigNumberish
	], [
		bigint
	], "view">;
	handleOracleFulfillment: TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	i_router: TypedContractMethod<[
	], [
		string
	], "view">;
	initializeARWFeedInfo: TypedContractMethod<[
		_initOwner: AddressLike,
		_asset: AddressLike,
		_description: string,
		_router: AddressLike,
		_upkeepContract: AddressLike,
		_upkeepInterval: BigNumberish,
		_upkeepRateInterval: BigNumberish,
		_upkeepRateCap: BigNumberish,
		_maxBaseGasPrice: BigNumberish,
		_updateInterval: BigNumberish
	], [
		void
	], "nonpayable">;
	initializeConsumer: TypedContractMethod<[
		_initOwner: AddressLike,
		_router: AddressLike
	], [
		void
	], "nonpayable">;
	initializeFeed: TypedContractMethod<[
		_initOwner: AddressLike,
		_asset: AddressLike,
		_description: string
	], [
		void
	], "nonpayable">;
	initializeSettler: TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	lastUpkeep: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestAnswer: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRound: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRoundData: TypedContractMethod<[
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	latestTimestamp: TypedContractMethod<[
	], [
		bigint
	], "view">;
	maxBaseGasPrice: TypedContractMethod<[
	], [
		bigint
	], "view">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	performUpkeep: TypedContractMethod<[
		arg0: BytesLike
	], [
		void
	], "nonpayable">;
	removeSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	request: TypedContractMethod<[
	], [
		string
	], "view">;
	s_lastRequestId: TypedContractMethod<[
	], [
		string
	], "view">;
	sendRequestCBOR: TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	setAsset: TypedContractMethod<[
		_asset: AddressLike
	], [
		void
	], "nonpayable">;
	setDescription: TypedContractMethod<[
		_description: string
	], [
		void
	], "nonpayable">;
	setInterval: TypedContractMethod<[
		_updateInterval: BigNumberish
	], [
		void
	], "nonpayable">;
	setUpkeep: TypedContractMethod<[
		_upkeepContract: AddressLike,
		_upkeepInterval: BigNumberish,
		_upkeepRateInterval: BigNumberish,
		_upkeepRateCap: BigNumberish,
		_maxBaseGasPrice: BigNumberish
	], [
		void
	], "nonpayable">;
	setVersion: TypedContractMethod<[
		_version: BigNumberish
	], [
		void
	], "nonpayable">;
	settlers: TypedContractMethod<[
	], [
		string[]
	], "view">;
	subscriptionId: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	updateAnswer: TypedContractMethod<[
		newAnswer: BigNumberish
	], [
		void
	], "nonpayable">;
	updateInterval: TypedContractMethod<[
	], [
		bigint
	], "view">;
	updateRequest: TypedContractMethod<[
		_request: BytesLike,
		_subscriptionId: BigNumberish,
		_gasLimit: BigNumberish,
		_donID: BytesLike
	], [
		void
	], "nonpayable">;
	upkeepContract: TypedContractMethod<[
	], [
		string
	], "view">;
	upkeepInterval: TypedContractMethod<[
	], [
		bigint
	], "view">;
	upkeepRateCap: TypedContractMethod<[
	], [
		bigint
	], "view">;
	upkeepRateInterval: TypedContractMethod<[
	], [
		bigint
	], "view">;
	upkeepRates: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	version: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "addSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "checkUpkeep"): TypedContractMethod<[
		arg0: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
		}
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deploymentTimestamp"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "description"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "donID"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "gasLimit"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getAnswer"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getRoundData"): TypedContractMethod<[
		_roundId: BigNumberish
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			roundId: bigint;
			answer: bigint;
			startedAt: bigint;
			updatedAt: bigint;
			answeredInRound: bigint;
		}
	], "view">;
	getFunction(nameOrSignature: "getTimestamp"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getTimestampAnswer"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getUpkeepTime"): TypedContractMethod<[
		timestamp: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "handleOracleFulfillment"): TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "i_router"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "initializeARWFeedInfo"): TypedContractMethod<[
		_initOwner: AddressLike,
		_asset: AddressLike,
		_description: string,
		_router: AddressLike,
		_upkeepContract: AddressLike,
		_upkeepInterval: BigNumberish,
		_upkeepRateInterval: BigNumberish,
		_upkeepRateCap: BigNumberish,
		_maxBaseGasPrice: BigNumberish,
		_updateInterval: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeConsumer"): TypedContractMethod<[
		_initOwner: AddressLike,
		_router: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeFeed"): TypedContractMethod<[
		_initOwner: AddressLike,
		_asset: AddressLike,
		_description: string
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeSettler"): TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "lastUpkeep"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestAnswer"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRound"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRoundData"): TypedContractMethod<[
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	getFunction(nameOrSignature: "latestTimestamp"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxBaseGasPrice"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "performUpkeep"): TypedContractMethod<[
		arg0: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "removeSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "request"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "s_lastRequestId"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "sendRequestCBOR"): TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	getFunction(nameOrSignature: "setAsset"): TypedContractMethod<[
		_asset: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setDescription"): TypedContractMethod<[
		_description: string
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setInterval"): TypedContractMethod<[
		_updateInterval: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setUpkeep"): TypedContractMethod<[
		_upkeepContract: AddressLike,
		_upkeepInterval: BigNumberish,
		_upkeepRateInterval: BigNumberish,
		_upkeepRateCap: BigNumberish,
		_maxBaseGasPrice: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setVersion"): TypedContractMethod<[
		_version: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "settlers"): TypedContractMethod<[
	], [
		string[]
	], "view">;
	getFunction(nameOrSignature: "subscriptionId"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateAnswer"): TypedContractMethod<[
		newAnswer: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateInterval"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "updateRequest"): TypedContractMethod<[
		_request: BytesLike,
		_subscriptionId: BigNumberish,
		_gasLimit: BigNumberish,
		_donID: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "upkeepContract"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "upkeepInterval"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "upkeepRateCap"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "upkeepRateInterval"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "upkeepRates"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "version"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getEvent(key: "AddSettler"): TypedContractEvent<AddSettlerEvent$1.InputTuple, AddSettlerEvent$1.OutputTuple, AddSettlerEvent$1.OutputObject>;
	getEvent(key: "AnswerUpdated"): TypedContractEvent<AnswerUpdatedEvent.InputTuple, AnswerUpdatedEvent.OutputTuple, AnswerUpdatedEvent.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$5.InputTuple, InitializedEvent$5.OutputTuple, InitializedEvent$5.OutputObject>;
	getEvent(key: "InitializedConsumer"): TypedContractEvent<InitializedConsumerEvent.InputTuple, InitializedConsumerEvent.OutputTuple, InitializedConsumerEvent.OutputObject>;
	getEvent(key: "NewAsset"): TypedContractEvent<NewAssetEvent.InputTuple, NewAssetEvent.OutputTuple, NewAssetEvent.OutputObject>;
	getEvent(key: "NewDescription"): TypedContractEvent<NewDescriptionEvent.InputTuple, NewDescriptionEvent.OutputTuple, NewDescriptionEvent.OutputObject>;
	getEvent(key: "NewRound"): TypedContractEvent<NewRoundEvent.InputTuple, NewRoundEvent.OutputTuple, NewRoundEvent.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$4.InputTuple, OwnershipTransferredEvent$4.OutputTuple, OwnershipTransferredEvent$4.OutputObject>;
	getEvent(key: "RemoveSettler"): TypedContractEvent<RemoveSettlerEvent$1.InputTuple, RemoveSettlerEvent$1.OutputTuple, RemoveSettlerEvent$1.OutputObject>;
	getEvent(key: "RequestFulfilled"): TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
	getEvent(key: "RequestSent"): TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
	getEvent(key: "Response"): TypedContractEvent<ResponseEvent.InputTuple, ResponseEvent.OutputTuple, ResponseEvent.OutputObject>;
	getEvent(key: "SetUpkeep"): TypedContractEvent<SetUpkeepEvent.InputTuple, SetUpkeepEvent.OutputTuple, SetUpkeepEvent.OutputObject>;
	filters: {
		"AddSettler(address)": TypedContractEvent<AddSettlerEvent$1.InputTuple, AddSettlerEvent$1.OutputTuple, AddSettlerEvent$1.OutputObject>;
		AddSettler: TypedContractEvent<AddSettlerEvent$1.InputTuple, AddSettlerEvent$1.OutputTuple, AddSettlerEvent$1.OutputObject>;
		"AnswerUpdated(int256,uint256,uint256)": TypedContractEvent<AnswerUpdatedEvent.InputTuple, AnswerUpdatedEvent.OutputTuple, AnswerUpdatedEvent.OutputObject>;
		AnswerUpdated: TypedContractEvent<AnswerUpdatedEvent.InputTuple, AnswerUpdatedEvent.OutputTuple, AnswerUpdatedEvent.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$5.InputTuple, InitializedEvent$5.OutputTuple, InitializedEvent$5.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$5.InputTuple, InitializedEvent$5.OutputTuple, InitializedEvent$5.OutputObject>;
		"InitializedConsumer(address)": TypedContractEvent<InitializedConsumerEvent.InputTuple, InitializedConsumerEvent.OutputTuple, InitializedConsumerEvent.OutputObject>;
		InitializedConsumer: TypedContractEvent<InitializedConsumerEvent.InputTuple, InitializedConsumerEvent.OutputTuple, InitializedConsumerEvent.OutputObject>;
		"NewAsset(address)": TypedContractEvent<NewAssetEvent.InputTuple, NewAssetEvent.OutputTuple, NewAssetEvent.OutputObject>;
		NewAsset: TypedContractEvent<NewAssetEvent.InputTuple, NewAssetEvent.OutputTuple, NewAssetEvent.OutputObject>;
		"NewDescription(string)": TypedContractEvent<NewDescriptionEvent.InputTuple, NewDescriptionEvent.OutputTuple, NewDescriptionEvent.OutputObject>;
		NewDescription: TypedContractEvent<NewDescriptionEvent.InputTuple, NewDescriptionEvent.OutputTuple, NewDescriptionEvent.OutputObject>;
		"NewRound(uint256,address,uint256)": TypedContractEvent<NewRoundEvent.InputTuple, NewRoundEvent.OutputTuple, NewRoundEvent.OutputObject>;
		NewRound: TypedContractEvent<NewRoundEvent.InputTuple, NewRoundEvent.OutputTuple, NewRoundEvent.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$4.InputTuple, OwnershipTransferredEvent$4.OutputTuple, OwnershipTransferredEvent$4.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$4.InputTuple, OwnershipTransferredEvent$4.OutputTuple, OwnershipTransferredEvent$4.OutputObject>;
		"RemoveSettler(address)": TypedContractEvent<RemoveSettlerEvent$1.InputTuple, RemoveSettlerEvent$1.OutputTuple, RemoveSettlerEvent$1.OutputObject>;
		RemoveSettler: TypedContractEvent<RemoveSettlerEvent$1.InputTuple, RemoveSettlerEvent$1.OutputTuple, RemoveSettlerEvent$1.OutputObject>;
		"RequestFulfilled(bytes32)": TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
		RequestFulfilled: TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
		"RequestSent(bytes32)": TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
		RequestSent: TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
		"Response(bytes32,bytes,bytes)": TypedContractEvent<ResponseEvent.InputTuple, ResponseEvent.OutputTuple, ResponseEvent.OutputObject>;
		Response: TypedContractEvent<ResponseEvent.InputTuple, ResponseEvent.OutputTuple, ResponseEvent.OutputObject>;
		"SetUpkeep(address,uint64,uint64,uint64,uint64)": TypedContractEvent<SetUpkeepEvent.InputTuple, SetUpkeepEvent.OutputTuple, SetUpkeepEvent.OutputObject>;
		SetUpkeep: TypedContractEvent<SetUpkeepEvent.InputTuple, SetUpkeepEvent.OutputTuple, SetUpkeepEvent.OutputObject>;
	};
}
export interface BaseFunctionsConsumerInterface extends Interface {
	getFunction(nameOrSignature: "addSettler" | "checkUpkeep" | "donID" | "gasLimit" | "getUpkeepTime" | "handleOracleFulfillment" | "i_router" | "initializeConsumer" | "initializeSettler" | "lastUpkeep" | "maxBaseGasPrice" | "owner" | "performUpkeep" | "removeSettler" | "renounceOwnership" | "request" | "s_lastRequestId" | "sendRequestCBOR" | "setUpkeep" | "settlers" | "subscriptionId" | "transferOwnership" | "updateRequest" | "upkeepContract" | "upkeepInterval" | "upkeepRateCap" | "upkeepRateInterval" | "upkeepRates"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AddSettler" | "Initialized" | "InitializedConsumer" | "OwnershipTransferred" | "RemoveSettler" | "RequestFulfilled" | "RequestSent" | "Response" | "SetUpkeep"): EventFragment;
	encodeFunctionData(functionFragment: "addSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "checkUpkeep", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "donID", values?: undefined): string;
	encodeFunctionData(functionFragment: "gasLimit", values?: undefined): string;
	encodeFunctionData(functionFragment: "getUpkeepTime", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "handleOracleFulfillment", values: [
		BytesLike,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "i_router", values?: undefined): string;
	encodeFunctionData(functionFragment: "initializeConsumer", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initializeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "lastUpkeep", values?: undefined): string;
	encodeFunctionData(functionFragment: "maxBaseGasPrice", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "performUpkeep", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "removeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "request", values?: undefined): string;
	encodeFunctionData(functionFragment: "s_lastRequestId", values?: undefined): string;
	encodeFunctionData(functionFragment: "sendRequestCBOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "setUpkeep", values: [
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "settlers", values?: undefined): string;
	encodeFunctionData(functionFragment: "subscriptionId", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "updateRequest", values: [
		BytesLike,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "upkeepContract", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepInterval", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepRateCap", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepRateInterval", values?: undefined): string;
	encodeFunctionData(functionFragment: "upkeepRates", values: [
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "addSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "checkUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "donID", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "gasLimit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getUpkeepTime", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "handleOracleFulfillment", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "i_router", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeConsumer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lastUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxBaseGasPrice", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "performUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "s_lastRequestId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "sendRequestCBOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setUpkeep", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "settlers", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "subscriptionId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateRequest", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepContract", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepInterval", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepRateCap", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepRateInterval", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upkeepRates", data: BytesLike): Result;
}
declare namespace AddSettlerEvent$2 {
	type InputTuple = [
		newSettler: AddressLike
	];
	type OutputTuple = [
		newSettler: string
	];
	interface OutputObject {
		newSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$6 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedConsumerEvent$1 {
	type InputTuple = [
		router: AddressLike
	];
	type OutputTuple = [
		router: string
	];
	interface OutputObject {
		router: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$5 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RemoveSettlerEvent$2 {
	type InputTuple = [
		oldSettler: AddressLike
	];
	type OutputTuple = [
		oldSettler: string
	];
	interface OutputObject {
		oldSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RequestFulfilledEvent$1 {
	type InputTuple = [
		id: BytesLike
	];
	type OutputTuple = [
		id: string
	];
	interface OutputObject {
		id: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RequestSentEvent$1 {
	type InputTuple = [
		id: BytesLike
	];
	type OutputTuple = [
		id: string
	];
	interface OutputObject {
		id: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace ResponseEvent$1 {
	type InputTuple = [
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	];
	type OutputTuple = [
		requestId: string,
		response: string,
		err: string
	];
	interface OutputObject {
		requestId: string;
		response: string;
		err: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetUpkeepEvent$1 {
	type InputTuple = [
		upkeepContract: AddressLike,
		upkeepInterval: BigNumberish,
		upkeepRateInterval: BigNumberish,
		upkeepRateCap: BigNumberish,
		maxBaseGasPrice: BigNumberish
	];
	type OutputTuple = [
		upkeepContract: string,
		upkeepInterval: bigint,
		upkeepRateInterval: bigint,
		upkeepRateCap: bigint,
		maxBaseGasPrice: bigint
	];
	interface OutputObject {
		upkeepContract: string;
		upkeepInterval: bigint;
		upkeepRateInterval: bigint;
		upkeepRateCap: bigint;
		maxBaseGasPrice: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface BaseFunctionsConsumer extends BaseContract {
	connect(runner?: ContractRunner | null): BaseFunctionsConsumer;
	waitForDeployment(): Promise<this>;
	interface: BaseFunctionsConsumerInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	addSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	checkUpkeep: TypedContractMethod<[
		arg0: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
		}
	], "view">;
	donID: TypedContractMethod<[
	], [
		string
	], "view">;
	gasLimit: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getUpkeepTime: TypedContractMethod<[
		timestamp: BigNumberish
	], [
		bigint
	], "view">;
	handleOracleFulfillment: TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	i_router: TypedContractMethod<[
	], [
		string
	], "view">;
	initializeConsumer: TypedContractMethod<[
		_initOwner: AddressLike,
		_router: AddressLike
	], [
		void
	], "nonpayable">;
	initializeSettler: TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	lastUpkeep: TypedContractMethod<[
	], [
		bigint
	], "view">;
	maxBaseGasPrice: TypedContractMethod<[
	], [
		bigint
	], "view">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	performUpkeep: TypedContractMethod<[
		arg0: BytesLike
	], [
		void
	], "nonpayable">;
	removeSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	request: TypedContractMethod<[
	], [
		string
	], "view">;
	s_lastRequestId: TypedContractMethod<[
	], [
		string
	], "view">;
	sendRequestCBOR: TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	setUpkeep: TypedContractMethod<[
		_upkeepContract: AddressLike,
		_upkeepInterval: BigNumberish,
		_upkeepRateInterval: BigNumberish,
		_upkeepRateCap: BigNumberish,
		_maxBaseGasPrice: BigNumberish
	], [
		void
	], "nonpayable">;
	settlers: TypedContractMethod<[
	], [
		string[]
	], "view">;
	subscriptionId: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	updateRequest: TypedContractMethod<[
		_request: BytesLike,
		_subscriptionId: BigNumberish,
		_gasLimit: BigNumberish,
		_donID: BytesLike
	], [
		void
	], "nonpayable">;
	upkeepContract: TypedContractMethod<[
	], [
		string
	], "view">;
	upkeepInterval: TypedContractMethod<[
	], [
		bigint
	], "view">;
	upkeepRateCap: TypedContractMethod<[
	], [
		bigint
	], "view">;
	upkeepRateInterval: TypedContractMethod<[
	], [
		bigint
	], "view">;
	upkeepRates: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "addSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "checkUpkeep"): TypedContractMethod<[
		arg0: BytesLike
	], [
		[
			boolean,
			string
		] & {
			upkeepNeeded: boolean;
		}
	], "view">;
	getFunction(nameOrSignature: "donID"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "gasLimit"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getUpkeepTime"): TypedContractMethod<[
		timestamp: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "handleOracleFulfillment"): TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "i_router"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "initializeConsumer"): TypedContractMethod<[
		_initOwner: AddressLike,
		_router: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeSettler"): TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "lastUpkeep"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxBaseGasPrice"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "performUpkeep"): TypedContractMethod<[
		arg0: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "removeSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "request"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "s_lastRequestId"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "sendRequestCBOR"): TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	getFunction(nameOrSignature: "setUpkeep"): TypedContractMethod<[
		_upkeepContract: AddressLike,
		_upkeepInterval: BigNumberish,
		_upkeepRateInterval: BigNumberish,
		_upkeepRateCap: BigNumberish,
		_maxBaseGasPrice: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "settlers"): TypedContractMethod<[
	], [
		string[]
	], "view">;
	getFunction(nameOrSignature: "subscriptionId"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateRequest"): TypedContractMethod<[
		_request: BytesLike,
		_subscriptionId: BigNumberish,
		_gasLimit: BigNumberish,
		_donID: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "upkeepContract"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "upkeepInterval"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "upkeepRateCap"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "upkeepRateInterval"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "upkeepRates"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getEvent(key: "AddSettler"): TypedContractEvent<AddSettlerEvent$2.InputTuple, AddSettlerEvent$2.OutputTuple, AddSettlerEvent$2.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$6.InputTuple, InitializedEvent$6.OutputTuple, InitializedEvent$6.OutputObject>;
	getEvent(key: "InitializedConsumer"): TypedContractEvent<InitializedConsumerEvent$1.InputTuple, InitializedConsumerEvent$1.OutputTuple, InitializedConsumerEvent$1.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$5.InputTuple, OwnershipTransferredEvent$5.OutputTuple, OwnershipTransferredEvent$5.OutputObject>;
	getEvent(key: "RemoveSettler"): TypedContractEvent<RemoveSettlerEvent$2.InputTuple, RemoveSettlerEvent$2.OutputTuple, RemoveSettlerEvent$2.OutputObject>;
	getEvent(key: "RequestFulfilled"): TypedContractEvent<RequestFulfilledEvent$1.InputTuple, RequestFulfilledEvent$1.OutputTuple, RequestFulfilledEvent$1.OutputObject>;
	getEvent(key: "RequestSent"): TypedContractEvent<RequestSentEvent$1.InputTuple, RequestSentEvent$1.OutputTuple, RequestSentEvent$1.OutputObject>;
	getEvent(key: "Response"): TypedContractEvent<ResponseEvent$1.InputTuple, ResponseEvent$1.OutputTuple, ResponseEvent$1.OutputObject>;
	getEvent(key: "SetUpkeep"): TypedContractEvent<SetUpkeepEvent$1.InputTuple, SetUpkeepEvent$1.OutputTuple, SetUpkeepEvent$1.OutputObject>;
	filters: {
		"AddSettler(address)": TypedContractEvent<AddSettlerEvent$2.InputTuple, AddSettlerEvent$2.OutputTuple, AddSettlerEvent$2.OutputObject>;
		AddSettler: TypedContractEvent<AddSettlerEvent$2.InputTuple, AddSettlerEvent$2.OutputTuple, AddSettlerEvent$2.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$6.InputTuple, InitializedEvent$6.OutputTuple, InitializedEvent$6.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$6.InputTuple, InitializedEvent$6.OutputTuple, InitializedEvent$6.OutputObject>;
		"InitializedConsumer(address)": TypedContractEvent<InitializedConsumerEvent$1.InputTuple, InitializedConsumerEvent$1.OutputTuple, InitializedConsumerEvent$1.OutputObject>;
		InitializedConsumer: TypedContractEvent<InitializedConsumerEvent$1.InputTuple, InitializedConsumerEvent$1.OutputTuple, InitializedConsumerEvent$1.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$5.InputTuple, OwnershipTransferredEvent$5.OutputTuple, OwnershipTransferredEvent$5.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$5.InputTuple, OwnershipTransferredEvent$5.OutputTuple, OwnershipTransferredEvent$5.OutputObject>;
		"RemoveSettler(address)": TypedContractEvent<RemoveSettlerEvent$2.InputTuple, RemoveSettlerEvent$2.OutputTuple, RemoveSettlerEvent$2.OutputObject>;
		RemoveSettler: TypedContractEvent<RemoveSettlerEvent$2.InputTuple, RemoveSettlerEvent$2.OutputTuple, RemoveSettlerEvent$2.OutputObject>;
		"RequestFulfilled(bytes32)": TypedContractEvent<RequestFulfilledEvent$1.InputTuple, RequestFulfilledEvent$1.OutputTuple, RequestFulfilledEvent$1.OutputObject>;
		RequestFulfilled: TypedContractEvent<RequestFulfilledEvent$1.InputTuple, RequestFulfilledEvent$1.OutputTuple, RequestFulfilledEvent$1.OutputObject>;
		"RequestSent(bytes32)": TypedContractEvent<RequestSentEvent$1.InputTuple, RequestSentEvent$1.OutputTuple, RequestSentEvent$1.OutputObject>;
		RequestSent: TypedContractEvent<RequestSentEvent$1.InputTuple, RequestSentEvent$1.OutputTuple, RequestSentEvent$1.OutputObject>;
		"Response(bytes32,bytes,bytes)": TypedContractEvent<ResponseEvent$1.InputTuple, ResponseEvent$1.OutputTuple, ResponseEvent$1.OutputObject>;
		Response: TypedContractEvent<ResponseEvent$1.InputTuple, ResponseEvent$1.OutputTuple, ResponseEvent$1.OutputObject>;
		"SetUpkeep(address,uint64,uint64,uint64,uint64)": TypedContractEvent<SetUpkeepEvent$1.InputTuple, SetUpkeepEvent$1.OutputTuple, SetUpkeepEvent$1.OutputObject>;
		SetUpkeep: TypedContractEvent<SetUpkeepEvent$1.InputTuple, SetUpkeepEvent$1.OutputTuple, SetUpkeepEvent$1.OutputObject>;
	};
}
export interface DataFeedInterface extends Interface {
	getFunction(nameOrSignature: "addSettler" | "asset" | "decimals" | "deploymentTimestamp" | "description" | "getAnswer" | "getRoundData" | "getTimestamp" | "getTimestampAnswer" | "initializeFeed" | "initializeSettler" | "latestAnswer" | "latestRound" | "latestRoundData" | "latestTimestamp" | "owner" | "removeSettler" | "renounceOwnership" | "setAsset" | "setDescription" | "setVersion" | "settlers" | "transferOwnership" | "updateAnswer" | "version"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AddSettler" | "AnswerUpdated" | "Initialized" | "NewAsset" | "NewDescription" | "NewRound" | "OwnershipTransferred" | "RemoveSettler"): EventFragment;
	encodeFunctionData(functionFragment: "addSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deploymentTimestamp", values?: undefined): string;
	encodeFunctionData(functionFragment: "description", values?: undefined): string;
	encodeFunctionData(functionFragment: "getAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getRoundData", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getTimestamp", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getTimestampAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "initializeFeed", values: [
		AddressLike,
		AddressLike,
		string
	]): string;
	encodeFunctionData(functionFragment: "initializeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRound", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRoundData", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestTimestamp", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "removeSettler", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "setAsset", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "setDescription", values: [
		string
	]): string;
	encodeFunctionData(functionFragment: "setVersion", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "settlers", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "updateAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "version", values?: undefined): string;
	decodeFunctionResult(functionFragment: "addSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deploymentTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getRoundData", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTimestampAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeFeed", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRound", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removeSettler", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setAsset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setDescription", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setVersion", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "settlers", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}
declare namespace AddSettlerEvent$3 {
	type InputTuple = [
		newSettler: AddressLike
	];
	type OutputTuple = [
		newSettler: string
	];
	interface OutputObject {
		newSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace AnswerUpdatedEvent$1 {
	type InputTuple = [
		current: BigNumberish,
		roundId: BigNumberish,
		updatedAt: BigNumberish
	];
	type OutputTuple = [
		current: bigint,
		roundId: bigint,
		updatedAt: bigint
	];
	interface OutputObject {
		current: bigint;
		roundId: bigint;
		updatedAt: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$7 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace NewAssetEvent$1 {
	type InputTuple = [
		asset: AddressLike
	];
	type OutputTuple = [
		asset: string
	];
	interface OutputObject {
		asset: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace NewDescriptionEvent$1 {
	type InputTuple = [
		description: string
	];
	type OutputTuple = [
		description: string
	];
	interface OutputObject {
		description: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace NewRoundEvent$1 {
	type InputTuple = [
		roundId: BigNumberish,
		startedBy: AddressLike,
		startedAt: BigNumberish
	];
	type OutputTuple = [
		roundId: bigint,
		startedBy: string,
		startedAt: bigint
	];
	interface OutputObject {
		roundId: bigint;
		startedBy: string;
		startedAt: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$6 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RemoveSettlerEvent$3 {
	type InputTuple = [
		oldSettler: AddressLike
	];
	type OutputTuple = [
		oldSettler: string
	];
	interface OutputObject {
		oldSettler: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface DataFeed extends BaseContract {
	connect(runner?: ContractRunner | null): DataFeed;
	waitForDeployment(): Promise<this>;
	interface: DataFeedInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	addSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deploymentTimestamp: TypedContractMethod<[
	], [
		bigint
	], "view">;
	description: TypedContractMethod<[
	], [
		string
	], "view">;
	getAnswer: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getRoundData: TypedContractMethod<[
		_roundId: BigNumberish
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			roundId: bigint;
			answer: bigint;
			startedAt: bigint;
			updatedAt: bigint;
			answeredInRound: bigint;
		}
	], "view">;
	getTimestamp: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getTimestampAnswer: TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	initializeFeed: TypedContractMethod<[
		_initOwner: AddressLike,
		_asset: AddressLike,
		_description: string
	], [
		void
	], "nonpayable">;
	initializeSettler: TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	latestAnswer: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRound: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRoundData: TypedContractMethod<[
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	latestTimestamp: TypedContractMethod<[
	], [
		bigint
	], "view">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	removeSettler: TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	setAsset: TypedContractMethod<[
		_asset: AddressLike
	], [
		void
	], "nonpayable">;
	setDescription: TypedContractMethod<[
		_description: string
	], [
		void
	], "nonpayable">;
	setVersion: TypedContractMethod<[
		_version: BigNumberish
	], [
		void
	], "nonpayable">;
	settlers: TypedContractMethod<[
	], [
		string[]
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	updateAnswer: TypedContractMethod<[
		newAnswer: BigNumberish
	], [
		void
	], "nonpayable">;
	version: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "addSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deploymentTimestamp"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "description"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "getAnswer"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getRoundData"): TypedContractMethod<[
		_roundId: BigNumberish
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			roundId: bigint;
			answer: bigint;
			startedAt: bigint;
			updatedAt: bigint;
			answeredInRound: bigint;
		}
	], "view">;
	getFunction(nameOrSignature: "getTimestamp"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getTimestampAnswer"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "initializeFeed"): TypedContractMethod<[
		_initOwner: AddressLike,
		_asset: AddressLike,
		_description: string
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeSettler"): TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "latestAnswer"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRound"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRoundData"): TypedContractMethod<[
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	getFunction(nameOrSignature: "latestTimestamp"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "removeSettler"): TypedContractMethod<[
		_settler: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setAsset"): TypedContractMethod<[
		_asset: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setDescription"): TypedContractMethod<[
		_description: string
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "setVersion"): TypedContractMethod<[
		_version: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "settlers"): TypedContractMethod<[
	], [
		string[]
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateAnswer"): TypedContractMethod<[
		newAnswer: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "version"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getEvent(key: "AddSettler"): TypedContractEvent<AddSettlerEvent$3.InputTuple, AddSettlerEvent$3.OutputTuple, AddSettlerEvent$3.OutputObject>;
	getEvent(key: "AnswerUpdated"): TypedContractEvent<AnswerUpdatedEvent$1.InputTuple, AnswerUpdatedEvent$1.OutputTuple, AnswerUpdatedEvent$1.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$7.InputTuple, InitializedEvent$7.OutputTuple, InitializedEvent$7.OutputObject>;
	getEvent(key: "NewAsset"): TypedContractEvent<NewAssetEvent$1.InputTuple, NewAssetEvent$1.OutputTuple, NewAssetEvent$1.OutputObject>;
	getEvent(key: "NewDescription"): TypedContractEvent<NewDescriptionEvent$1.InputTuple, NewDescriptionEvent$1.OutputTuple, NewDescriptionEvent$1.OutputObject>;
	getEvent(key: "NewRound"): TypedContractEvent<NewRoundEvent$1.InputTuple, NewRoundEvent$1.OutputTuple, NewRoundEvent$1.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$6.InputTuple, OwnershipTransferredEvent$6.OutputTuple, OwnershipTransferredEvent$6.OutputObject>;
	getEvent(key: "RemoveSettler"): TypedContractEvent<RemoveSettlerEvent$3.InputTuple, RemoveSettlerEvent$3.OutputTuple, RemoveSettlerEvent$3.OutputObject>;
	filters: {
		"AddSettler(address)": TypedContractEvent<AddSettlerEvent$3.InputTuple, AddSettlerEvent$3.OutputTuple, AddSettlerEvent$3.OutputObject>;
		AddSettler: TypedContractEvent<AddSettlerEvent$3.InputTuple, AddSettlerEvent$3.OutputTuple, AddSettlerEvent$3.OutputObject>;
		"AnswerUpdated(int256,uint256,uint256)": TypedContractEvent<AnswerUpdatedEvent$1.InputTuple, AnswerUpdatedEvent$1.OutputTuple, AnswerUpdatedEvent$1.OutputObject>;
		AnswerUpdated: TypedContractEvent<AnswerUpdatedEvent$1.InputTuple, AnswerUpdatedEvent$1.OutputTuple, AnswerUpdatedEvent$1.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$7.InputTuple, InitializedEvent$7.OutputTuple, InitializedEvent$7.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$7.InputTuple, InitializedEvent$7.OutputTuple, InitializedEvent$7.OutputObject>;
		"NewAsset(address)": TypedContractEvent<NewAssetEvent$1.InputTuple, NewAssetEvent$1.OutputTuple, NewAssetEvent$1.OutputObject>;
		NewAsset: TypedContractEvent<NewAssetEvent$1.InputTuple, NewAssetEvent$1.OutputTuple, NewAssetEvent$1.OutputObject>;
		"NewDescription(string)": TypedContractEvent<NewDescriptionEvent$1.InputTuple, NewDescriptionEvent$1.OutputTuple, NewDescriptionEvent$1.OutputObject>;
		NewDescription: TypedContractEvent<NewDescriptionEvent$1.InputTuple, NewDescriptionEvent$1.OutputTuple, NewDescriptionEvent$1.OutputObject>;
		"NewRound(uint256,address,uint256)": TypedContractEvent<NewRoundEvent$1.InputTuple, NewRoundEvent$1.OutputTuple, NewRoundEvent$1.OutputObject>;
		NewRound: TypedContractEvent<NewRoundEvent$1.InputTuple, NewRoundEvent$1.OutputTuple, NewRoundEvent$1.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$6.InputTuple, OwnershipTransferredEvent$6.OutputTuple, OwnershipTransferredEvent$6.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$6.InputTuple, OwnershipTransferredEvent$6.OutputTuple, OwnershipTransferredEvent$6.OutputObject>;
		"RemoveSettler(address)": TypedContractEvent<RemoveSettlerEvent$3.InputTuple, RemoveSettlerEvent$3.OutputTuple, RemoveSettlerEvent$3.OutputObject>;
		RemoveSettler: TypedContractEvent<RemoveSettlerEvent$3.InputTuple, RemoveSettlerEvent$3.OutputTuple, RemoveSettlerEvent$3.OutputObject>;
	};
}
export interface DataFeedAggregatorInterface extends Interface {
	getFunction(nameOrSignature: "aggregator" | "asset" | "callAsset" | "decimals" | "deploymentTimestamp" | "description" | "getAnswer" | "getRoundData" | "getTimestamp" | "getTimestampAnswer" | "initialize" | "latestAnswer" | "latestRound" | "latestRoundData" | "latestTimestamp" | "owner" | "phaseAggregators" | "phaseId" | "proposeAggregator" | "renounceOwnership" | "transferOwnership" | "version"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "FeedConfirmed" | "FeedProposed" | "Initialized" | "OwnershipTransferred"): EventFragment;
	encodeFunctionData(functionFragment: "aggregator", values?: undefined): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "callAsset", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deploymentTimestamp", values?: undefined): string;
	encodeFunctionData(functionFragment: "description", values?: undefined): string;
	encodeFunctionData(functionFragment: "getAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getRoundData", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getTimestamp", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getTimestampAnswer", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRound", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestRoundData", values?: undefined): string;
	encodeFunctionData(functionFragment: "latestTimestamp", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "phaseAggregators", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "phaseId", values?: undefined): string;
	encodeFunctionData(functionFragment: "proposeAggregator", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "version", values?: undefined): string;
	decodeFunctionResult(functionFragment: "aggregator", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "callAsset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deploymentTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getRoundData", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getTimestampAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRound", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "latestTimestamp", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "phaseAggregators", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "phaseId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "proposeAggregator", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}
declare namespace FeedConfirmedEvent {
	type InputTuple = [
		asset: AddressLike,
		denomination: AddressLike,
		latestAggregator: AddressLike,
		previousAggregator: AddressLike,
		nextPhaseId: BigNumberish,
		sender: AddressLike
	];
	type OutputTuple = [
		asset: string,
		denomination: string,
		latestAggregator: string,
		previousAggregator: string,
		nextPhaseId: bigint,
		sender: string
	];
	interface OutputObject {
		asset: string;
		denomination: string;
		latestAggregator: string;
		previousAggregator: string;
		nextPhaseId: bigint;
		sender: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace FeedProposedEvent {
	type InputTuple = [
		asset: AddressLike,
		denomination: AddressLike,
		proposedAggregator: AddressLike,
		currentAggregator: AddressLike,
		sender: AddressLike
	];
	type OutputTuple = [
		asset: string,
		denomination: string,
		proposedAggregator: string,
		currentAggregator: string,
		sender: string
	];
	interface OutputObject {
		asset: string;
		denomination: string;
		proposedAggregator: string;
		currentAggregator: string;
		sender: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$8 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$7 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface DataFeedAggregator extends BaseContract {
	connect(runner?: ContractRunner | null): DataFeedAggregator;
	waitForDeployment(): Promise<this>;
	interface: DataFeedAggregatorInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	aggregator: TypedContractMethod<[
	], [
		string
	], "view">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	callAsset: TypedContractMethod<[
		_aggregator: AddressLike
	], [
		string
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deploymentTimestamp: TypedContractMethod<[
	], [
		bigint
	], "view">;
	description: TypedContractMethod<[
	], [
		string
	], "view">;
	getAnswer: TypedContractMethod<[
		_roundId: BigNumberish
	], [
		bigint
	], "view">;
	getRoundData: TypedContractMethod<[
		_roundId: BigNumberish
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	getTimestamp: TypedContractMethod<[
		_roundId: BigNumberish
	], [
		bigint
	], "view">;
	getTimestampAnswer: TypedContractMethod<[
		_timestamp: BigNumberish
	], [
		bigint
	], "view">;
	initialize: TypedContractMethod<[
		_initOwner: AddressLike,
		_aggregator: AddressLike
	], [
		void
	], "nonpayable">;
	latestAnswer: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRound: TypedContractMethod<[
	], [
		bigint
	], "view">;
	latestRoundData: TypedContractMethod<[
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	latestTimestamp: TypedContractMethod<[
	], [
		bigint
	], "view">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	phaseAggregators: TypedContractMethod<[
		arg0: BigNumberish
	], [
		string
	], "view">;
	phaseId: TypedContractMethod<[
	], [
		bigint
	], "view">;
	proposeAggregator: TypedContractMethod<[
		_aggregator: AddressLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	version: TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "aggregator"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "callAsset"): TypedContractMethod<[
		_aggregator: AddressLike
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deploymentTimestamp"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "description"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "getAnswer"): TypedContractMethod<[
		_roundId: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getRoundData"): TypedContractMethod<[
		_roundId: BigNumberish
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	getFunction(nameOrSignature: "getTimestamp"): TypedContractMethod<[
		_roundId: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getTimestampAnswer"): TypedContractMethod<[
		_timestamp: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_initOwner: AddressLike,
		_aggregator: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "latestAnswer"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRound"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "latestRoundData"): TypedContractMethod<[
	], [
		[
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		]
	], "view">;
	getFunction(nameOrSignature: "latestTimestamp"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "phaseAggregators"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "phaseId"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "proposeAggregator"): TypedContractMethod<[
		_aggregator: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "version"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getEvent(key: "FeedConfirmed"): TypedContractEvent<FeedConfirmedEvent.InputTuple, FeedConfirmedEvent.OutputTuple, FeedConfirmedEvent.OutputObject>;
	getEvent(key: "FeedProposed"): TypedContractEvent<FeedProposedEvent.InputTuple, FeedProposedEvent.OutputTuple, FeedProposedEvent.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$8.InputTuple, InitializedEvent$8.OutputTuple, InitializedEvent$8.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$7.InputTuple, OwnershipTransferredEvent$7.OutputTuple, OwnershipTransferredEvent$7.OutputObject>;
	filters: {
		"FeedConfirmed(address,address,address,address,uint16,address)": TypedContractEvent<FeedConfirmedEvent.InputTuple, FeedConfirmedEvent.OutputTuple, FeedConfirmedEvent.OutputObject>;
		FeedConfirmed: TypedContractEvent<FeedConfirmedEvent.InputTuple, FeedConfirmedEvent.OutputTuple, FeedConfirmedEvent.OutputObject>;
		"FeedProposed(address,address,address,address,address)": TypedContractEvent<FeedProposedEvent.InputTuple, FeedProposedEvent.OutputTuple, FeedProposedEvent.OutputObject>;
		FeedProposed: TypedContractEvent<FeedProposedEvent.InputTuple, FeedProposedEvent.OutputTuple, FeedProposedEvent.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$8.InputTuple, InitializedEvent$8.OutputTuple, InitializedEvent$8.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$8.InputTuple, InitializedEvent$8.OutputTuple, InitializedEvent$8.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$7.InputTuple, OwnershipTransferredEvent$7.OutputTuple, OwnershipTransferredEvent$7.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$7.InputTuple, OwnershipTransferredEvent$7.OutputTuple, OwnershipTransferredEvent$7.OutputObject>;
	};
}
export interface FunctionsClientInterface extends Interface {
	getFunction(nameOrSignature: "handleOracleFulfillment" | "i_router"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "RequestFulfilled" | "RequestSent"): EventFragment;
	encodeFunctionData(functionFragment: "handleOracleFulfillment", values: [
		BytesLike,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "i_router", values?: undefined): string;
	decodeFunctionResult(functionFragment: "handleOracleFulfillment", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "i_router", data: BytesLike): Result;
}
declare namespace RequestFulfilledEvent$2 {
	type InputTuple = [
		id: BytesLike
	];
	type OutputTuple = [
		id: string
	];
	interface OutputObject {
		id: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RequestSentEvent$2 {
	type InputTuple = [
		id: BytesLike
	];
	type OutputTuple = [
		id: string
	];
	interface OutputObject {
		id: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface FunctionsClient extends BaseContract {
	connect(runner?: ContractRunner | null): FunctionsClient;
	waitForDeployment(): Promise<this>;
	interface: FunctionsClientInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	handleOracleFulfillment: TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	i_router: TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "handleOracleFulfillment"): TypedContractMethod<[
		requestId: BytesLike,
		response: BytesLike,
		err: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "i_router"): TypedContractMethod<[
	], [
		string
	], "view">;
	getEvent(key: "RequestFulfilled"): TypedContractEvent<RequestFulfilledEvent$2.InputTuple, RequestFulfilledEvent$2.OutputTuple, RequestFulfilledEvent$2.OutputObject>;
	getEvent(key: "RequestSent"): TypedContractEvent<RequestSentEvent$2.InputTuple, RequestSentEvent$2.OutputTuple, RequestSentEvent$2.OutputObject>;
	filters: {
		"RequestFulfilled(bytes32)": TypedContractEvent<RequestFulfilledEvent$2.InputTuple, RequestFulfilledEvent$2.OutputTuple, RequestFulfilledEvent$2.OutputObject>;
		RequestFulfilled: TypedContractEvent<RequestFulfilledEvent$2.InputTuple, RequestFulfilledEvent$2.OutputTuple, RequestFulfilledEvent$2.OutputObject>;
		"RequestSent(bytes32)": TypedContractEvent<RequestSentEvent$2.InputTuple, RequestSentEvent$2.OutputTuple, RequestSentEvent$2.OutputObject>;
		RequestSent: TypedContractEvent<RequestSentEvent$2.InputTuple, RequestSentEvent$2.OutputTuple, RequestSentEvent$2.OutputObject>;
	};
}
export interface InitializableProxyInterface extends Interface {
	getFunction(nameOrSignature: "admin" | "changeAdmin" | "changeDescription" | "implementation" | "initializeProxy" | "proxyDescription" | "upgradeToAndCall"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AdminChanged" | "DescriptionChanged" | "Upgraded"): EventFragment;
	encodeFunctionData(functionFragment: "admin", values?: undefined): string;
	encodeFunctionData(functionFragment: "changeAdmin", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "changeDescription", values: [
		string
	]): string;
	encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
	encodeFunctionData(functionFragment: "initializeProxy", values: [
		string,
		AddressLike,
		AddressLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "proxyDescription", values?: undefined): string;
	encodeFunctionData(functionFragment: "upgradeToAndCall", values: [
		AddressLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "changeDescription", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "proxyDescription", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
declare namespace AdminChangedEvent$1 {
	type InputTuple = [
		previousAdmin: AddressLike,
		newAdmin: AddressLike
	];
	type OutputTuple = [
		previousAdmin: string,
		newAdmin: string
	];
	interface OutputObject {
		previousAdmin: string;
		newAdmin: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DescriptionChangedEvent {
	type InputTuple = [
		description: string
	];
	type OutputTuple = [
		description: string
	];
	interface OutputObject {
		description: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace UpgradedEvent$1 {
	type InputTuple = [
		implementation: AddressLike
	];
	type OutputTuple = [
		implementation: string
	];
	interface OutputObject {
		implementation: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface InitializableProxy extends BaseContract {
	connect(runner?: ContractRunner | null): InitializableProxy;
	waitForDeployment(): Promise<this>;
	interface: InitializableProxyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	admin: TypedContractMethod<[
	], [
		string
	], "view">;
	changeAdmin: TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	changeDescription: TypedContractMethod<[
		_description: string
	], [
		void
	], "nonpayable">;
	implementation: TypedContractMethod<[
	], [
		string
	], "view">;
	initializeProxy: TypedContractMethod<[
		_description: string,
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	proxyDescription: TypedContractMethod<[
	], [
		string
	], "view">;
	upgradeToAndCall: TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "admin"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "changeAdmin"): TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "changeDescription"): TypedContractMethod<[
		_description: string
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "implementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "initializeProxy"): TypedContractMethod<[
		_description: string,
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "proxyDescription"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getEvent(key: "AdminChanged"): TypedContractEvent<AdminChangedEvent$1.InputTuple, AdminChangedEvent$1.OutputTuple, AdminChangedEvent$1.OutputObject>;
	getEvent(key: "DescriptionChanged"): TypedContractEvent<DescriptionChangedEvent.InputTuple, DescriptionChangedEvent.OutputTuple, DescriptionChangedEvent.OutputObject>;
	getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent$1.InputTuple, UpgradedEvent$1.OutputTuple, UpgradedEvent$1.OutputObject>;
	filters: {
		"AdminChanged(address,address)": TypedContractEvent<AdminChangedEvent$1.InputTuple, AdminChangedEvent$1.OutputTuple, AdminChangedEvent$1.OutputObject>;
		AdminChanged: TypedContractEvent<AdminChangedEvent$1.InputTuple, AdminChangedEvent$1.OutputTuple, AdminChangedEvent$1.OutputObject>;
		"DescriptionChanged(string)": TypedContractEvent<DescriptionChangedEvent.InputTuple, DescriptionChangedEvent.OutputTuple, DescriptionChangedEvent.OutputObject>;
		DescriptionChanged: TypedContractEvent<DescriptionChangedEvent.InputTuple, DescriptionChangedEvent.OutputTuple, DescriptionChangedEvent.OutputObject>;
		"Upgraded(address)": TypedContractEvent<UpgradedEvent$1.InputTuple, UpgradedEvent$1.OutputTuple, UpgradedEvent$1.OutputObject>;
		Upgraded: TypedContractEvent<UpgradedEvent$1.InputTuple, UpgradedEvent$1.OutputTuple, UpgradedEvent$1.OutputObject>;
	};
}
export interface ERC20MockInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "eip712Domain" | "mint(address,uint256)" | "mint(uint256)" | "name" | "nonces" | "owner" | "permit" | "renounceOwnership" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "EIP712DomainChanged" | "OwnershipTransferred" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "burn", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "burnFrom", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "mint(address,uint256)", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "mint(uint256)", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint(address,uint256)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint(uint256)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace ApprovalEvent$7 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$3 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$8 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$7 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Mock extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Mock;
	waitForDeployment(): Promise<this>;
	interface: ERC20MockInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	burn: TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	burnFrom: TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	"mint(address,uint256)": TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	"mint(uint256)": TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "burn"): TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "mint(address,uint256)"): TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "mint(uint256)"): TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$7.InputTuple, ApprovalEvent$7.OutputTuple, ApprovalEvent$7.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$3.InputTuple, EIP712DomainChangedEvent$3.OutputTuple, EIP712DomainChangedEvent$3.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$8.InputTuple, OwnershipTransferredEvent$8.OutputTuple, OwnershipTransferredEvent$8.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$7.InputTuple, TransferEvent$7.OutputTuple, TransferEvent$7.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$7.InputTuple, ApprovalEvent$7.OutputTuple, ApprovalEvent$7.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$7.InputTuple, ApprovalEvent$7.OutputTuple, ApprovalEvent$7.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$3.InputTuple, EIP712DomainChangedEvent$3.OutputTuple, EIP712DomainChangedEvent$3.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$3.InputTuple, EIP712DomainChangedEvent$3.OutputTuple, EIP712DomainChangedEvent$3.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$8.InputTuple, OwnershipTransferredEvent$8.OutputTuple, OwnershipTransferredEvent$8.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$8.InputTuple, OwnershipTransferredEvent$8.OutputTuple, OwnershipTransferredEvent$8.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$7.InputTuple, TransferEvent$7.OutputTuple, TransferEvent$7.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$7.InputTuple, TransferEvent$7.OutputTuple, TransferEvent$7.OutputObject>;
	};
}
export type AutomationBaseConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class AutomationBase__factory extends ContractFactory {
	constructor(...args: AutomationBaseConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<AutomationBase & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): AutomationBase__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212203493c5af974e7e114b85a6a8064432eda8625232999bf85f55d7d18ae5708d1b64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlySimulatedBackend";
			readonly type: "error";
		}
	];
	static createInterface(): AutomationBaseInterface;
	static connect(address: string, runner?: ContractRunner | null): AutomationBase;
}
declare class AutomationCompatible__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlySimulatedBackend";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "checkData";
					readonly type: "bytes";
				}
			];
			readonly name: "checkUpkeep";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "upkeepNeeded";
					readonly type: "bool";
				},
				{
					readonly internalType: "bytes";
					readonly name: "performData";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "performData";
					readonly type: "bytes";
				}
			];
			readonly name: "performUpkeep";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): AutomationCompatibleInterface;
	static connect(address: string, runner?: ContractRunner | null): AutomationCompatible;
}
declare class AutomationCompatibleInterface__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "checkData";
					readonly type: "bytes";
				}
			];
			readonly name: "checkUpkeep";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "upkeepNeeded";
					readonly type: "bool";
				},
				{
					readonly internalType: "bytes";
					readonly name: "performData";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "performData";
					readonly type: "bytes";
				}
			];
			readonly name: "performUpkeep";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): AutomationCompatibleInterfaceInterface;
	static connect(address: string, runner?: ContractRunner | null): AutomationCompatibleInterface$1;
}
declare class IFunctionsClient__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				}
			];
			readonly name: "handleOracleFulfillment";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IFunctionsClientInterface;
	static connect(address: string, runner?: ContractRunner | null): IFunctionsClient;
}
declare class IFunctionsRouter__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				},
				{
					readonly internalType: "uint96";
					readonly name: "juelsPerGas";
					readonly type: "uint96";
				},
				{
					readonly internalType: "uint96";
					readonly name: "costWithoutFulfillment";
					readonly type: "uint96";
				},
				{
					readonly internalType: "address";
					readonly name: "transmitter";
					readonly type: "address";
				},
				{
					readonly components: readonly [
						{
							readonly internalType: "bytes32";
							readonly name: "requestId";
							readonly type: "bytes32";
						},
						{
							readonly internalType: "address";
							readonly name: "coordinator";
							readonly type: "address";
						},
						{
							readonly internalType: "uint96";
							readonly name: "estimatedTotalCostJuels";
							readonly type: "uint96";
						},
						{
							readonly internalType: "address";
							readonly name: "client";
							readonly type: "address";
						},
						{
							readonly internalType: "uint64";
							readonly name: "subscriptionId";
							readonly type: "uint64";
						},
						{
							readonly internalType: "uint32";
							readonly name: "callbackGasLimit";
							readonly type: "uint32";
						},
						{
							readonly internalType: "uint72";
							readonly name: "adminFee";
							readonly type: "uint72";
						},
						{
							readonly internalType: "uint72";
							readonly name: "donFee";
							readonly type: "uint72";
						},
						{
							readonly internalType: "uint40";
							readonly name: "gasOverheadBeforeCallback";
							readonly type: "uint40";
						},
						{
							readonly internalType: "uint40";
							readonly name: "gasOverheadAfterCallback";
							readonly type: "uint40";
						},
						{
							readonly internalType: "uint32";
							readonly name: "timeoutTimestamp";
							readonly type: "uint32";
						}
					];
					readonly internalType: "struct FunctionsResponse.Commitment";
					readonly name: "commitment";
					readonly type: "tuple";
				}
			];
			readonly name: "fulfill";
			readonly outputs: readonly [
				{
					readonly internalType: "enum FunctionsResponse.FulfillResult";
					readonly name: "";
					readonly type: "uint8";
				},
				{
					readonly internalType: "uint96";
					readonly name: "";
					readonly type: "uint96";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "getAdminFee";
			readonly outputs: readonly [
				{
					readonly internalType: "uint72";
					readonly name: "adminFee";
					readonly type: "uint72";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "getAllowListId";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "getContractById";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "getProposedContractById";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "getProposedContractSet";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32[]";
					readonly name: "";
					readonly type: "bytes32[]";
				},
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "subscriptionId";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint32";
					readonly name: "callbackGasLimit";
					readonly type: "uint32";
				}
			];
			readonly name: "isValidCallbackGasLimit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "pause";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32[]";
					readonly name: "proposalSetIds";
					readonly type: "bytes32[]";
				},
				{
					readonly internalType: "address[]";
					readonly name: "proposalSetAddresses";
					readonly type: "address[]";
				}
			];
			readonly name: "proposeContractsUpdate";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "subscriptionId";
					readonly type: "uint64";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				},
				{
					readonly internalType: "uint16";
					readonly name: "dataVersion";
					readonly type: "uint16";
				},
				{
					readonly internalType: "uint32";
					readonly name: "callbackGasLimit";
					readonly type: "uint32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "donId";
					readonly type: "bytes32";
				}
			];
			readonly name: "sendRequest";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "subscriptionId";
					readonly type: "uint64";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				},
				{
					readonly internalType: "uint16";
					readonly name: "dataVersion";
					readonly type: "uint16";
				},
				{
					readonly internalType: "uint32";
					readonly name: "callbackGasLimit";
					readonly type: "uint32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "donId";
					readonly type: "bytes32";
				}
			];
			readonly name: "sendRequestToProposed";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "allowListId";
					readonly type: "bytes32";
				}
			];
			readonly name: "setAllowListId";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "unpause";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "updateContracts";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IFunctionsRouterInterface;
	static connect(address: string, runner?: ContractRunner | null): IFunctionsRouter;
}
export type FunctionsRequestConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class FunctionsRequest__factory extends ContractFactory {
	constructor(...args: FunctionsRequestConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<FunctionsRequest & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): FunctionsRequest__factory;
	static readonly bytecode = "0x608c6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80635d641dfc146038575b600080fd5b603f600181565b60405161ffff909116815260200160405180910390f3fea26469706673582212207128a7f6268109344226fbeabc72119fb034df74f29364655ae58efc62a5924e64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "EmptyArgs";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "EmptySecrets";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "EmptySource";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NoInlineSecrets";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "REQUEST_DATA_VERSION";
			readonly outputs: readonly [
				{
					readonly internalType: "uint16";
					readonly name: "";
					readonly type: "uint16";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): FunctionsRequestInterface;
	static connect(address: string, runner?: ContractRunner | null): FunctionsRequest;
}
declare class Ownable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): OwnableInterface;
	static connect(address: string, runner?: ContractRunner | null): Ownable;
}
declare class IERC1967__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "previousAdmin";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "AdminChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "beacon";
					readonly type: "address";
				}
			];
			readonly name: "BeaconUpgraded";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "Upgraded";
			readonly type: "event";
		}
	];
	static createInterface(): IERC1967Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC1967;
}
declare class IERC5267__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IERC5267Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC5267;
}
declare class IERC1155Errors__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC1155InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "idsLength";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "valuesLength";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC1155InvalidArrayLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidOperator";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155MissingApprovalForAll";
			readonly type: "error";
		}
	];
	static createInterface(): IERC1155ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC1155Errors;
}
declare class IERC20Errors__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		}
	];
	static createInterface(): IERC20ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Errors;
}
declare class IERC721Errors__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC721IncorrectOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC721InsufficientApproval";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidOperator";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC721NonexistentToken";
			readonly type: "error";
		}
	];
	static createInterface(): IERC721ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC721Errors;
}
export type ERC1967UtilsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class ERC1967Utils__factory extends ContractFactory {
	constructor(...args: ERC1967UtilsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ERC1967Utils & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ERC1967Utils__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220244d6700de9fcdeb639f45050e2d7fa6768c068954e61a7236b1439ef1136d8564736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "admin";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidAdmin";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "beacon";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidBeacon";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidImplementation";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ERC1967NonPayable";
			readonly type: "error";
		}
	];
	static createInterface(): ERC1967UtilsInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC1967Utils;
}
declare class Proxy__factory {
	static readonly abi: readonly [
		{
			readonly stateMutability: "payable";
			readonly type: "fallback";
		}
	];
	static createInterface(): ProxyInterface;
	static connect(address: string, runner?: ContractRunner | null): Proxy$1;
}
declare class IBeacon__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "implementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IBeaconInterface;
	static connect(address: string, runner?: ContractRunner | null): IBeacon;
}
declare class ERC20__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20Interface;
	static connect(address: string, runner?: ContractRunner | null): ERC20;
}
declare class IERC20__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC20;
}
declare class ERC20Burnable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burnFrom";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20BurnableInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Burnable;
}
declare class ERC20Permit__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20PermitInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Permit;
}
declare class IERC20Metadata__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20MetadataInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Metadata;
}
declare class IERC20Permit__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20PermitInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Permit;
}
export type AddressConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class Address__factory extends ContractFactory {
	constructor(...args: AddressConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Address & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Address__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208b069d5eaef2d74c4bb0c739b705cce84777c6fa17d25b7f89f0cf41570f768564736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "target";
					readonly type: "address";
				}
			];
			readonly name: "AddressEmptyCode";
			readonly type: "error";
		}
	];
	static createInterface(): AddressInterface;
	static connect(address: string, runner?: ContractRunner | null): Address;
}
export type ErrorsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class Errors__factory extends ContractFactory {
	constructor(...args: ErrorsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Errors & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Errors__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220855592d9cbc12bfd2977843d4a66e78f6ff49a64a6c7026ae7c189b997a2bc3e64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "FailedCall";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "FailedDeployment";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "MissingPrecompile";
			readonly type: "error";
		}
	];
	static createInterface(): ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): Errors;
}
declare class Nonces__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): NoncesInterface;
	static connect(address: string, runner?: ContractRunner | null): Nonces;
}
export type ShortStringsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class ShortStrings__factory extends ContractFactory {
	constructor(...args: ShortStringsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ShortStrings & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ShortStrings__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208e737faf9859c86a18b7dc6168fb1a208d350af1a43eafeef1084461404297fe64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		}
	];
	static createInterface(): ShortStringsInterface;
	static connect(address: string, runner?: ContractRunner | null): ShortStrings;
}
export type StringsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class Strings__factory extends ContractFactory {
	constructor(...args: StringsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Strings & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Strings__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220265f45539be4d30ab937e0e166cbb425c6004ed5ce63ec29f603f4d9ed6789b864736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "StringsInsufficientHexLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "StringsInvalidAddressFormat";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "StringsInvalidChar";
			readonly type: "error";
		}
	];
	static createInterface(): StringsInterface;
	static connect(address: string, runner?: ContractRunner | null): Strings;
}
export type ECDSAConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class ECDSA__factory extends ContractFactory {
	constructor(...args: ECDSAConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ECDSA & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ECDSA__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220848f3bdd8014574a0779ff2fe30df91ab011d042a0d27ab6af018030a55a10c564736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		}
	];
	static createInterface(): ECDSAInterface;
	static connect(address: string, runner?: ContractRunner | null): ECDSA;
}
declare class EIP712__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): EIP712Interface;
	static connect(address: string, runner?: ContractRunner | null): EIP712;
}
export type SafeCastConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class SafeCast__factory extends ContractFactory {
	constructor(...args: SafeCastConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<SafeCast & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): SafeCast__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a69f97f6d4c255f1614635a797050ef139d6fee76c94f5aba0ef8b79837b3f6e64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "bits";
					readonly type: "uint8";
				},
				{
					readonly internalType: "int256";
					readonly name: "value";
					readonly type: "int256";
				}
			];
			readonly name: "SafeCastOverflowedIntDowncast";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "value";
					readonly type: "int256";
				}
			];
			readonly name: "SafeCastOverflowedIntToUint";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "bits";
					readonly type: "uint8";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "SafeCastOverflowedUintDowncast";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "SafeCastOverflowedUintToInt";
			readonly type: "error";
		}
	];
	static createInterface(): SafeCastInterface;
	static connect(address: string, runner?: ContractRunner | null): SafeCast;
}
declare class OwnableUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): OwnableUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): OwnableUpgradeable;
}
declare class Initializable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		}
	];
	static createInterface(): InitializableInterface;
	static connect(address: string, runner?: ContractRunner | null): Initializable;
}
declare class ContextUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		}
	];
	static createInterface(): ContextUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): ContextUpgradeable;
}
export type LockConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class Lock__factory extends ContractFactory {
	constructor(...args: LockConstructorParams);
	getDeployTransaction(_unlockTime: BigNumberish, overrides?: PayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(_unlockTime: BigNumberish, overrides?: PayableOverrides & {
		from?: string;
	}): Promise<Lock$1 & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Lock__factory;
	static readonly bytecode = "0x60806040526040516102a03803806102a08339810160408190526020916097565b804210607e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b0319163317905560af565b60006020828403121560a857600080fd5b5051919050565b6101e2806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100625780638da5cb5b1461006c575b600080fd5b61004f60005481565b6040519081526020015b60405180910390f35b61006a610097565b005b60015461007f906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6000544210156100e75760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101385760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100de565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156101a9573d6000803e3d6000fd5b5056fea2646970667358221220c1ebd6641dbb8d23cda4ccc7111e7fc00cafbee523ab433b9923c173b387064e64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_unlockTime";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "payable";
			readonly type: "constructor";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "when";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdrawal";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address payable";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "unlockTime";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): LockInterface;
	static connect(address: string, runner?: ContractRunner | null): Lock$1;
}
declare class IARWSupply__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "circulatingSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "excludedAddresses";
			readonly outputs: readonly [
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "excludedSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IARWSupplyInterface;
	static connect(address: string, runner?: ContractRunner | null): IARWSupply;
}
declare class IERC20Exp__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20ExpInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Exp;
}
declare class IERC20Mintable__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "burnFrom";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20MintableInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Mintable;
}
declare class IInitializableProxy__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "admin";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "changeAdmin";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "implementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				},
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "initializeProxy";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "proxyDescription";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "upgradeToAndCall";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		}
	];
	static createInterface(): IInitializableProxyInterface;
	static connect(address: string, runner?: ContractRunner | null): IInitializableProxy;
}
declare class IPriceFeed__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "pure";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "getTokenType";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "pure";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRound";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IPriceFeedInterface;
	static connect(address: string, runner?: ContractRunner | null): IPriceFeed;
}
declare class Ownable__factory$1 {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): OwnableInterface$1;
	static connect(address: string, runner?: ContractRunner | null): Ownable$1;
}
export type SigLibConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class SigLib__factory extends ContractFactory {
	constructor(...args: SigLibConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<SigLib & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): SigLib__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204ea798ab1a0c065dca2f476b257faa92800ed588d74e01b9f65da74c538bd30b64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidSignatureLength";
			readonly type: "error";
		}
	];
	static createInterface(): SigLibInterface;
	static connect(address: string, runner?: ContractRunner | null): SigLib;
}
export type WithSettlerConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class WithSettler__factory extends ContractFactory {
	constructor(...args: WithSettlerConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<WithSettler & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): WithSettler__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b506108428061001f6000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063715018a61161005b578063715018a6146100bc5780638da5cb5b146100c4578063b1da41fe14610103578063f2fde38b1461011857600080fd5b8062b105e61461008157806314d3940d14610096578063329bad17146100a9575b600080fd5b61009461008f36600461074a565b61012b565b005b6100946100a436600461074a565b6101cd565b6100946100b736600461074a565b610266565b610094610362565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020015b60405180910390f35b61010b610376565b6040516100fa9190610773565b61009461012636600461074a565b610387565b6101336103c5565b61013e60008261043b565b6101815760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61018c600082610462565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6101d56103c5565b6101e060008261043b565b156102215760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610178565b61022c600082610477565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e906020016101c2565b600061027061048c565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156102985750825b905060008267ffffffffffffffff1660011480156102b55750303b155b9050811580156102c3575080155b156102e15760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561030b57845460ff60401b1916600160401b1785555b610314866104b5565b831561035a57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61036a6103c5565b61037460006104cf565b565b60606103826000610540565b905090565b61038f6103c5565b6001600160a01b0381166103b957604051631e4fbdf760e01b815260006004820152602401610178565b6103c2816104cf565b50565b60006103f87f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b0381161580159061041b57506001600160a01b0381163314155b156103c25760405163118cdaa760e01b8152336004820152602401610178565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b6000610459836001600160a01b038416610554565b6000610459836001600160a01b038416610647565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0061045c565b6001600160a01b0381166104c65750335b61022181610696565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6060600061054d836106a7565b9392505050565b6000818152600183016020526040812054801561063d5760006105786001836107bf565b855490915060009061058c906001906107bf565b90508082146105f15760008660000182815481106105ac576105ac6107e0565b90600052602060002001549050808760000184815481106105cf576105cf6107e0565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610602576106026107f6565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061045c565b600091505061045c565b600081815260018301602052604081205461068e5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561045c565b50600061045c565b61069e610703565b6103c281610728565b6060816000018054806020026020016040519081016040528092919081815260200182805480156106f757602002820191906000526020600020905b8154815260200190600101908083116106e3575b50505050509050919050565b61070b610730565b61037457604051631afcd79f60e31b815260040160405180910390fd5b61038f610703565b600061073a61048c565b54600160401b900460ff16919050565b60006020828403121561075c57600080fd5b81356001600160a01b038116811461054d57600080fd5b602080825282518282018190526000918401906040840190835b818110156107b45783516001600160a01b031683526020938401939092019160010161078d565b509095945050505050565b8181038181111561045c57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122077aac981056fa0d182ca44a04636258b8b019a7ff1ce00b59bdab8637df3e76d64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newSettler";
					readonly type: "address";
				}
			];
			readonly name: "AddSettler";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "oldSettler";
					readonly type: "address";
				}
			];
			readonly name: "RemoveSettler";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "addSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				}
			];
			readonly name: "initializeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "removeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "settlers";
			readonly outputs: readonly [
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): WithSettlerInterface;
	static connect(address: string, runner?: ContractRunner | null): WithSettler;
}
export type ARWFeedConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class ARWFeed__factory extends ContractFactory {
	constructor(...args: ARWFeedConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ARWFeed & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ARWFeed__factory;
	static readonly bytecode = "0x60806040526006600555348015601457600080fd5b50612485806100246000396000f3fe608060405234801561001057600080fd5b50600436106102ba5760003560e01c8063668a0f0211610182578063b1da41fe116100e9578063c41c7dce116100a2578063f2fde38b1161007c578063f2fde38b1461068f578063f68016b7146106a2578063fd2c80ae146106ce578063feaf968c146106e157600080fd5b8063c41c7dce14610656578063d0d552dd14610669578063e58864421461067c57600080fd5b8063b1da41fe146105d5578063b1e21749146105ea578063b5ab58dc146105f3578063b633620c14610613578063bfc12c0514610633578063c3ba0e241461063c57600080fd5b80638205bf6a1161013b5780638205bf6a1461053d5780638da5cb5b1461054657806390c3f38f1461054e5780639a6fc8f514610561578063a26fd90d146105a8578063a87a20ce146105c257600080fd5b8063668a0f02146104d15780636ad6c8ce146104da5780636e04ff0d146105035780636e74336b14610524578063715018a61461052d5780637284e4161461053557600080fd5b80633b2235fc1161022657806354fd4d50116101df57806354fd4d5014610462578063581bdd161461046b57806359770db21461047e5780635a74373c146104915780635dcbdc5a146104ab5780635e0611f1146104be57600080fd5b80633b2235fc146103e65780633d7c5d3e14610406578063408def1e146104205780634585e33b146104335780634f8c0c781461044657806350d25bcd1461045957600080fd5b806314d3940d1161027857806314d3940d14610353578063225a2b9314610366578063313ce56714610379578063329bad1714610393578063338cdca1146103a657806338d52e0f146103bb57600080fd5b8062b105e6146102bf5780630494878e146102d4578063057b39671461030457806309c1ba2e146103175780630ca761751461032a57806314b316781461033d575b600080fd5b6102d26102cd366004611baa565b6106e9565b005b6012546102e7906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b6102d2610312366004611c6f565b61078b565b600e546102e7906001600160401b031681565b6102d2610338366004611ccc565b610889565b6103456108ef565b6040519081526020016102fb565b6102d2610361366004611baa565b610a1f565b6102d2610374366004611d26565b610ab8565b610381600881565b60405160ff90911681526020016102fb565b6102d26103a1366004611baa565b610bb4565b6103ae610cae565b6040516102fb9190611d9f565b6003546103ce906001600160a01b031681565b6040516001600160a01b0390911681526020016102fb565b6103456103f4366004611db2565b600c6020526000908152604090205481565b6012546102e790600160801b90046001600160401b031681565b6102d261042e366004611db2565b610d3c565b6102d2610441366004611dcb565b610d49565b6102d2610454366004611e54565b610d95565b61034560075481565b61034560055481565b6000546103ce906001600160a01b031681565b6102d261048c366004611f28565b610dd5565b6011546102e790600160a01b90046001600160401b031681565b6102e76104b9366004611db2565b610e00565b6011546103ce906001600160a01b031681565b61034560095481565b6102e76104e8366004611f28565b6013602052600090815260409020546001600160401b031681565b610516610511366004611dcb565b610e29565b6040516102fb929190611f43565b610345600f5481565b6102d2610e4f565b6103ae610e63565b61034560085481565b6103ce610e70565b6102d261055c366004611f66565b610e9e565b61057461056f366004611f9a565b610ee2565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a0016102fb565b6012546102e790600160c01b90046001600160401b031681565b6102d26105d0366004611db2565b610f60565b6105dd610fc1565b6040516102fb9190611fc3565b61034560105481565b610345610601366004611db2565b600a6020526000908152604090205481565b610345610621366004611db2565b600b6020526000908152604090205481565b61034560065481565b6012546102e790600160401b90046001600160401b031681565b6102d261066436600461200f565b610fd2565b6102d2610677366004611baa565b611026565b6102d261068a36600461207f565b611078565b6102d261069d366004611baa565b611147565b600e546106b990600160401b900463ffffffff1681565b60405163ffffffff90911681526020016102fb565b6014546102e7906001600160401b031681565b610574611182565b6106f16111a6565b6106fc6001826111f3565b61073f5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61074a600182611218565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b600061079561122d565b805490915060ff600160401b82041615906001600160401b03166000811580156107bc5750825b90506000826001600160401b031660011480156107d85750303b155b9050811580156107e6575080155b156108045760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561082e57845460ff60401b1916600160401b1785555b610839888888611256565b831561087f57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050565b6000546001600160a01b031633146108b45760405163c6829f8360e01b815260040160405180910390fd5b6108bf83838361127f565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b60006108f9610e70565b6001600160a01b0316336001600160a01b0316148061092257506011546001600160a01b031633145b6109615760405162461bcd60e51b815260206004820152601060248201526f2737ba20b63637bbb2b221b0b63632b960811b6044820152606401610736565b610a15600d8054610971906120e4565b80601f016020809104026020016040519081016040528092919081815260200182805461099d906120e4565b80156109ea5780601f106109bf576101008083540402835291602001916109ea565b820191906000526020600020905b8154815290600101906020018083116109cd57829003601f168201915b5050600e54600f546001600160401b0382169450600160401b90910463ffffffff1692509050611360565b6010819055905090565b610a276111a6565b610a326001826111f3565b15610a735760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610736565b610a7e600182611414565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e90602001610780565b6000610ac261122d565b805490915060ff600160401b82041615906001600160401b0316600081158015610ae95750825b90506000826001600160401b03166001148015610b055750303b155b905081158015610b13575080155b15610b315760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610b5b57845460ff60401b1916600160401b1785555b610b658787611429565b8315610bab57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b6000610bbe61122d565b805490915060ff600160401b82041615906001600160401b0316600081158015610be55750825b90506000826001600160401b03166001148015610c015750303b155b905081158015610c0f575080155b15610c2d5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610c5757845460ff60401b1916600160401b1785555b610c6086611494565b8315610ca657845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b600d8054610cbb906120e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce7906120e4565b8015610d345780601f10610d0957610100808354040283529160200191610d34565b820191906000526020600020905b815481529060010190602001808311610d1757829003601f168201915b505050505081565b610d446111a6565b600555565b610d516114ae565b15610d91576012805467ffffffffffffffff60801b1916600160801b426001600160401b031602179055600d8054610d8d9190610971906120e4565b6010555b5050565b610d9d6111a6565b610da681610dd5565b610db38686868686611078565b610dbe600088611429565b610dc98a8a8a611256565b50505050505050505050565b610ddd6111a6565b6014805467ffffffffffffffff19166001600160401b0392909216919091179055565b6012546000906001600160401b0316610e19818461214a565b610e239190612178565b92915050565b60006060610e356114ae565b604080516000815260208101909152909590945092505050565b610e576111a6565b610e6160006114ee565b565b60048054610cbb906120e4565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b610ea66111a6565b6004610eb282826121e8565b507f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c6816040516107809190611d9f565b6001600160501b0381166000818152600a6020526040812054839290919081908190610f1057600654610f38565b600b6000610f2860016001600160501b038a166122a6565b8152602001908152602001600020545b6001600160501b0387166000908152600b602052604090205495979496909594909350915050565b610f6b6001336111f3565b610fa55760405162461bcd60e51b815260206004820152600b60248201526a2727aa2fa9a2aa2a2622a960a91b6044820152606401610736565b610fbe816009546001610fb891906122b9565b4261155f565b50565b6060610fcd600161162b565b905090565b610fda6111a6565b600d610fe685826121e8565b50600e805463ffffffff909316600160401b026bffffffffffffffffffffffff199093166001600160401b039094169390931791909117909155600f5550565b61102e6111a6565b600380546001600160a01b0319166001600160a01b0383169081179091556040517fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a250565b6110806111a6565b601180546001600160a01b0387166001600160e01b03199091168117600160a01b6001600160401b0388811691820292909217909355601280548783166fffffffffffffffffffffffffffffffff199091168117600160401b888516908102919091176001600160c01b0316600160c01b948816948502179092556040805195865260208601919091528401526060830152907fbed5a7c7626f62707ea8a0c71900fd8623e8ae9fde3cd99cfa5dc7d54bbabee09060800160405180910390a25050505050565b61114f6111a6565b6001600160a01b03811661117957604051631e4fbdf760e01b815260006004820152602401610736565b610fbe816114ee565b6000806000806000611195600954610ee2565b945094509450945094509091929394565b60006111b0610e70565b90506001600160a01b038116158015906111d357506001600160a01b0381163314155b15610fbe5760405163118cdaa760e01b8152336004820152602401610736565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000611211836001600160a01b038416611638565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610e23565b42600690815560055561126882611026565b61127181610e9e565b61127a83611494565b505050565b6013600061128c42610e00565b6001600160401b03908116825260208201929092526040016000908120805490921691906112b9836122cc565b91906101000a8154816001600160401b0302191690836001600160401b031602179055505082601054146113035760405163d068bf5b60e01b815260048101849052602401610736565b6001825111801561131357508051155b156113215761132182611732565b827f7873807bf6ddc50401cd3d29bbe0decee23fd4d68d273f4b5eb83cded4d2f17283836040516113539291906122f7565b60405180910390a2505050565b6000805460405163230e93b160e11b815282916001600160a01b03169063461d27629061139a9088908a906001908a908a90600401612325565b6020604051808303816000875af11580156113b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113dd919061236e565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b6000611211836001600160a01b038416611826565b600080546001600160a01b0319166001600160a01b0383161790556001600160a01b0382161561145c5761145c82611494565b6040516001600160a01b038216907f8e027fb3d390e4e77e8857eb25c3f2b2b17eb69cb36c0b1b993f8a94e29accea90600090a25050565b6001600160a01b0381166114a55750335b610a7381611875565b60006114b8611886565b6114c25750600090565b6014546008546114db916001600160401b0316906122b9565b4210156114e85750600090565b50600190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b806008541061156d57505050565b6007839055600881905560098290556000828152600b602090815260408083208054600a845282852088905590859055848452600c9092529091208490551515806115ea57604051828152339084907f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac602719060200160405180910390a35b82847f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f8460405161161d91815260200190565b60405180910390a350505050565b606060006112118361193f565b6000818152600183016020526040812054801561172157600061165c6001836122a6565b8554909150600090611670906001906122a6565b90508082146116d557600086600001828154811061169057611690612387565b90600052602060002001549050808760000184815481106116b3576116b3612387565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806116e6576116e661239d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610e23565b6000915050610e23565b5092915050565b600061173d8261199b565b905060006002825161174f91906123b3565b905060005b818110156118205760008361176a8360026123c7565b8151811061177a5761177a612387565b6020026020010151905060008483600261179491906123c7565b61179f9060016122b9565b815181106117af576117af612387565b602002602001015190506000826001600160401b0316905080600c6000846001600160401b0316815260200190815260200160002054036117f257505050611818565b61181481600954600161180591906122b9565b846001600160401b031661155f565b5050505b600101611754565b50505050565b600081815260018301602052604081205461186d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610e23565b506000610e23565b61187d611b47565b610fbe81611b6c565b6012546000906001600160401b03600160c01b90910481164890911611156118ae5750600090565b6011546012546118d8916001600160401b03600160a01b909104811691600160801b9004166123de565b6001600160401b0316426001600160401b031610156118f75750600090565b601254600160401b90046001600160401b03166013600061191742610e00565b6001600160401b03908116825260208201929092526040016000205416106114e85750600090565b60608160000180548060200260200160405190810160405280929190818152602001828054801561198f57602002820191906000526020600020905b81548152602001906001019080831161197b575b50505050509050919050565b6060600882516119ab91906123fd565b15611a0c5760405162461bcd60e51b815260206004820152602b60248201527f44617461206c656e677468206d75737420626520646976697369626c6520627960448201526a206368756e6b2073697a6560a81b6064820152608401610736565b600060088351611a1c91906123b3565b90506000816001600160401b03811115611a3857611a38611bc5565b604051908082528060200260200182016040528015611a61578160200160208202803683370190505b50905060005b82811015611b3f5760408051600880825281830190925260009160208201818036833701905050905060005b6008811015611aff578681611aa98560086123c7565b611ab391906122b9565b81518110611ac357611ac3612387565b602001015160f81c60f81b828281518110611ae057611ae0612387565b60200101906001600160f81b031916908160001a905350600101611a93565b50611b0981612411565b60c01c838381518110611b1e57611b1e612387565b6001600160401b039092166020928302919091019091015250600101611a67565b509392505050565b611b4f611b74565b610e6157604051631afcd79f60e31b815260040160405180910390fd5b61114f611b47565b6000611b7e61122d565b54600160401b900460ff16919050565b80356001600160a01b0381168114611ba557600080fd5b919050565b600060208284031215611bbc57600080fd5b61121182611b8e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611bec57600080fd5b8135602083016000806001600160401b03841115611c0c57611c0c611bc5565b50604051601f19601f85018116603f011681018181106001600160401b0382111715611c3a57611c3a611bc5565b604052838152905080828401871015611c5257600080fd5b838360208301376000602085830101528094505050505092915050565b600080600060608486031215611c8457600080fd5b611c8d84611b8e565b9250611c9b60208501611b8e565b915060408401356001600160401b03811115611cb657600080fd5b611cc286828701611bdb565b9150509250925092565b600080600060608486031215611ce157600080fd5b8335925060208401356001600160401b03811115611cfe57600080fd5b611d0a86828701611bdb565b92505060408401356001600160401b03811115611cb657600080fd5b60008060408385031215611d3957600080fd5b611d4283611b8e565b9150611d5060208401611b8e565b90509250929050565b6000815180845260005b81811015611d7f57602081850181015186830182015201611d63565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006112116020830184611d59565b600060208284031215611dc457600080fd5b5035919050565b60008060208385031215611dde57600080fd5b82356001600160401b03811115611df457600080fd5b8301601f81018513611e0557600080fd5b80356001600160401b03811115611e1b57600080fd5b856020828401011115611e2d57600080fd5b6020919091019590945092505050565b80356001600160401b0381168114611ba557600080fd5b6000806000806000806000806000806101408b8d031215611e7457600080fd5b611e7d8b611b8e565b9950611e8b60208c01611b8e565b985060408b01356001600160401b03811115611ea657600080fd5b611eb28d828e01611bdb565b985050611ec160608c01611b8e565b9650611ecf60808c01611b8e565b9550611edd60a08c01611e3d565b9450611eeb60c08c01611e3d565b9350611ef960e08c01611e3d565b9250611f086101008c01611e3d565b9150611f176101208c01611e3d565b90509295989b9194979a5092959850565b600060208284031215611f3a57600080fd5b61121182611e3d565b8215158152604060208201526000611f5e6040830184611d59565b949350505050565b600060208284031215611f7857600080fd5b81356001600160401b03811115611f8e57600080fd5b611f5e84828501611bdb565b600060208284031215611fac57600080fd5b81356001600160501b038116811461121157600080fd5b602080825282518282018190526000918401906040840190835b818110156120045783516001600160a01b0316835260209384019390920191600101611fdd565b509095945050505050565b6000806000806080858703121561202557600080fd5b84356001600160401b0381111561203b57600080fd5b61204787828801611bdb565b94505061205660208601611e3d565b9250604085013563ffffffff8116811461206f57600080fd5b9396929550929360600135925050565b600080600080600060a0868803121561209757600080fd5b6120a086611b8e565b94506120ae60208701611e3d565b93506120bc60408701611e3d565b92506120ca60608701611e3d565b91506120d860808701611e3d565b90509295509295909350565b600181811c908216806120f857607f821691505b60208210810361211857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001600160401b038316806121635761216361211e565b806001600160401b0384160491505092915050565b6001600160401b03818116838216029081169081811461172b5761172b612134565b601f82111561127a57806000526020600020601f840160051c810160208510156121c15750805b601f840160051c820191505b818110156121e157600081556001016121cd565b5050505050565b81516001600160401b0381111561220157612201611bc5565b6122158161220f84546120e4565b8461219a565b6020601f82116001811461224957600083156122315750848201515b600019600385901b1c1916600184901b1784556121e1565b600084815260208120601f198516915b828110156122795787850151825560209485019460019092019101612259565b50848210156122975786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b81810381811115610e2357610e23612134565b80820180821115610e2357610e23612134565b60006001600160401b0382166001600160401b0381036122ee576122ee612134565b60010192915050565b60408152600061230a6040830185611d59565b828103602084015261231c8185611d59565b95945050505050565b6001600160401b038616815260a06020820152600061234760a0830187611d59565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b60006020828403121561238057600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b6000826123c2576123c261211e565b500490565b8082028115828204841417610e2357610e23612134565b6001600160401b038181168382160190811115610e2357610e23612134565b60008261240c5761240c61211e565b500690565b805160208201516001600160c01b0319811691906008821015612448576001600160c01b0319600883900360031b81901b82161692505b505091905056fea264697066735822122029363c499b57304bb6bef6192958cb581a733414c612212a3ea0e8c7eef80ab764736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlyRouterCanFulfill";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlySimulatedBackend";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				}
			];
			readonly name: "UnexpectedRequestID";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newSettler";
					readonly type: "address";
				}
			];
			readonly name: "AddSettler";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "int256";
					readonly name: "current";
					readonly type: "int256";
				},
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "roundId";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "updatedAt";
					readonly type: "uint256";
				}
			];
			readonly name: "AnswerUpdated";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "router";
					readonly type: "address";
				}
			];
			readonly name: "InitializedConsumer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				}
			];
			readonly name: "NewAsset";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "string";
					readonly name: "description";
					readonly type: "string";
				}
			];
			readonly name: "NewDescription";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "roundId";
					readonly type: "uint256";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "startedBy";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "startedAt";
					readonly type: "uint256";
				}
			];
			readonly name: "NewRound";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "oldSettler";
					readonly type: "address";
				}
			];
			readonly name: "RemoveSettler";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "RequestFulfilled";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "RequestSent";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				},
				{
					readonly indexed: false;
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly indexed: false;
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				}
			];
			readonly name: "Response";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "upkeepContract";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "upkeepInterval";
					readonly type: "uint64";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "upkeepRateInterval";
					readonly type: "uint64";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "upkeepRateCap";
					readonly type: "uint64";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "maxBaseGasPrice";
					readonly type: "uint64";
				}
			];
			readonly name: "SetUpkeep";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "addSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly name: "checkUpkeep";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "upkeepNeeded";
					readonly type: "bool";
				},
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "deploymentTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "description";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "donID";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "gasLimit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint32";
					readonly name: "";
					readonly type: "uint32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "getAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "_roundId";
					readonly type: "uint80";
				}
			];
			readonly name: "getRoundData";
			readonly outputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "roundId";
					readonly type: "uint80";
				},
				{
					readonly internalType: "int256";
					readonly name: "answer";
					readonly type: "int256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "startedAt";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "updatedAt";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint80";
					readonly name: "answeredInRound";
					readonly type: "uint80";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "getTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "getTimestampAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "timestamp";
					readonly type: "uint256";
				}
			];
			readonly name: "getUpkeepTime";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				}
			];
			readonly name: "handleOracleFulfillment";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "i_router";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IFunctionsRouter";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				},
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				},
				{
					readonly internalType: "address";
					readonly name: "_router";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_upkeepContract";
					readonly type: "address";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepInterval";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepRateInterval";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepRateCap";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_maxBaseGasPrice";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_updateInterval";
					readonly type: "uint64";
				}
			];
			readonly name: "initializeARWFeedInfo";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_router";
					readonly type: "address";
				}
			];
			readonly name: "initializeConsumer";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				},
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				}
			];
			readonly name: "initializeFeed";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				}
			];
			readonly name: "initializeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "lastUpkeep";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRound";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRoundData";
			readonly outputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				},
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "maxBaseGasPrice";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly name: "performUpkeep";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "removeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "request";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "s_lastRequestId";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "sendRequestCBOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				}
			];
			readonly name: "setAsset";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				}
			];
			readonly name: "setDescription";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "_updateInterval";
					readonly type: "uint64";
				}
			];
			readonly name: "setInterval";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_upkeepContract";
					readonly type: "address";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepInterval";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepRateInterval";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepRateCap";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_maxBaseGasPrice";
					readonly type: "uint64";
				}
			];
			readonly name: "setUpkeep";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_version";
					readonly type: "uint256";
				}
			];
			readonly name: "setVersion";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "settlers";
			readonly outputs: readonly [
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "subscriptionId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "newAnswer";
					readonly type: "int256";
				}
			];
			readonly name: "updateAnswer";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "updateInterval";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "_request";
					readonly type: "bytes";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_subscriptionId";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint32";
					readonly name: "_gasLimit";
					readonly type: "uint32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "_donID";
					readonly type: "bytes32";
				}
			];
			readonly name: "updateRequest";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepContract";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepInterval";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepRateCap";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepRateInterval";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly name: "upkeepRates";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "version";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): ARWFeedInterface;
	static connect(address: string, runner?: ContractRunner | null): ARWFeed;
}
export type BaseFunctionsConsumerConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class BaseFunctionsConsumer__factory extends ContractFactory {
	constructor(...args: BaseFunctionsConsumerConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<BaseFunctionsConsumer & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): BaseFunctionsConsumer__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b506118da8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c80635e0611f1116100f9578063b1da41fe11610097578063c41c7dce11610071578063c41c7dce146103e4578063e5886442146103f7578063f2fde38b1461040a578063f68016b71461041d57600080fd5b8063b1da41fe146103ac578063b1e21749146103c1578063c3ba0e24146103ca57600080fd5b80636e74336b116100d35780636e74336b14610379578063715018a6146103825780638da5cb5b1461038a578063a26fd90d1461039257600080fd5b80635e0611f11461031c5780636ad6c8ce1461032f5780636e04ff0d1461035857600080fd5b8063329bad17116101665780634585e33b116101405780634585e33b146102b1578063581bdd16146102c45780635a74373c146102ef5780635dcbdc5a1461030957600080fd5b8063329bad171461026f578063338cdca1146102825780633d7c5d3e1461029757600080fd5b80630ca76175116101a25780630ca761751461022057806314b316781461023357806314d3940d14610249578063225a2b931461025c57600080fd5b8062b105e6146101c85780630494878e146101dd57806309c1ba2e1461020d575b600080fd5b6101db6101d6366004611215565b610449565b005b6008546101f0906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b6004546101f0906001600160401b031681565b6101db61022e3660046112d3565b6104eb565b61023b610551565b604051908152602001610204565b6101db610257366004611215565b610681565b6101db61026a366004611343565b61071a565b6101db61027d366004611215565b610816565b61028a610910565b60405161020491906113bc565b6008546101f090600160801b90046001600160401b031681565b6101db6102bf3660046113cf565b61099e565b6000546102d7906001600160a01b031681565b6040516001600160a01b039091168152602001610204565b6007546101f090600160a01b90046001600160401b031681565b6101f0610317366004611441565b6109ea565b6007546102d7906001600160a01b031681565b6101f061033d366004611471565b6009602052600090815260409020546001600160401b031681565b61036b6103663660046113cf565b610a13565b60405161020492919061148c565b61023b60055481565b6101db610a39565b6102d7610a4d565b6008546101f090600160c01b90046001600160401b031681565b6103b4610a7b565b60405161020491906114af565b61023b60065481565b6008546101f090600160401b90046001600160401b031681565b6101db6103f23660046114fb565b610a8c565b6101db61040536600461156b565b610ae0565b6101db610418366004611215565b610baf565b60045461043490600160401b900463ffffffff1681565b60405163ffffffff9091168152602001610204565b610451610bed565b61045c600182610c3a565b61049f5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b6104aa600182610c5f565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6000546001600160a01b031633146105165760405163c6829f8360e01b815260040160405180910390fd5b610521838383610c74565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b600061055b610a4d565b6001600160a01b0316336001600160a01b0316148061058457506007546001600160a01b031633145b6105c35760405162461bcd60e51b815260206004820152601060248201526f2737ba20b63637bbb2b221b0b63632b960811b6044820152606401610496565b610677600380546105d3906115d0565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff906115d0565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b50506004546005546001600160401b0382169450600160401b90910463ffffffff1692509050610d48565b6006819055905090565b610689610bed565b610694600182610c3a565b156106d55760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610496565b6106e0600182610dfc565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e906020016104e0565b6000610724610e11565b805490915060ff600160401b82041615906001600160401b031660008115801561074b5750825b90506000826001600160401b031660011480156107675750303b155b905081158015610775575080155b156107935760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156107bd57845460ff60401b1916600160401b1785555b6107c78787610e3a565b831561080d57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b6000610820610e11565b805490915060ff600160401b82041615906001600160401b03166000811580156108475750825b90506000826001600160401b031660011480156108635750303b155b905081158015610871575080155b1561088f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156108b957845460ff60401b1916600160401b1785555b6108c286610ea5565b831561090857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6003805461091d906115d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610949906115d0565b80156109965780601f1061096b57610100808354040283529160200191610996565b820191906000526020600020905b81548152906001019060200180831161097957829003601f168201915b505050505081565b6109a6610ebf565b156109e6576008805467ffffffffffffffff60801b1916600160801b426001600160401b031602179055600380546109e291906105d3906115d0565b6006555b5050565b6008546000906001600160401b0316610a038184611620565b610a0d919061165c565b92915050565b60006060610a1f610ebf565b604080516000815260208101909152909590945092505050565b610a41610bed565b610a4b6000610f7e565b565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6060610a876001610fef565b905090565b610a94610bed565b6003610aa085826116cd565b506004805463ffffffff909316600160401b026bffffffffffffffffffffffff199093166001600160401b03909416939093179190911790915560055550565b610ae8610bed565b600780546001600160a01b0387166001600160e01b03199091168117600160a01b6001600160401b0388811691820292909217909355600880548783166fffffffffffffffffffffffffffffffff199091168117600160401b888516908102919091176001600160c01b0316600160c01b948816948502179092556040805195865260208601919091528401526060830152907fbed5a7c7626f62707ea8a0c71900fd8623e8ae9fde3cd99cfa5dc7d54bbabee09060800160405180910390a25050505050565b610bb7610bed565b6001600160a01b038116610be157604051631e4fbdf760e01b815260006004820152602401610496565b610bea81610f7e565b50565b6000610bf7610a4d565b90506001600160a01b03811615801590610c1a57506001600160a01b0381163314155b15610bea5760405163118cdaa760e01b8152336004820152602401610496565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000610c58836001600160a01b038416610ffc565b60096000610c81426109ea565b6001600160401b0390811682526020820192909252604001600090812080549092169190610cae8361178b565b91906101000a8154816001600160401b0302191690836001600160401b03160217905550508260065414610cf85760405163d068bf5b60e01b815260048101849052602401610496565b60018251118015610d0857508051155b50827f7873807bf6ddc50401cd3d29bbe0decee23fd4d68d273f4b5eb83cded4d2f1728383604051610d3b9291906117b6565b60405180910390a2505050565b6000805460405163230e93b160e11b815282916001600160a01b03169063461d276290610d829088908a906001908a908a906004016117e4565b6020604051808303816000875af1158015610da1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc5919061182d565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b6000610c58836001600160a01b0384166110f6565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610a0d565b600080546001600160a01b0319166001600160a01b0383161790556001600160a01b03821615610e6d57610e6d82610ea5565b6040516001600160a01b038216907f8e027fb3d390e4e77e8857eb25c3f2b2b17eb69cb36c0b1b993f8a94e29accea90600090a25050565b6001600160a01b038116610eb65750335b6106d581611145565b6008546000906001600160401b03600160c01b9091048116489091161115610ee75750600090565b600754600854610f11916001600160401b03600160a01b909104811691600160801b900416611846565b6001600160401b0316426001600160401b03161015610f305750600090565b600854600160401b90046001600160401b031660096000610f50426109ea565b6001600160401b0390811682526020820192909252604001600020541610610f785750600090565b50600190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60606000610c5883611156565b600081815260018301602052604081205480156110e5576000611020600183611865565b855490915060009061103490600190611865565b905080821461109957600086600001828154811061105457611054611878565b906000526020600020015490508087600001848154811061107757611077611878565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806110aa576110aa61188e565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610a0d565b6000915050610a0d565b5092915050565b600081815260018301602052604081205461113d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610a0d565b506000610a0d565b61114d6111b2565b610bea816111d7565b6060816000018054806020026020016040519081016040528092919081815260200182805480156111a657602002820191906000526020600020905b815481526020019060010190808311611192575b50505050509050919050565b6111ba6111df565b610a4b57604051631afcd79f60e31b815260040160405180910390fd5b610bb76111b2565b60006111e9610e11565b54600160401b900460ff16919050565b80356001600160a01b038116811461121057600080fd5b919050565b60006020828403121561122757600080fd5b610c58826111f9565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261125757600080fd5b81356001600160401b0381111561127057611270611230565b604051601f8201601f19908116603f011681016001600160401b038111828210171561129e5761129e611230565b6040528181528382016020018510156112b657600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156112e857600080fd5b8335925060208401356001600160401b0381111561130557600080fd5b61131186828701611246565b92505060408401356001600160401b0381111561132d57600080fd5b61133986828701611246565b9150509250925092565b6000806040838503121561135657600080fd5b61135f836111f9565b915061136d602084016111f9565b90509250929050565b6000815180845260005b8181101561139c57602081850181015186830182015201611380565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610c586020830184611376565b600080602083850312156113e257600080fd5b82356001600160401b038111156113f857600080fd5b8301601f8101851361140957600080fd5b80356001600160401b0381111561141f57600080fd5b85602082840101111561143157600080fd5b6020919091019590945092505050565b60006020828403121561145357600080fd5b5035919050565b80356001600160401b038116811461121057600080fd5b60006020828403121561148357600080fd5b610c588261145a565b82151581526040602082015260006114a76040830184611376565b949350505050565b602080825282518282018190526000918401906040840190835b818110156114f05783516001600160a01b03168352602093840193909201916001016114c9565b509095945050505050565b6000806000806080858703121561151157600080fd5b84356001600160401b0381111561152757600080fd5b61153387828801611246565b9450506115426020860161145a565b9250604085013563ffffffff8116811461155b57600080fd5b9396929550929360600135925050565b600080600080600060a0868803121561158357600080fd5b61158c866111f9565b945061159a6020870161145a565b93506115a86040870161145a565b92506115b66060870161145a565b91506115c46080870161145a565b90509295509295909350565b600181811c908216806115e457607f821691505b60208210810361160457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60006001600160401b0383168061164757634e487b7160e01b600052601260045260246000fd5b806001600160401b0384160491505092915050565b6001600160401b0381811683821602908116908181146110ef576110ef61160a565b601f8211156116c857806000526020600020601f840160051c810160208510156116a55750805b601f840160051c820191505b818110156116c557600081556001016116b1565b50505b505050565b81516001600160401b038111156116e6576116e6611230565b6116fa816116f484546115d0565b8461167e565b6020601f82116001811461172e57600083156117165750848201515b600019600385901b1c1916600184901b1784556116c5565b600084815260208120601f198516915b8281101561175e578785015182556020948501946001909201910161173e565b508482101561177c5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006001600160401b0382166001600160401b0381036117ad576117ad61160a565b60010192915050565b6040815260006117c96040830185611376565b82810360208401526117db8185611376565b95945050505050565b6001600160401b038616815260a06020820152600061180660a0830187611376565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b60006020828403121561183f57600080fd5b5051919050565b6001600160401b038181168382160190811115610a0d57610a0d61160a565b81810381811115610a0d57610a0d61160a565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220fdb68678e7e0199f753ee6e519038630c0dcb65a5adc014702b00d652ce68f5464736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlyRouterCanFulfill";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlySimulatedBackend";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				}
			];
			readonly name: "UnexpectedRequestID";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newSettler";
					readonly type: "address";
				}
			];
			readonly name: "AddSettler";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "router";
					readonly type: "address";
				}
			];
			readonly name: "InitializedConsumer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "oldSettler";
					readonly type: "address";
				}
			];
			readonly name: "RemoveSettler";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "RequestFulfilled";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "RequestSent";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				},
				{
					readonly indexed: false;
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly indexed: false;
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				}
			];
			readonly name: "Response";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "upkeepContract";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "upkeepInterval";
					readonly type: "uint64";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "upkeepRateInterval";
					readonly type: "uint64";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "upkeepRateCap";
					readonly type: "uint64";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "maxBaseGasPrice";
					readonly type: "uint64";
				}
			];
			readonly name: "SetUpkeep";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "addSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly name: "checkUpkeep";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "upkeepNeeded";
					readonly type: "bool";
				},
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "donID";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "gasLimit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint32";
					readonly name: "";
					readonly type: "uint32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "timestamp";
					readonly type: "uint256";
				}
			];
			readonly name: "getUpkeepTime";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				}
			];
			readonly name: "handleOracleFulfillment";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "i_router";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IFunctionsRouter";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_router";
					readonly type: "address";
				}
			];
			readonly name: "initializeConsumer";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				}
			];
			readonly name: "initializeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "lastUpkeep";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "maxBaseGasPrice";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly name: "performUpkeep";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "removeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "request";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "";
					readonly type: "bytes";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "s_lastRequestId";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "sendRequestCBOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_upkeepContract";
					readonly type: "address";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepInterval";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepRateInterval";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_upkeepRateCap";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_maxBaseGasPrice";
					readonly type: "uint64";
				}
			];
			readonly name: "setUpkeep";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "settlers";
			readonly outputs: readonly [
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "subscriptionId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes";
					readonly name: "_request";
					readonly type: "bytes";
				},
				{
					readonly internalType: "uint64";
					readonly name: "_subscriptionId";
					readonly type: "uint64";
				},
				{
					readonly internalType: "uint32";
					readonly name: "_gasLimit";
					readonly type: "uint32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "_donID";
					readonly type: "bytes32";
				}
			];
			readonly name: "updateRequest";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepContract";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepInterval";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepRateCap";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "upkeepRateInterval";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly name: "upkeepRates";
			readonly outputs: readonly [
				{
					readonly internalType: "uint64";
					readonly name: "";
					readonly type: "uint64";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): BaseFunctionsConsumerInterface;
	static connect(address: string, runner?: ContractRunner | null): BaseFunctionsConsumer;
}
export type DataFeedConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class DataFeed__factory extends ContractFactory {
	constructor(...args: DataFeedConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<DataFeed & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): DataFeed__factory;
	static readonly bytecode = "0x60806040526006600455348015601457600080fd5b50611237806100246000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c80637284e416116100de578063b1da41fe11610097578063bfc12c0511610071578063bfc12c0514610383578063d0d552dd1461038c578063f2fde38b1461039f578063feaf968c146103b257600080fd5b8063b1da41fe1461032e578063b5ab58dc14610343578063b633620c1461036357600080fd5b80637284e416146102735780638205bf6a146102885780638da5cb5b1461029157806390c3f38f146102c15780639a6fc8f5146102d4578063a87a20ce1461031b57600080fd5b80633b2235fc116101305780633b2235fc1461020f578063408def1e1461023d57806350d25bcd1461025057806354fd4d5014610259578063668a0f0214610262578063715018a61461026b57600080fd5b8062b105e614610177578063057b39671461018c57806314d3940d1461019f578063313ce567146101b2578063329bad17146101d157806338d52e0f146101e4575b600080fd5b61018a610185366004610e1b565b6103ba565b005b61018a61019a366004610edb565b61045c565b61018a6101ad366004610e1b565b61055c565b6101ba600881565b60405160ff90911681526020015b60405180910390f35b61018a6101df366004610e1b565b6105f5565b6002546101f7906001600160a01b031681565b6040516001600160a01b0390911681526020016101c8565b61022f61021d366004610f39565b600b6020526000908152604090205481565b6040519081526020016101c8565b61018a61024b366004610f39565b6106f1565b61022f60065481565b61022f60045481565b61022f60085481565b61018a6106fe565b61027b610712565b6040516101c89190610f52565b61022f60075481565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b03166101f7565b61018a6102cf366004610fa0565b6107a0565b6102e76102e2366004610fdd565b6107e4565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a0016101c8565b61018a610329366004610f39565b610862565b6103366108c3565b6040516101c89190611006565b61022f610351366004610f39565b60096020526000908152604090205481565b61022f610371366004610f39565b600a6020526000908152604090205481565b61022f60055481565b61018a61039a366004610e1b565b6108d4565b61018a6103ad366004610e1b565b610926565b6102e7610961565b6103c2610985565b6103cd6000826109fb565b6104105760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61041b600082610a22565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6000610466610a37565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561048e5750825b905060008267ffffffffffffffff1660011480156104ab5750303b155b9050811580156104b9575080155b156104d75760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561050157845460ff60401b1916600160401b1785555b61050c888888610a60565b831561055257845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050565b610564610985565b61056f6000826109fb565b156105b05760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610407565b6105bb600082610a89565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e90602001610451565b60006105ff610a37565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156106275750825b905060008267ffffffffffffffff1660011480156106445750303b155b905081158015610652575080155b156106705760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561069a57845460ff60401b1916600160401b1785555b6106a386610a9e565b83156106e957845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6106f9610985565b600455565b610706610985565b6107106000610ab8565b565b6003805461071f90611052565b80601f016020809104026020016040519081016040528092919081815260200182805461074b90611052565b80156107985780601f1061076d57610100808354040283529160200191610798565b820191906000526020600020905b81548152906001019060200180831161077b57829003601f168201915b505050505081565b6107a8610985565b60036107b482826110da565b507f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c6816040516104519190610f52565b6001600160501b0381166000818152600960205260408120548392909190819081906108125760055461083a565b600a600061082a60016001600160501b038a166111af565b8152602001908152602001600020545b6001600160501b0387166000908152600a602052604090205495979496909594909350915050565b61086d6000336109fb565b6108a75760405162461bcd60e51b815260206004820152600b60248201526a2727aa2fa9a2aa2a2622a960a91b6044820152606401610407565b6108c08160085460016108ba91906111c2565b42610b29565b50565b60606108cf6000610bf5565b905090565b6108dc610985565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a250565b61092e610985565b6001600160a01b03811661095857604051631e4fbdf760e01b815260006004820152602401610407565b6108c081610ab8565b60008060008060006109746008546107e4565b945094509450945094509091929394565b60006109b87f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b038116158015906109db57506001600160a01b0381163314155b156108c05760405163118cdaa760e01b8152336004820152602401610407565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b6000610a19836001600160a01b038416610c09565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610a1c565b426005556006600455610a72826108d4565b610a7b816107a0565b610a8483610a9e565b505050565b6000610a19836001600160a01b038416610cfc565b6001600160a01b038116610aaf5750335b6105b081610d4b565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b8060075410610b3757505050565b6006839055600781905560088290556000828152600a6020908152604080832080546009845282852088905590859055848452600b909252909120849055151580610bb457604051828152339084907f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac602719060200160405180910390a35b82847f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f84604051610be791815260200190565b60405180910390a350505050565b60606000610c0283610d5c565b9392505050565b60008181526001830160205260408120548015610cf2576000610c2d6001836111af565b8554909150600090610c41906001906111af565b9050808214610ca6576000866000018281548110610c6157610c616111d5565b9060005260206000200154905080876000018481548110610c8457610c846111d5565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610cb757610cb76111eb565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610a1c565b6000915050610a1c565b6000818152600183016020526040812054610d4357508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610a1c565b506000610a1c565b610d53610db8565b6108c081610ddd565b606081600001805480602002602001604051908101604052809291908181526020018280548015610dac57602002820191906000526020600020905b815481526020019060010190808311610d98575b50505050509050919050565b610dc0610de5565b61071057604051631afcd79f60e31b815260040160405180910390fd5b61092e610db8565b6000610def610a37565b54600160401b900460ff16919050565b80356001600160a01b0381168114610e1657600080fd5b919050565b600060208284031215610e2d57600080fd5b610a1982610dff565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610e5d57600080fd5b813567ffffffffffffffff811115610e7757610e77610e36565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610ea657610ea6610e36565b604052818152838201602001851015610ebe57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610ef057600080fd5b610ef984610dff565b9250610f0760208501610dff565b9150604084013567ffffffffffffffff811115610f2357600080fd5b610f2f86828701610e4c565b9150509250925092565b600060208284031215610f4b57600080fd5b5035919050565b602081526000825180602084015260005b81811015610f805760208186018101516040868401015201610f63565b506000604082850101526040601f19601f83011684010191505092915050565b600060208284031215610fb257600080fd5b813567ffffffffffffffff811115610fc957600080fd5b610fd584828501610e4c565b949350505050565b600060208284031215610fef57600080fd5b81356001600160501b0381168114610c0257600080fd5b602080825282518282018190526000918401906040840190835b818110156110475783516001600160a01b0316835260209384019390920191600101611020565b509095945050505050565b600181811c9082168061106657607f821691505b60208210810361108657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610a8457806000526020600020601f840160051c810160208510156110b35750805b601f840160051c820191505b818110156110d357600081556001016110bf565b5050505050565b815167ffffffffffffffff8111156110f4576110f4610e36565b611108816111028454611052565b8461108c565b6020601f82116001811461113c57600083156111245750848201515b600019600385901b1c1916600184901b1784556110d3565b600084815260208120601f198516915b8281101561116c578785015182556020948501946001909201910161114c565b508482101561118a5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b81810381811115610a1c57610a1c611199565b80820180821115610a1c57610a1c611199565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220866d107121a0fdad96a74ee97f060226c54e62732a497855202a54a8a177af2564736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newSettler";
					readonly type: "address";
				}
			];
			readonly name: "AddSettler";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "int256";
					readonly name: "current";
					readonly type: "int256";
				},
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "roundId";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "updatedAt";
					readonly type: "uint256";
				}
			];
			readonly name: "AnswerUpdated";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				}
			];
			readonly name: "NewAsset";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "string";
					readonly name: "description";
					readonly type: "string";
				}
			];
			readonly name: "NewDescription";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "roundId";
					readonly type: "uint256";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "startedBy";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "startedAt";
					readonly type: "uint256";
				}
			];
			readonly name: "NewRound";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "oldSettler";
					readonly type: "address";
				}
			];
			readonly name: "RemoveSettler";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "addSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "deploymentTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "description";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "getAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "_roundId";
					readonly type: "uint80";
				}
			];
			readonly name: "getRoundData";
			readonly outputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "roundId";
					readonly type: "uint80";
				},
				{
					readonly internalType: "int256";
					readonly name: "answer";
					readonly type: "int256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "startedAt";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "updatedAt";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint80";
					readonly name: "answeredInRound";
					readonly type: "uint80";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "getTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "getTimestampAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				},
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				}
			];
			readonly name: "initializeFeed";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				}
			];
			readonly name: "initializeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRound";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRoundData";
			readonly outputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				},
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_settler";
					readonly type: "address";
				}
			];
			readonly name: "removeSettler";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				}
			];
			readonly name: "setAsset";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				}
			];
			readonly name: "setDescription";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_version";
					readonly type: "uint256";
				}
			];
			readonly name: "setVersion";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "settlers";
			readonly outputs: readonly [
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "newAnswer";
					readonly type: "int256";
				}
			];
			readonly name: "updateAnswer";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "version";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): DataFeedInterface;
	static connect(address: string, runner?: ContractRunner | null): DataFeed;
}
export type DataFeedAggregatorConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class DataFeedAggregator__factory extends ContractFactory {
	constructor(...args: DataFeedAggregatorConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<DataFeedAggregator & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): DataFeedAggregator__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b50610fdf8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637284e416116100b8578063b633620c1161007c578063b633620c146102c2578063bfc12c05146102d5578063c1597304146102dd578063f2fde38b14610306578063f8a2abd314610319578063feaf968c1461032c57600080fd5b80637284e416146102185780638205bf6a1461022d5780638da5cb5b146102355780639a6fc8f514610265578063b5ab58dc146102af57600080fd5b8063485cc9551161010a578063485cc955146101c257806350d25bcd146101d757806354fd4d50146101df57806358303b10146101e7578063668a0f0214610208578063715018a61461021057600080fd5b8063245a7bfc1461014757806330c812731461016c578063313ce5671461017f57806338d52e0f146101995780633b2235fc146101a1575b600080fd5b61014f610334565b6040516001600160a01b0390911681526020015b60405180910390f35b61014f61017a366004610cbc565b610354565b61018761040a565b60405160ff9091168152602001610163565b61014f61047a565b6101b46101af366004610ce0565b610487565b604051908152602001610163565b6101d56101d0366004610cf9565b610505565b005b6101b461061a565b6101b4610685565b6000546101f59061ffff1681565b60405161ffff9091168152602001610163565b6101b46106cc565b6101d5610713565b610220610727565b6040516101639190610d56565b6101b4610796565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661014f565b610278610273366004610da1565b6107dd565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610163565b6101b46102bd366004610ce0565b610875565b6101b46102d0366004610ce0565b6108ac565b6101b46108e3565b61014f6102eb366004610dbe565b6001602052600090815260409020546001600160a01b031681565b6101d5610314366004610cbc565b61092a565b6101d5610327366004610cbc565b61096d565b610278610abd565b6000805461ffff168152600160205260409020546001600160a01b031690565b60408051600481526024810182526020810180516001600160e01b03166338d52e0f60e01b1790529051600091829182916001600160a01b0386169161039a9190610de2565b600060405180830381855afa9150503d80600081146103d5576040519150601f19603f3d011682016040523d82523d6000602084013e6103da565b606091505b5091509150816103ee575060009392505050565b808060200190518101906104029190610dfe565b949350505050565b6000610414610334565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610451573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190610e1b565b905090565b600061047561017a610334565b6000610491610334565b6001600160a01b0316633b2235fc836040518263ffffffff1660e01b81526004016104be91815260200190565b602060405180830381865afa1580156104db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ff9190610e3e565b92915050565b600061050f610b3f565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156105375750825b905060008267ffffffffffffffff1660011480156105545750303b155b905081158015610562575080155b156105805760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156105aa57845460ff60401b1916600160401b1785555b6001600160a01b038616156105c2576105c28661096d565b6105cb87610b68565b831561061157845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b6000610624610334565b6001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190610e3e565b600061068f610334565b6001600160a01b03166354fd4d506040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b60006106d6610334565b6001600160a01b031663668a0f026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b61071b610b79565b6107256000610bef565b565b6060610731610334565b6001600160a01b0316637284e4166040518163ffffffff1660e01b8152600401600060405180830381865afa15801561076e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104759190810190610e6d565b60006107a0610334565b6001600160a01b0316638205bf6a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b60008060008060006107ed610334565b604051639a6fc8f560e01b815269ffffffffffffffffffff881660048201526001600160a01b039190911690639a6fc8f59060240160a060405180830381865afa15801561083f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108639190610f22565b939a9299509097509550909350915050565b600061087f610334565b6001600160a01b031663b5ab58dc836040518263ffffffff1660e01b81526004016104be91815260200190565b60006108b6610334565b6001600160a01b031663b633620c836040518263ffffffff1660e01b81526004016104be91815260200190565b60006108ed610334565b6001600160a01b031663bfc12c056040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b610932610b79565b6001600160a01b03811661096157604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61096a81610bef565b50565b610975610b79565b806000610980610334565b9050600061098d84610354565b60005490915061ffff161515806109ac57506001600160a01b03821615155b156109e0576000805461ffff1690806109c483610f7a565b91906101000a81548161ffff021916908361ffff160217905550505b6000805461ffff1681526001602090815260409182902080546001600160a01b0319166001600160a01b03878116919091179091558251858216815233928101929092528681169261034892918516917fb56c4f88c3e344891ef92e51f036d7116e886f4ea57f5ba93e28b5f44925b9ce910160405180910390a4600054604080516001600160a01b03858116825261ffff9093166020820152338183015290518683169261034892908516917f27a180c70f2642f63d1694eb252b7df52e7ab2565e3f67adf7748acb7d82b9bc9181900360600190a450505050565b6000806000806000610acd610334565b6001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610b0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2e9190610f22565b945094509450945094509091929394565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006104ff565b610b70610c60565b61096a81610c85565b6000610bac7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b03811615801590610bcf57506001600160a01b0381163314155b1561096a5760405163118cdaa760e01b8152336004820152602401610958565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b610c68610c8d565b61072557604051631afcd79f60e31b815260040160405180910390fd5b610932610c60565b6000610c97610b3f565b54600160401b900460ff16919050565b6001600160a01b038116811461096a57600080fd5b600060208284031215610cce57600080fd5b8135610cd981610ca7565b9392505050565b600060208284031215610cf257600080fd5b5035919050565b60008060408385031215610d0c57600080fd5b8235610d1781610ca7565b91506020830135610d2781610ca7565b809150509250929050565b60005b83811015610d4d578181015183820152602001610d35565b50506000910152565b6020815260008251806020840152610d75816040850160208701610d32565b601f01601f19169190910160400192915050565b69ffffffffffffffffffff8116811461096a57600080fd5b600060208284031215610db357600080fd5b8135610cd981610d89565b600060208284031215610dd057600080fd5b813561ffff81168114610cd957600080fd5b60008251610df4818460208701610d32565b9190910192915050565b600060208284031215610e1057600080fd5b8151610cd981610ca7565b600060208284031215610e2d57600080fd5b815160ff81168114610cd957600080fd5b600060208284031215610e5057600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610e7f57600080fd5b815167ffffffffffffffff811115610e9657600080fd5b8201601f81018413610ea757600080fd5b805167ffffffffffffffff811115610ec157610ec1610e57565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610ef057610ef0610e57565b604052818152828201602001861015610f0857600080fd5b610f19826020830160208601610d32565b95945050505050565b600080600080600060a08688031215610f3a57600080fd5b8551610f4581610d89565b60208701516040880151606089015160808a015193985091965094509250610f6c81610d89565b809150509295509295909350565b600061ffff821661ffff8103610fa057634e487b7160e01b600052601160045260246000fd5b6001019291505056fea26469706673582212201f4251b133263dbb5159bc54c0df0fc2861f203186c9bfa60c56ebd25edbea4764736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "denomination";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "latestAggregator";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "previousAggregator";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint16";
					readonly name: "nextPhaseId";
					readonly type: "uint16";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "FeedConfirmed";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "denomination";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "proposedAggregator";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "currentAggregator";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "FeedProposed";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "aggregator";
			readonly outputs: readonly [
				{
					readonly internalType: "contract DataFeedAggregator";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_aggregator";
					readonly type: "address";
				}
			];
			readonly name: "callAsset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "deploymentTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "description";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_roundId";
					readonly type: "uint256";
				}
			];
			readonly name: "getAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "_roundId";
					readonly type: "uint80";
				}
			];
			readonly name: "getRoundData";
			readonly outputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				},
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_roundId";
					readonly type: "uint256";
				}
			];
			readonly name: "getTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_timestamp";
					readonly type: "uint256";
				}
			];
			readonly name: "getTimestampAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_aggregator";
					readonly type: "address";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestAnswer";
			readonly outputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRound";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestRoundData";
			readonly outputs: readonly [
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				},
				{
					readonly internalType: "int256";
					readonly name: "";
					readonly type: "int256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint80";
					readonly name: "";
					readonly type: "uint80";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "latestTimestamp";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint16";
					readonly name: "";
					readonly type: "uint16";
				}
			];
			readonly name: "phaseAggregators";
			readonly outputs: readonly [
				{
					readonly internalType: "contract DataFeedAggregator";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "phaseId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint16";
					readonly name: "";
					readonly type: "uint16";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_aggregator";
					readonly type: "address";
				}
			];
			readonly name: "proposeAggregator";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "version";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): DataFeedAggregatorInterface;
	static connect(address: string, runner?: ContractRunner | null): DataFeedAggregator;
}
declare class FunctionsClient__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "OnlyRouterCanFulfill";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "RequestFulfilled";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "bytes32";
					readonly name: "id";
					readonly type: "bytes32";
				}
			];
			readonly name: "RequestSent";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "requestId";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes";
					readonly name: "response";
					readonly type: "bytes";
				},
				{
					readonly internalType: "bytes";
					readonly name: "err";
					readonly type: "bytes";
				}
			];
			readonly name: "handleOracleFulfillment";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "i_router";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IFunctionsRouter";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): FunctionsClientInterface;
	static connect(address: string, runner?: ContractRunner | null): FunctionsClient;
}
export type InitializableProxyConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class InitializableProxy__factory extends ContractFactory {
	constructor(...args: InitializableProxyConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<InitializableProxy & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): InitializableProxy__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b50610aac8061001f6000396000f3fe6080604052600436106100745760003560e01c8063aba001731161004e578063aba00173146100f0578063e612041314610103578063ee0530f414610123578063f851a4401461014557610083565b80634f1ef2861461008b5780635c60da1b1461009e5780638f283970146100d057610083565b366100835761008161015a565b005b61008161015a565b610081610099366004610762565b61016c565b3480156100aa57600080fd5b506100b36101bb565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100dc57600080fd5b506100816100eb3660046107b0565b6101ca565b6100816100fe3660046107d2565b61020e565b34801561010f57600080fd5b5061008161011e36600461085c565b6102a2565b34801561012f57600080fd5b506101386102e3565b6040516100c791906108bd565b34801561015157600080fd5b506100b3610394565b61016a61016561039e565b6103a8565b565b6101746103d1565b6001600160a01b0316336001600160a01b0316146101ad5760405162461bcd60e51b81526004016101a4906108f0565b60405180910390fd5b6101b782826103db565b5050565b60006101c561039e565b905090565b6101d26103d1565b6001600160a01b0316336001600160a01b0316146102025760405162461bcd60e51b81526004016101a4906108f0565b61020b81610494565b50565b600061021861039e565b6001600160a01b031614801561023e575060006102336103d1565b6001600160a01b0316145b6102805760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b60448201526064016101a4565b61028983610494565b61029382826103db565b61029c846104e8565b50505050565b6102aa6103d1565b6001600160a01b0316336001600160a01b0316146102da5760405162461bcd60e51b81526004016101a4906108f0565b61020b816104e8565b60607ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff4805461031190610913565b80601f016020809104026020016040519081016040528092919081815260200182805461033d90610913565b801561038a5780601f1061035f5761010080835404028352916020019161038a565b820191906000526020600020905b81548152906001019060200180831161036d57829003601f168201915b5050505050905090565b60006101c56103d1565b60006101c5610555565b3660008037600080366000845af43d6000803e8080156103c7573d6000f35b3d6000fd5b505050565b60006101c5610588565b6103e4826105b0565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561048c57600080836001600160a01b03168360405161043a919061094d565b600060405180830381855af49150503d8060008114610475576040519150601f19603f3d011682016040523d82523d6000602084013e61047a565b606091505b50915091508161029c57805181602001fd5b6101b761062a565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104bd610588565b604080516001600160a01b03928316815291841660208301520160405180910390a161020b81610649565b80511561020b577ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff461051a82826109b7565b507f8a1bce929b257bfd582fa164d9b9fa4d4b0b7442b10b3aad23e2c56aa4e0d61a8160405161054a91906108bd565b60405180910390a150565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b546001600160a01b0316919050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610579565b806001600160a01b03163b6000036105e657604051634c9c8ce360e01b81526001600160a01b03821660048201526024016101a4565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b341561016a5760405163b398979f60e01b815260040160405180910390fd5b6001600160a01b03811661067357604051633173bdd160e11b8152600060048201526024016101a4565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610609565b80356001600160a01b03811681146106b157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126106dd57600080fd5b81356020830160008067ffffffffffffffff8411156106fe576106fe6106b6565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff8211171561072d5761072d6106b6565b60405283815290508082840187101561074557600080fd5b838360208301376000602085830101528094505050505092915050565b6000806040838503121561077557600080fd5b61077e8361069a565b9150602083013567ffffffffffffffff81111561079a57600080fd5b6107a6858286016106cc565b9150509250929050565b6000602082840312156107c257600080fd5b6107cb8261069a565b9392505050565b600080600080608085870312156107e857600080fd5b843567ffffffffffffffff8111156107ff57600080fd5b61080b878288016106cc565b94505061081a6020860161069a565b92506108286040860161069a565b9150606085013567ffffffffffffffff81111561084457600080fd5b610850878288016106cc565b91505092959194509250565b60006020828403121561086e57600080fd5b813567ffffffffffffffff81111561088557600080fd5b610891848285016106cc565b949350505050565b60005b838110156108b457818101518382015260200161089c565b50506000910152565b60208152600082518060208401526108dc816040850160208701610899565b601f01601f19169190910160400192915050565b6020808252600990820152682727aa2fa0a226a4a760b91b604082015260600190565b600181811c9082168061092757607f821691505b60208210810361094757634e487b7160e01b600052602260045260246000fd5b50919050565b6000825161095f818460208701610899565b9190910192915050565b601f8211156103cc57806000526020600020601f840160051c810160208510156109905750805b601f840160051c820191505b818110156109b0576000815560010161099c565b5050505050565b815167ffffffffffffffff8111156109d1576109d16106b6565b6109e5816109df8454610913565b84610969565b6020601f821160018114610a195760008315610a015750848201515b600019600385901b1c1916600184901b1784556109b0565b600084815260208120601f198516915b82811015610a495787850151825560209485019460019092019101610a29565b5084821015610a675786840151600019600387901b60f8161c191681555b50505050600190811b0190555056fea2646970667358221220240656e12b8a464decae04b5117626a0c6a978b629476b0838b05437a213b03e64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "admin";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidAdmin";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidImplementation";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ERC1967NonPayable";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "previousAdmin";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "AdminChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "string";
					readonly name: "description";
					readonly type: "string";
				}
			];
			readonly name: "DescriptionChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "Upgraded";
			readonly type: "event";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "fallback";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "admin";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "changeAdmin";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				}
			];
			readonly name: "changeDescription";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "implementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "_description";
					readonly type: "string";
				},
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "initializeProxy";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "proxyDescription";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "upgradeToAndCall";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "receive";
		}
	];
	static createInterface(): InitializableProxyInterface;
	static connect(address: string, runner?: ContractRunner | null): InitializableProxy;
}
export type ERC20MockConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
declare class ERC20Mock__factory extends ContractFactory {
	constructor(...args: ERC20MockConstructorParams);
	getDeployTransaction(name_: string, symbol_: string, decimals_: BigNumberish, supply_: BigNumberish, overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(name_: string, symbol_: string, decimals_: BigNumberish, supply_: BigNumberish, overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ERC20Mock & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ERC20Mock__factory;
	static readonly bytecode = "0x61018060405234801561001157600080fd5b506040516118a63803806118a68339810160408190526100309161045f565b338480604051806040016040528060018152602001603160f81b8152508787816003908161005e9190610571565b50600461006b8282610571565b5061007b91508390506005610175565b6101205261008a816006610175565b61014052815160208084019190912060e052815190820120610100524660a05261011760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b03811661015057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610159816101a8565b5060ff82166101605261016c33826101fa565b505050506106a7565b60006020835110156101915761018a83610234565b90506101a2565b8161019c8482610571565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166102245760405163ec442f0560e01b815260006004820152602401610147565b61023060008383610272565b5050565b600080829050601f8151111561025f578260405163305a27a960e01b8152600401610147919061062f565b805161026a82610662565b179392505050565b6001600160a01b03831661029d5780600260008282546102929190610686565b9091555061030f9050565b6001600160a01b038316600090815260208190526040902054818110156102f05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610147565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661032b5760028054829003905561034a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161038f91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103cd5781810151838201526020016103b5565b50506000910152565b600082601f8301126103e757600080fd5b81516001600160401b038111156104005761040061039c565b604051601f8201601f19908116603f011681016001600160401b038111828210171561042e5761042e61039c565b60405281815283820160200185101561044657600080fd5b6104578260208301602087016103b2565b949350505050565b6000806000806080858703121561047557600080fd5b84516001600160401b0381111561048b57600080fd5b610497878288016103d6565b602087015190955090506001600160401b038111156104b557600080fd5b6104c1878288016103d6565b935050604085015160ff811681146104d857600080fd5b6060959095015193969295505050565b600181811c908216806104fc57607f821691505b60208210810361051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561056c57806000526020600020601f840160051c810160208510156105495750805b601f840160051c820191505b818110156105695760008155600101610555565b50505b505050565b81516001600160401b0381111561058a5761058a61039c565b61059e8161059884546104e8565b84610522565b6020601f8211600181146105d257600083156105ba5750848201515b600019600385901b1c1916600184901b178455610569565b600084815260208120601f198516915b8281101561060257878501518255602094850194600190920191016105e2565b50848210156106205786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015261064e8160408501602087016103b2565b601f01601f19169190910160400192915050565b8051602080830151919081101561051c5760001960209190910360031b1b16919050565b808201808211156101a257634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161119a61070c600039600061019e015260006109840152600061095701526000610814015260006107ec01526000610747015260006107710152600061079b015261119a6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806379cc6790116100ad578063a0712d6811610071578063a0712d681461028d578063a9059cbb146102a0578063d505accf146102b3578063dd62ed3e146102c6578063f2fde38b146102ff57600080fd5b806379cc6790146102295780637ecebe001461023c57806384b0196e1461024f5780638da5cb5b1461026a57806395d89b411461028557600080fd5b80633644e515116100f45780633644e515146101c857806340c10f19146101d057806342966c68146101e557806370a08231146101f8578063715018a61461022157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b610139610312565b6040516101469190610ee4565b60405180910390f35b61016261015d366004610f1a565b6103a4565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610f44565b6103be565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610146565b6101766103e2565b6101e36101de366004610f1a565b6103f1565b005b6101e36101f3366004610f81565b610407565b610176610206366004610f9a565b6001600160a01b031660009081526020819052604090205490565b6101e3610414565b6101e3610237366004610f1a565b610428565b61017661024a366004610f9a565b61043d565b61025761045b565b6040516101469796959493929190610fb5565b6008546040516001600160a01b039091168152602001610146565b6101396104a1565b6101e361029b366004610f81565b6104b0565b6101626102ae366004610f1a565b6104c2565b6101e36102c136600461104d565b6104d0565b6101766102d43660046110c0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e361030d366004610f9a565b61060f565b606060038054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000336103b281858561064a565b60019150505b92915050565b6000336103cc85828561065c565b6103d78585856106db565b506001949350505050565b60006103ec61073a565b905090565b6103f9610865565b6104038282610892565b5050565b61041133826108c8565b50565b61041c610865565b61042660006108fe565b565b61043382338361065c565b61040382826108c8565b6001600160a01b0381166000908152600760205260408120546103b8565b60006060806000806000606061046f610950565b61047761097d565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b606060048054610321906110f3565b6104b8610865565b6104113382610892565b6000336103b28185856106db565b834211156104f95760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105468c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105a1826109aa565b905060006105b1828787876109d7565b9050896001600160a01b0316816001600160a01b0316146105f8576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016104f0565b6106038a8a8a61064a565b50505050505050505050565b610617610865565b6001600160a01b03811661064157604051631e4fbdf760e01b8152600060048201526024016104f0565b610411816108fe565b6106578383836001610a05565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156106d557818110156106c657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104f0565b6106d584848484036000610a05565b50505050565b6001600160a01b03831661070557604051634b637e8f60e11b8152600060048201526024016104f0565b6001600160a01b03821661072f5760405163ec442f0560e01b8152600060048201526024016104f0565b610657838383610ada565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561079357507f000000000000000000000000000000000000000000000000000000000000000046145b156107bd57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ec604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146104265760405163118cdaa760e01b81523360048201526024016104f0565b6001600160a01b0382166108bc5760405163ec442f0560e01b8152600060048201526024016104f0565b61040360008383610ada565b6001600160a01b0382166108f257604051634b637e8f60e11b8152600060048201526024016104f0565b61040382600083610ada565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006005610c04565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006006610c04565b60006103b86109b761073a565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806109e988888888610caf565b9250925092506109f98282610d7e565b50909695505050505050565b6001600160a01b038416610a2f5760405163e602df0560e01b8152600060048201526024016104f0565b6001600160a01b038316610a5957604051634a1406b160e11b8152600060048201526024016104f0565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156106d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610acc91815260200190565b60405180910390a350505050565b6001600160a01b038316610b05578060026000828254610afa919061112d565b90915550610b779050565b6001600160a01b03831660009081526020819052604090205481811015610b585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104f0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9357600280548290039055610bb2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf791815260200190565b60405180910390a3505050565b606060ff8314610c1e57610c1783610e37565b90506103b8565b818054610c2a906110f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c56906110f3565b8015610ca35780601f10610c7857610100808354040283529160200191610ca3565b820191906000526020600020905b815481529060010190602001808311610c8657829003601f168201915b505050505090506103b8565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610cea5750600091506003905082610d74565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610d3e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d6a57506000925060019150829050610d74565b9250600091508190505b9450945094915050565b6000826003811115610d9257610d9261114e565b03610d9b575050565b6001826003811115610daf57610daf61114e565b03610dcd5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610de157610de161114e565b03610e025760405163fce698f760e01b8152600481018290526024016104f0565b6003826003811115610e1657610e1661114e565b03610403576040516335e2f38360e21b8152600481018290526024016104f0565b60606000610e4483610e76565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610ec457602081850181015186830182015201610ea8565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ef76020830184610e9e565b9392505050565b80356001600160a01b0381168114610f1557600080fd5b919050565b60008060408385031215610f2d57600080fd5b610f3683610efe565b946020939093013593505050565b600080600060608486031215610f5957600080fd5b610f6284610efe565b9250610f7060208501610efe565b929592945050506040919091013590565b600060208284031215610f9357600080fd5b5035919050565b600060208284031215610fac57600080fd5b610ef782610efe565b60ff60f81b8816815260e060208201526000610fd460e0830189610e9e565b8281036040840152610fe68189610e9e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b8181101561103c57835183526020938401939092019160010161101e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a03121561106857600080fd5b61107188610efe565b965061107f60208901610efe565b95506040880135945060608801359350608088013560ff811681146110a357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156110d357600080fd5b6110dc83610efe565b91506110ea60208401610efe565b90509250929050565b600181811c9082168061110757607f821691505b60208210810361112757634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b4f600021cca635f7c885aeead01f0c50294d1c230b18a3fadd5dfc1e55fc4ae64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "name_";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "symbol_";
					readonly type: "string";
				},
				{
					readonly internalType: "uint8";
					readonly name: "decimals_";
					readonly type: "uint8";
				},
				{
					readonly internalType: "uint256";
					readonly name: "supply_";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "constructor";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burnFrom";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20MockInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Mock;
}
export interface Price {
	timestamp: number;
	price: number;
	volume: number;
}
export interface PriceVWAP {
	timestamp: number;
	accPriceVol: number;
	accVol: number;
	price: number;
}
export declare function getOHLCV({ exchange, symbol, startTime, timeframe, timeframeSec, }: {
	exchange: Exchange;
	symbol: string;
	startTime?: number;
	timeframe?: string;
	timeframeSec?: number;
}): Promise<Price[]>;
export declare function parseJSONL<T>(jsonl: string): T[];
export declare function toJSONL<T>(array: T[]): string;

declare namespace automationCompatibleInterfaceSol {
	export { AutomationCompatibleInterface$1 as AutomationCompatibleInterface };
}
declare namespace interfaces {
	export { automationCompatibleInterfaceSol };
}
declare namespace automationBaseSol {
	export { AutomationBase };
}
declare namespace automationCompatibleSol {
	export { AutomationCompatible };
}
declare namespace functions {
	export { v100 };
}
declare namespace iFunctionsRouterSol {
	export { IFunctionsRouter };
}
declare namespace iFunctionsClientSol {
	export { IFunctionsClient };
}
declare namespace libraries {
	export { functionsRequestSol };
}
declare namespace functionsRequestSol {
	export { FunctionsRequest };
}
declare namespace interfaces$1 {
	export { iFunctionsClientSol, iFunctionsRouterSol };
}
declare namespace v100 {
	export { interfaces$1 as interfaces, libraries };
}
declare namespace automation {
	export { automationBaseSol, automationCompatibleSol, interfaces };
}
declare namespace v08 {
	export { automation, functions };
}
declare namespace src {
	export { v08 };
}
declare namespace contracts {
	export { src };
}
declare namespace factories {
	export { chainlink, contracts$3 as contracts, openzeppelin };
}
declare namespace ownableSol {
	export { Ownable };
}
declare namespace utils {
	export { addressSol, cryptography, errorsSol, math, noncesSol, shortStringsSol, stringsSol };
}
declare namespace draftIerc6093Sol {
	export { IERC1155Errors, IERC20Errors, IERC721Errors };
}
declare namespace ierc1967Sol {
	export { IERC1967 };
}
declare namespace ierc5267Sol {
	export { IERC5267 };
}
declare namespace erc1967UtilsSol {
	export { ERC1967Utils };
}
declare namespace beacon {
	export { iBeaconSol };
}
declare namespace iBeaconSol {
	export { IBeacon };
}
declare namespace erc1967 {
	export { erc1967UtilsSol };
}
declare namespace proxySol {
	export { Proxy$1 as Proxy };
}
declare namespace ierc20PermitSol {
	export { IERC20Permit };
}
declare namespace erc20BurnableSol {
	export { ERC20Burnable };
}
declare namespace erc20PermitSol {
	export { ERC20Permit };
}
declare namespace ierc20MetadataSol {
	export { IERC20Metadata };
}
declare namespace extensions {
	export { erc20BurnableSol, erc20PermitSol, ierc20MetadataSol, ierc20PermitSol };
}
declare namespace erc20Sol {
	export { ERC20 };
}
declare namespace ierc20Sol {
	export { IERC20 };
}
declare namespace erc20 {
	export { erc20Sol, extensions, ierc20Sol };
}
declare namespace eip712Sol {
	export { EIP712 };
}
declare namespace ecdsaSol {
	export { ECDSA };
}
declare namespace math {
	export { safeCastSol };
}
declare namespace safeCastSol {
	export { SafeCast };
}
declare namespace addressSol {
	export { Address };
}
declare namespace errorsSol {
	export { Errors };
}
declare namespace noncesSol {
	export { Nonces };
}
declare namespace shortStringsSol {
	export { ShortStrings };
}
declare namespace stringsSol {
	export { Strings };
}
declare namespace cryptography {
	export { ecdsaSol, eip712Sol };
}
declare namespace access {
	export { ownableSol };
}
declare namespace interfaces$2 {
	export { draftIerc6093Sol, ierc1967Sol, ierc5267Sol };
}
declare namespace proxy {
	export { beacon, erc1967, proxySol };
}
declare namespace token {
	export { erc20 };
}
declare namespace contractsUpgradeable {
	export { access$1 as access, proxy$1 as proxy, utils$1 as utils };
}
declare namespace ownableUpgradeableSol {
	export { OwnableUpgradeable };
}
declare namespace utils$1 {
	export { contextUpgradeableSol };
}
declare namespace initializableSol {
	export { Initializable };
}
declare namespace utils$2 {
	export { initializableSol };
}
declare namespace contextUpgradeableSol {
	export { ContextUpgradeable };
}
declare namespace access$1 {
	export { ownableUpgradeableSol };
}
declare namespace proxy$1 {
	export { utils$2 as utils };
}
declare namespace contracts$1 {
	export { access, interfaces$2 as interfaces, proxy, token, utils };
}
declare namespace iPriceFeedSol {
	export { IPriceFeed };
}
declare namespace iarwSupplySol {
	export { IARWSupply };
}
declare namespace ierc20Sol$1 {
	export { IERC20Exp, IERC20Mintable };
}
declare namespace iInitializableProxySol {
	export { IInitializableProxy };
}
declare namespace tokens {
	export { erc20MockSol };
}
declare namespace withSettlerSol {
	export { WithSettler };
}
declare namespace ownableSol$1 {
	export { Ownable$1 as Ownable };
}
declare namespace sigLibSol {
	export { SigLib };
}
declare namespace functionsClientSol {
	export { FunctionsClient };
}
declare namespace arwFeedSol {
	export { ARWFeed };
}
declare namespace baseFunctionsConsumerSol {
	export { BaseFunctionsConsumer };
}
declare namespace dataFeedSol {
	export { DataFeed };
}
declare namespace dataFeedAggregatorSol {
	export { DataFeedAggregator };
}
declare namespace initializableProxySol {
	export { InitializableProxy };
}
declare namespace erc20MockSol {
	export { ERC20Mock };
}
declare namespace lockSol {
	export { Lock$1 as Lock };
}
declare namespace interfaces$3 {
	export { iInitializableProxySol, iPriceFeedSol, iarwSupplySol, ierc20Sol$1 as ierc20Sol };
}
declare namespace libraries$1 {
	export { ownableSol$1 as ownableSol, sigLibSol, withSettlerSol };
}
declare namespace oracles {
	export { arwFeedSol, baseFunctionsConsumerSol, dataFeedAggregatorSol, dataFeedSol, functionsClientSol };
}
declare namespace proxy$2 {
	export { initializableProxySol };
}
declare namespace automationCompatibleInterfaceSol$1 {
	export { AutomationCompatibleInterface__factory };
}
declare namespace interfaces$4 {
	export { automationCompatibleInterfaceSol$1 as automationCompatibleInterfaceSol };
}
declare namespace automationBaseSol$1 {
	export { AutomationBase__factory };
}
declare namespace automationCompatibleSol$1 {
	export { AutomationCompatible__factory };
}
declare namespace functions$1 {
	export { v100$1 as v100 };
}
declare namespace iFunctionsRouterSol$1 {
	export { IFunctionsRouter__factory };
}
declare namespace iFunctionsClientSol$1 {
	export { IFunctionsClient__factory };
}
declare namespace libraries$2 {
	export { functionsRequestSol$1 as functionsRequestSol };
}
declare namespace functionsRequestSol$1 {
	export { FunctionsRequest__factory };
}
declare namespace interfaces$5 {
	export { iFunctionsClientSol$1 as iFunctionsClientSol, iFunctionsRouterSol$1 as iFunctionsRouterSol };
}
declare namespace v100$1 {
	export { interfaces$5 as interfaces, libraries$2 as libraries };
}
declare namespace automation$1 {
	export { automationBaseSol$1 as automationBaseSol, automationCompatibleSol$1 as automationCompatibleSol, interfaces$4 as interfaces };
}
declare namespace v08$1 {
	export { automation$1 as automation, functions$1 as functions };
}
declare namespace src$1 {
	export { v08$1 as v08 };
}
declare namespace contracts$2 {
	export { src$1 as src };
}
declare namespace contracts$3 {
	export { interfaces$7 as interfaces, libraries$3 as libraries, lockSol$1 as lockSol, oracles$1 as oracles, proxy$5 as proxy, tokens$1 as tokens };
}
declare namespace ownableSol$2 {
	export { Ownable__factory };
}
declare namespace utils$3 {
	export { addressSol$1 as addressSol, cryptography$1 as cryptography, errorsSol$1 as errorsSol, math$1 as math, noncesSol$1 as noncesSol, shortStringsSol$1 as shortStringsSol, stringsSol$1 as stringsSol };
}
declare namespace draftIerc6093Sol$1 {
	export { IERC1155Errors__factory, IERC20Errors__factory, IERC721Errors__factory };
}
declare namespace ierc1967Sol$1 {
	export { IERC1967__factory };
}
declare namespace ierc5267Sol$1 {
	export { IERC5267__factory };
}
declare namespace erc1967UtilsSol$1 {
	export { ERC1967Utils__factory };
}
declare namespace beacon$1 {
	export { iBeaconSol$1 as iBeaconSol };
}
declare namespace iBeaconSol$1 {
	export { IBeacon__factory };
}
declare namespace erc1967$1 {
	export { erc1967UtilsSol$1 as erc1967UtilsSol };
}
declare namespace proxySol$1 {
	export { Proxy__factory };
}
declare namespace ierc20PermitSol$1 {
	export { IERC20Permit__factory };
}
declare namespace erc20BurnableSol$1 {
	export { ERC20Burnable__factory };
}
declare namespace erc20PermitSol$1 {
	export { ERC20Permit__factory };
}
declare namespace ierc20MetadataSol$1 {
	export { IERC20Metadata__factory };
}
declare namespace extensions$1 {
	export { erc20BurnableSol$1 as erc20BurnableSol, erc20PermitSol$1 as erc20PermitSol, ierc20MetadataSol$1 as ierc20MetadataSol, ierc20PermitSol$1 as ierc20PermitSol };
}
declare namespace erc20Sol$1 {
	export { ERC20__factory };
}
declare namespace ierc20Sol$2 {
	export { IERC20__factory };
}
declare namespace erc20$1 {
	export { erc20Sol$1 as erc20Sol, extensions$1 as extensions, ierc20Sol$2 as ierc20Sol };
}
declare namespace eip712Sol$1 {
	export { EIP712__factory };
}
declare namespace ecdsaSol$1 {
	export { ECDSA__factory };
}
declare namespace math$1 {
	export { safeCastSol$1 as safeCastSol };
}
declare namespace safeCastSol$1 {
	export { SafeCast__factory };
}
declare namespace addressSol$1 {
	export { Address__factory };
}
declare namespace errorsSol$1 {
	export { Errors__factory };
}
declare namespace noncesSol$1 {
	export { Nonces__factory };
}
declare namespace shortStringsSol$1 {
	export { ShortStrings__factory };
}
declare namespace stringsSol$1 {
	export { Strings__factory };
}
declare namespace cryptography$1 {
	export { ecdsaSol$1 as ecdsaSol, eip712Sol$1 as eip712Sol };
}
declare namespace access$2 {
	export { ownableSol$2 as ownableSol };
}
declare namespace interfaces$6 {
	export { draftIerc6093Sol$1 as draftIerc6093Sol, ierc1967Sol$1 as ierc1967Sol, ierc5267Sol$1 as ierc5267Sol };
}
declare namespace proxy$3 {
	export { beacon$1 as beacon, erc1967$1 as erc1967, proxySol$1 as proxySol };
}
declare namespace token$1 {
	export { erc20$1 as erc20 };
}
declare namespace contractsUpgradeable$1 {
	export { access$3 as access, proxy$4 as proxy, utils$4 as utils };
}
declare namespace ownableUpgradeableSol$1 {
	export { OwnableUpgradeable__factory };
}
declare namespace utils$4 {
	export { contextUpgradeableSol$1 as contextUpgradeableSol };
}
declare namespace initializableSol$1 {
	export { Initializable__factory };
}
declare namespace utils$5 {
	export { initializableSol$1 as initializableSol };
}
declare namespace contextUpgradeableSol$1 {
	export { ContextUpgradeable__factory };
}
declare namespace access$3 {
	export { ownableUpgradeableSol$1 as ownableUpgradeableSol };
}
declare namespace proxy$4 {
	export { utils$5 as utils };
}
declare namespace contracts$4 {
	export { access$2 as access, interfaces$6 as interfaces, proxy$3 as proxy, token$1 as token, utils$3 as utils };
}
declare namespace iPriceFeedSol$1 {
	export { IPriceFeed__factory };
}
declare namespace iarwSupplySol$1 {
	export { IARWSupply__factory };
}
declare namespace ierc20Sol$3 {
	export { IERC20Exp__factory, IERC20Mintable__factory };
}
declare namespace iInitializableProxySol$1 {
	export { IInitializableProxy__factory };
}
declare namespace tokens$1 {
	export { erc20MockSol$1 as erc20MockSol };
}
declare namespace withSettlerSol$1 {
	export { WithSettler__factory };
}
declare namespace ownableSol$3 {
	export { Ownable__factory$1 as Ownable__factory };
}
declare namespace sigLibSol$1 {
	export { SigLib__factory };
}
declare namespace functionsClientSol$1 {
	export { FunctionsClient__factory };
}
declare namespace arwFeedSol$1 {
	export { ARWFeed__factory };
}
declare namespace baseFunctionsConsumerSol$1 {
	export { BaseFunctionsConsumer__factory };
}
declare namespace dataFeedSol$1 {
	export { DataFeed__factory };
}
declare namespace dataFeedAggregatorSol$1 {
	export { DataFeedAggregator__factory };
}
declare namespace initializableProxySol$1 {
	export { InitializableProxy__factory };
}
declare namespace erc20MockSol$1 {
	export { ERC20Mock__factory };
}
declare namespace lockSol$1 {
	export { Lock__factory };
}
declare namespace interfaces$7 {
	export { iInitializableProxySol$1 as iInitializableProxySol, iPriceFeedSol$1 as iPriceFeedSol, iarwSupplySol$1 as iarwSupplySol, ierc20Sol$3 as ierc20Sol };
}
declare namespace libraries$3 {
	export { ownableSol$3 as ownableSol, sigLibSol$1 as sigLibSol, withSettlerSol$1 as withSettlerSol };
}
declare namespace oracles$1 {
	export { arwFeedSol$1 as arwFeedSol, baseFunctionsConsumerSol$1 as baseFunctionsConsumerSol, dataFeedAggregatorSol$1 as dataFeedAggregatorSol, dataFeedSol$1 as dataFeedSol, functionsClientSol$1 as functionsClientSol };
}
declare namespace proxy$5 {
	export { initializableProxySol$1 as initializableProxySol };
}
declare namespace chainlink {
	export { contracts$2 as contracts };
}
declare namespace openzeppelin {
	export { contracts$4 as contracts, contractsUpgradeable$1 as contractsUpgradeable };
}
declare namespace chainlink$1 {
	export { contracts };
}
declare namespace openzeppelin$1 {
	export { contracts$1 as contracts, contractsUpgradeable };
}
declare namespace contracts$5 {
	export { interfaces$3 as interfaces, libraries$1 as libraries, lockSol, oracles, proxy$2 as proxy, tokens };
}
declare namespace contracts$6 {
	export { ARWFeed, ARWFeed__factory, Address, Address__factory, AutomationBase, AutomationBase__factory, AutomationCompatible, AutomationCompatibleInterface$1 as AutomationCompatibleInterface, AutomationCompatibleInterface__factory, AutomationCompatible__factory, BaseFunctionsConsumer, BaseFunctionsConsumer__factory, ContextUpgradeable, ContextUpgradeable__factory, DataFeed, DataFeedAggregator, DataFeedAggregator__factory, DataFeed__factory, ECDSA, ECDSA__factory, EIP712, EIP712__factory, ERC1967Utils, ERC1967Utils__factory, ERC20, ERC20Burnable, ERC20Burnable__factory, ERC20Mock, ERC20Mock__factory, ERC20Permit, ERC20Permit__factory, ERC20__factory, Errors, Errors__factory, FunctionsClient, FunctionsClient__factory, FunctionsRequest, FunctionsRequest__factory, IARWSupply, IARWSupply__factory, IBeacon, IBeacon__factory, IERC1155Errors, IERC1155Errors__factory, IERC1967, IERC1967__factory, IERC20, IERC20Errors, IERC20Errors__factory, IERC20Exp, IERC20Exp__factory, IERC20Metadata, IERC20Metadata__factory, IERC20Mintable, IERC20Mintable__factory, IERC20Permit, IERC20Permit__factory, IERC20__factory, IERC5267, IERC5267__factory, IERC721Errors, IERC721Errors__factory, IFunctionsClient, IFunctionsClient__factory, IFunctionsRouter, IFunctionsRouter__factory, IInitializableProxy, IInitializableProxy__factory, IPriceFeed, IPriceFeed__factory, Initializable, InitializableProxy, InitializableProxy__factory, Initializable__factory, Lock$1 as Lock, Lock__factory, Nonces, Nonces__factory, Ownable$1 as Ownable, OwnableUpgradeable, OwnableUpgradeable__factory, Ownable__factory$1 as Ownable__factory, Proxy$1 as Proxy, Proxy__factory, SafeCast, SafeCast__factory, ShortStrings, ShortStrings__factory, SigLib, SigLib__factory, Strings, Strings__factory, WithSettler, WithSettler__factory, chainlink$1 as chainlink, contracts$5 as contracts, factories, openzeppelin$1 as openzeppelin };
}

export {
	contracts$6 as contracts,
};

export {};
