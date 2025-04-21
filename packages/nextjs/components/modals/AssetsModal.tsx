import React from "react";
import Image from "next/image";
import { Dialog } from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useWatchBalance } from "~~/hooks/scaffold-eth";

type Props = {};

export default function AssetsModal({}: Props) {
  const account = useAccount();
  const { data: balance } = useWatchBalance({ address: account.address });
  return (
    <div className="p-4 flex flex-col max-h-[80vh] relative">
      <header className="flex justify-between items-center pb-2">
        <Dialog.Title className="text-lg font-bold">Select an asset to send</Dialog.Title>

        <Dialog.CloseTrigger asChild>
          <IoMdClose className="text-2xl text-gray-500 cursor-pointer mt-[-4px]" />
        </Dialog.CloseTrigger>
      </header>

      <Dialog.CloseTrigger asChild>
        <div className="flex justify-between items-center p-2 border-2 border-gray-100 rounded-xl bg-gray-100 hover:border-gray-300 cursor-pointer duration-200">
          <div className="flex items-center gap-2">
            <div className="relative aspect-square bg-white w-12 rounded-full flex justify-center items-center">
              <Image src="/images/lukso_logo.png" alt="LYX" width={30} height={30} className="rounded-full" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-extrabold">
                LUKSO <span className="text-gray-400 text-xs font-bold">LYX</span>
              </h1>
              <span className="text-xs font-bold mt-[-5px]">Owns {balance ? formatEther(balance?.value) : null}</span>
            </div>
          </div>

          <FaCircleCheck className="text-xl text-green-500" />
        </div>
      </Dialog.CloseTrigger>
    </div>
  );
}
