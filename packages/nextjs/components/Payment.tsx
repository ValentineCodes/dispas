import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Profile from "./Profile";
import { toaster } from "./ui/toaster";
import { Button, Input } from "@chakra-ui/react";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";

export interface PaymentType {
  recipient: `0x${string}`;
  amount: string;
}

type Props = {
  payment: PaymentType;
  nativeCurrencyPrice: number | null;
  isFetchingNativeCurrency: boolean;
  onClose: (recipient: `0x${string}`) => void;
  onChange: (recipient: `0x${string}`, amount: string) => void;
  fetchNativeCurrency: () => void;
  change?: string;
  onGiftChange?: (recipient: `0x${string}`) => void;
};

export default function Payment({
  payment,
  nativeCurrencyPrice,
  isFetchingNativeCurrency,
  onClose,
  onChange,
  fetchNativeCurrency,
  change,
  onGiftChange,
}: Props) {
  const [showInput, setShowInput] = useState(true);
  const [nativeValue, setNativeValue] = useState(payment.amount);
  const [dollarValue, setDollarValue] = useState("");
  const [isDollar, setIsDollar] = useState(false);

  const handleInput = (input: string) => {
    if (input.trim() == "") {
      setNativeValue("");
      setDollarValue("");
      return;
    }
    // Ensure only valid floating numbers are parsed
    const numericValue = input.replace(/[^0-9.]/g, ""); // Remove non-numeric characters except `.`
    if (!/^\d*\.?\d*$/.test(numericValue) || numericValue == "") return; // Ensure valid decimal format

    if (!nativeCurrencyPrice) {
      setNativeValue(numericValue);
      return;
    }

    if (isDollar) {
      setDollarValue(numericValue);
      setNativeValue((parseFloat(numericValue) / nativeCurrencyPrice).toString());
    } else {
      setNativeValue(numericValue);
      setDollarValue((parseFloat(numericValue) * nativeCurrencyPrice).toFixed(2));
    }
  };

  const updateAmount = () => {
    if (!nativeValue || Number(nativeValue) === 0) {
      toaster.create({
        title: "Please input an amount",
        type: "warning",
      });
      return;
    }
    onChange(payment.recipient, nativeValue);
    setShowInput(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateAmount();
    }
  };

  const switchCurrency = () => {
    if (!nativeCurrencyPrice) {
      toaster.create({
        title: "Loading exchange rate",
        type: "warning",
      });

      if (!isFetchingNativeCurrency) {
        fetchNativeCurrency();
      }

      return;
    }

    setIsDollar(prev => !prev);
  };

  const displayValue = isDollar ? dollarValue : nativeValue;
  const displayConversion = isDollar ? nativeValue : dollarValue;

  const currencyToggle = useMemo(() => {
    return (
      <Button onClick={switchCurrency} className="transition-transform duration-200 ease-in-out hover:scale-110">
        {isDollar ? (
          <span className="text-sm text-green-500 transition-transform duration-200 ease-in-out hover:scale-110">
            $
          </span>
        ) : (
          <div className="relative w-4 aspect-square transition-transform duration-200 ease-in-out hover:scale-110">
            <Image src="/images/lukso_logo.png" alt="LYX" fill />
          </div>
        )}
      </Button>
    );
  }, [isDollar]);

  useEffect(() => {
    if (payment.amount !== "") {
      setShowInput(false);
      setNativeValue(payment.amount);

      if (!nativeCurrencyPrice) return;
      setDollarValue((parseFloat(payment.amount) * nativeCurrencyPrice).toFixed(2));
    }
  }, [payment.amount, nativeCurrencyPrice]);

  return (
    <div className="flex flex-col items-center gap-1 relative">
      <IoIosCloseCircleOutline
        className="absolute top-[-5px] right-5 text-lg cursor-pointer duration-200 text-gray-600 hover:text-red-400"
        onClick={() => onClose(payment.recipient)}
      />
      <Profile address={payment.recipient} showName />

      {showInput ? (
        <div className="flex flex-col items-center">
          <div className="flex items-center border border-gray-200 bg-white rounded-lg">
            {currencyToggle}
            <Input
              placeholder="0"
              className="h-8 w-24 outline-none text-black"
              value={displayValue}
              onChange={e => handleInput(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
            <Button onClick={updateAmount} className="transition-transform duration-200 ease-in-out hover:scale-110">
              <GrStatusGood className="w-4 aspect-square text-green-500 transition-transform duration-200 ease-in-out hover:scale-110" />
            </Button>
          </div>

          <strong
            className="text-xs text-center font-semibold italic text-gray-500 max-w-[100px]"
            style={{
              opacity: nativeValue && dollarValue ? 1 : 0,
            }}
          >
            ~{!isDollar && "$"}
            {displayConversion} {isDollar && "LYX"}
          </strong>
        </div>
      ) : (
        <span
          className="text-sm text-black hover:text-purple-400 hover:font-bold duration-200 text-center cursor-pointer max-w-[100px]"
          onClick={() => setShowInput(true)}
        >
          {payment.amount} LYX
        </span>
      )}

      {change && Number(change) > 0 && onGiftChange && (
        <button
          onClick={() => onGiftChange(payment.recipient)}
          className="bg-gray-500 text-white hover:bg-white px-4 py-2 hover:text-gray-500 border hover:border-gray-500 rounded-lg font-light duration-200 mt-4 text-sm flex justify-center items-center"
        >
          Gift change
        </button>
      )}
    </div>
  );
}
