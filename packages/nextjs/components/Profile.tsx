import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ProfilePlaceholder from "./ProfilePlaceholder";
import { BlockieAvatar } from "./scaffold-eth";
import { ERC725, ERC725JSONSchema } from "@erc725/erc725.js";
import lsp3ProfileSchema from "@erc725/erc725.js/schemas/LSP3ProfileMetadata.json";
import { isAddress } from "viem";
import { Profile as ProfileType, luksoNetworks } from "~~/contexts/UniversalProfileContext";
import { getAddressColor } from "~~/utils/scaffold-eth/getAddressColor";

type Props = {
  address: `0x${string}`;
};

export default function Profile({ address }: Props) {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    setProfile(null);
    if (!isAddress(address)) return;
    (async () => {
      try {
        const network = luksoNetworks[0];

        // Instanciate the LSP3-based smart contract
        const erc725js = new ERC725(lsp3ProfileSchema as ERC725JSONSchema[], address, network.rpcUrl, {
          ipfsGateway: network.ipfsGateway,
        });

        const profileMetadata = await erc725js.fetchData("LSP3Profile");

        if (
          profileMetadata.value &&
          typeof profileMetadata.value === "object" &&
          "LSP3Profile" in profileMetadata.value
        ) {
          setProfile(profileMetadata.value.LSP3Profile);
        }
      } catch (error) {
        console.error("Cannot fetch profile data", error);
      }
    })();
  }, [address]);

  const renderProfileCover = useCallback(() => {
    if (!isAddress(address)) return null;

    if (!profile?.backgroundImage || profile.backgroundImage.length === 0) {
      return <div style={{ backgroundColor: getAddressColor(address) }} className="w-full h-full rounded-t-3xl" />;
    } else {
      return (
        <Image
          src={profile.backgroundImage[0].url.replace("ipfs://", "https://api.universalprofile.cloud/ipfs/")}
          alt="Profile Cover"
          fill
          className="object-cover rounded-t-3xl"
        />
      );
    }
  }, [address, profile]);

  const renderProfileImage = useCallback(() => {
    if (isAddress(address)) {
      if (!profile?.profileImage || profile.profileImage.length === 0) {
        return (
          <BlockieAvatar
            address={address}
            // @ts-ignore
            size={"100%"}
          />
        );
      } else {
        return (
          <div
            className="relative w-full aspect-square rounded-full object-cover"
            style={{ backgroundColor: getAddressColor(address) }}
          >
            <Image
              src={profile.profileImage[0].url.replace("ipfs://", "https://api.universalprofile.cloud/ipfs/")}
              alt="Profile Image"
              fill
              className="rounded-full"
            />
          </div>
        );
      }
    } else {
      return <ProfilePlaceholder />;
    }
  }, [address, profile]);

  return (
    <div className="bg-cyan-300 w-full h-28 rounded-t-3xl relative flex flex-col items-center">
      {renderProfileCover()}

      {/* Profile image */}
      <div className="w-[6rem] aspect-square rounded-full border-[8px] border-white absolute top-16">
        {renderProfileImage()}
      </div>
    </div>
  );
}
