import React, { useState } from "react";
import Image from "next/image";
import Payment, { PaymentType } from "./Payment";
import Profile from "./Profile";
import { ProfileInput } from "./ProfileInput";
import ProfilePlaceholder from "./ProfilePlaceholder";
import AssetsModal from "./modals/AssetsModal";
import { Button, Input } from "@chakra-ui/react";
import { FaChevronDown, FaDollarSign } from "react-icons/fa";
import { formatEther, parseEther } from "viem";
import { useAccount, useSendTransaction, useWriteContract } from "wagmi";
import { DialogContent, DialogRoot, DialogTrigger } from "~~/components/ui/dialog";
import { useDeployedContractInfo, useTransactor, useWatchBalance } from "~~/hooks/scaffold-eth";
import { useCryptoPrice } from "~~/hooks/scaffold-eth/useCryptoPrice";
import { notification } from "~~/utils/scaffold-eth";

export default function Transfer() {
  const [totalNativeValue, setTotalNativeValue] = useState("");
  const [totalDollarValue, setTotalDollarValue] = useState("");
  const [change, setChange] = useState("");
  const [isDollar, setIsDollar] = useState(false); // Toggle USD/LYX
  const [isSending, setIsSending] = useState(false);

  const [payments, setPayments] = useState<PaymentType[]>([]);

  const account = useAccount();
  const { data: balance, refetch: refetchBalance } = useWatchBalance({ address: account.address });
  const {
    price: nativeCurrencyPrice,
    loading: isFetchingNativeCurrency,
    fetchPrice: fetchNativeCurrency,
  } = useCryptoPrice();

  const formattedBalance = balance ? Number(formatEther(balance.value)) : 0;

  const errorStyle = { color: "red" };

  const switchCurrency = () => {
    if (!nativeCurrencyPrice) {
      const notificationId = notification.loading("Loading exchange rate");

      setTimeout(() => {
        notification.remove(notificationId);
      }, 3000);

      if (!isFetchingNativeCurrency) {
        fetchNativeCurrency();
      }

      return;
    }

    setIsDollar(prev => !prev);
  };

  // Handle input conversion & enforce numeric values
  const handleInput = (input: string) => {
    if (input.trim() === "") {
      setTotalNativeValue("");
      setTotalDollarValue("");
      return;
    }

    // Ensure only valid floating numbers are parsed
    const numericValue = input.replace(/[^0-9.]/g, ""); // Remove non-numeric characters except `.`
    if (!/^\d*\.?\d*$/.test(numericValue) || numericValue == "") return; // Ensure valid decimal format

    if (!nativeCurrencyPrice) {
      setTotalNativeValue(numericValue);
      return;
    }

    if (isDollar) {
      setTotalDollarValue(numericValue);
      setTotalNativeValue((parseFloat(numericValue) / nativeCurrencyPrice).toString());
    } else {
      setTotalNativeValue(numericValue);
      setTotalDollarValue((parseFloat(numericValue) * nativeCurrencyPrice).toFixed(2));
    }
  };

  const displayTotalValue = isDollar ? totalDollarValue : totalNativeValue;
  const displayConversion = isDollar ? totalNativeValue : totalDollarValue;
  const isBalanceInsufficient = Number(totalNativeValue) > formattedBalance;

  const handleRecipientSelection = (recipient: `0x${string}`): boolean => {
    // Check if the recipient is already in the list
    if (payments.some(payment => payment.recipient.toLowerCase() === recipient.toLowerCase())) {
      notification.error("Recipient already added");
      return false;
    }

    // Add recipient with an initial amount of 0
    // @ts-ignore
    setPayments(prevPayments => [...prevPayments, { recipient, amount: "" }]);

    return true;
  };

  const removePayment = (recipient: `0x${string}`) => {
    const payment = payments.find(payment => payment.recipient.toLowerCase() === recipient.toLowerCase());

    if (!payment) return;
    // add the difference between the old and new amount
    const newTotal = parseEther(totalNativeValue) - parseEther(payment.amount);

    setTotalNativeValue(formatEther(newTotal));
    if (nativeCurrencyPrice) {
      setTotalDollarValue((parseFloat(formatEther(newTotal)) * nativeCurrencyPrice).toFixed(2));
    }

    setPayments(prevPayments =>
      prevPayments.filter(payment => payment.recipient.toLowerCase() !== recipient.toLowerCase()),
    );
  };

  const addRecipientAmount = (recipient: `0x${string}`, amount: string) => {
    const payment = payments.find(payment => payment.recipient.toLowerCase() === recipient.toLowerCase());

    if (!payment) return;
    // add the difference between the old and new amount
    const newTotal = (parseEther(totalNativeValue) || 0n) + parseEther(amount) - parseEther(payment.amount);

    if (newTotal === 0n) {
      setTotalNativeValue("");
    } else {
      setTotalNativeValue(formatEther(newTotal));
    }

    if (nativeCurrencyPrice) {
      setTotalDollarValue((parseFloat(formatEther(newTotal)) * nativeCurrencyPrice).toFixed(2));
    }
    // update amount
    setPayments(prevPayments =>
      prevPayments.map(payment =>
        payment.recipient.toLowerCase() === recipient.toLowerCase() ? { ...payment, amount } : payment,
      ),
    );
  };

  const sumPayments = (): bigint => payments.reduce((sum, p) => sum + (parseEther(p.amount) || -1n), 0n);

  const isSplit = (): boolean =>
    totalNativeValue === "" || payments.length === 0 || parseEther(totalNativeValue) === sumPayments();

  const split = () => {
    if (payments.length === 0 || Number(totalNativeValue) === 0) return;

    const total = parseEther(totalNativeValue);
    const share = total / BigInt(payments.length);
    const newTotal = share * BigInt(payments.length);
    const changeAmount = total - newTotal;

    setPayments(prevPayments =>
      prevPayments.map(payment => ({
        ...payment,
        amount: formatEther(share),
      })),
    );

    setTotalNativeValue(formatEther(newTotal));
    setChange(formatEther(changeAmount));

    if (nativeCurrencyPrice) {
      setTotalDollarValue((Number(formatEther(newTotal)) * nativeCurrencyPrice).toFixed(2));
    }

    notification.info("Your funds have been split equally between recipients");

    if (changeAmount > 0n) {
      notification.warning(`You've got ${changeAmount} WEI in change. You can gift it to someone`);
    }
  };

  const giftChange = (_recipient: `0x${string}`) => {
    if (!change || Number(change) === 0) return;

    const recipient = payments.find(p => p.recipient === _recipient);

    const newAmount = parseEther(recipient?.amount || "0") + parseEther(change);
    addRecipientAmount(_recipient, formatEther(newAmount));
    setChange("");
  };

  const { data: dispas } = useDeployedContractInfo("Dispas");
  const { writeContractAsync } = useWriteContract();
  const { sendTransactionAsync } = useSendTransaction();
  const writeTx = useTransactor();

  const send = async () => {
    if (!account.isConnected) {
      notification.info("Please connect your wallet");
      return;
    }
    if (totalNativeValue === "" || Number(totalNativeValue) === 0) {
      notification.error("Please input a valid total amount!");
      return;
    }

    if (!balance || balance.value < parseEther(totalNativeValue)) {
      notification.error("Insufficient balance");
      return;
    }

    // Ensure all payments have valid amounts
    const hasInvalidPayment = payments.some(payment => !payment.amount || Number(payment.amount) <= 0);
    if (hasInvalidPayment) {
      notification.error("All recipients must have a valid amount greater than zero!");
      return;
    }

    // Ensure total of payments matches the inputted amount
    if (!isSplit()) {
      notification.error("Total amount does not match sum of payments!");
      return;
    }

    try {
      setIsSending(true);

      const _payments = payments.map(payment => ({ ...payment, amount: parseEther(payment.amount) }));

      let tx;
      if (_payments.length === 1) {
        tx = () =>
          sendTransactionAsync({
            to: _payments[0].recipient,
            value: _payments[0].amount,
          });
      } else {
        if (!dispas) {
          notification.error("Loading resources...");
          return;
        }
        tx = () =>
          writeContractAsync({
            abi: dispas.abi,
            address: dispas.address,
            functionName: "distributeFunds",
            args: [_payments],
            value: sumPayments(),
          });
      }

      const txHash = await writeTx(tx);

      if (!txHash) throw new Error("Transfer failed!");

      console.log("Transaction Hash: ", txHash);

      notification.success("Transfer successful! 🚀");

      setTotalNativeValue("");
      setTotalDollarValue("");
      setPayments([]);
    } catch (error) {
      console.error("Failed to send: ", error);
      notification.error("Transfer failed. Check logs to see more details!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full max-w-[450px] mx-4 rounded-3xl flex flex-col">
      <Profile address={account.address as `0x${string}`} />

      <div className="rounded-xl h-24 w-[90%] self-center mt-14 mb-6 flex">
        <div className="border-l-2 border-y-2 border-gray-100 p-4 flex items-center justify-center">
          <Button
            onClick={switchCurrency}
            className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-10 aspect-square flex justify-center items-center rounded-full p-2 transition-transform duration-200 ease-in-out group hover:scale-110"
          >
            {isDollar ? (
              <FaDollarSign className="text-green-400 group-hover:scale-110 transition-transform duration-200 ease-in-out" />
            ) : (
              <div className="relative w-6 aspect-square group-hover:scale-110 transition-transform duration-200 ease-in-out">
                <Image src="/images/lukso_logo.png" alt="LYX" fill className="rounded-full" />
              </div>
            )}
          </Button>
        </div>

        <div className="w-full h-full">
          <DialogRoot placement="center" motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
              <div className="border-2 border-gray-100 rounded-tr-xl w-full h-2/4 flex justify-between items-center px-4 duration-200 hover:border-gray-400 cursor-pointer">
                <strong className="font-bold text-sm">LUKSO</strong>

                <FaChevronDown className="text-gray-400" />
              </div>
            </DialogTrigger>

            <DialogContent className="w-full max-w-[350px] rounded-xl">
              <AssetsModal />
            </DialogContent>
          </DialogRoot>
          <div className="w-full h-2/4 flex items-center">
            <Input
              placeholder="0"
              className="h-full outline-none px-4 border-l-2 border-b-2 rounded-none border-gray-100 "
              value={displayTotalValue}
              onChange={e => handleInput(e.target.value)}
              required
            />

            <Button
              onClick={split}
              className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 border hover:border-gray-700 h-full w-2/4 aspect-square flex justify-center items-center px-4 py-2 duration-200 rounded-br-xl"
            >
              Split funds
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mx-[5%]">
        <strong
          className="text-md font-semibold italic text-gray-500"
          style={
            isBalanceInsufficient
              ? errorStyle
              : {
                  opacity: totalNativeValue && totalDollarValue ? 1 : 0,
                }
          }
        >
          ~{!isDollar && "$"}
          {displayConversion} {isDollar && "LYX"}
        </strong>

        {change && Number(change) > 0 && (
          <p className="text-black">
            Change: <strong className="text-green-500 font-bold">{parseEther(change).toString()} WEI</strong>
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center py-4 bg-gray-100 shadow-inner rounded-b-3xl">
        <div
          id="payments"
          className="flex flex-1 max-w-full items-center overflow-x-auto space-x-2 py-4 px-2 no-scrollbar"
        >
          {payments.length === 0 ? (
            <div className="w-[4.3rem]">
              <ProfilePlaceholder showName />
            </div>
          ) : (
            payments.map(payment => (
              <Payment
                key={payment.recipient}
                payment={payment}
                nativeCurrencyPrice={nativeCurrencyPrice}
                isFetchingNativeCurrency={isFetchingNativeCurrency}
                onClose={removePayment}
                onChange={addRecipientAmount}
                fetchNativeCurrency={fetchNativeCurrency}
                change={change}
                onGiftChange={giftChange}
              />
            ))
          )}
        </div>

        <ProfileInput onSelectAddress={handleRecipientSelection} />

        <button
          onClick={send}
          className="bg-gray-700 text-white hover:bg-white px-8 py-2 hover:text-gray-700 border hover:border-gray-700 rounded-xl font-light duration-200 mt-4 text-sm h-12 w-[85%] flex justify-center items-center"
          disabled={isSending}
        >
          {isSending ? (
            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
          ) : (
            <span className="font-extrabold">{payments.length > 1 ? "Distribute" : "Send"}</span>
          )}
        </button>
      </div>
    </div>
  );
}
