/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  42: {
    Dispas: {
      address: "0xC78871644B7007A3b19CD6147b4d444AE7C18987",
      abi: [
        {
          inputs: [],
          name: "Dispas__InsufficientValue",
          type: "error",
        },
        {
          inputs: [
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
          name: "Dispas__TransferFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "Dispas__ZeroAddress",
          type: "error",
        },
        {
          inputs: [],
          name: "Dispas__ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalAmount",
              type: "uint256",
            },
          ],
          name: "FundsDistributed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "PaymentSent",
          type: "event",
        },
        {
          inputs: [
            {
              components: [
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
              internalType: "struct DataTypes.Payment[]",
              name: "payments",
              type: "tuple[]",
            },
          ],
          name: "distributeFunds",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {
        distributeFunds: "contracts/interfaces/IDispas.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
