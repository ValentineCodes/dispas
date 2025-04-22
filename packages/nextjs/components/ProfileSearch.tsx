/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */
"use client";

import { useEffect, useState } from "react";
import SearchProfile from "./SearchProfile";
import { InputGroup } from "./ui/input-group";
import { toaster } from "./ui/toaster";
import { Input } from "@chakra-ui/react";
import { gql, request } from "graphql-request";
import { CiSearch } from "react-icons/ci";
import { useDebounceValue } from "usehooks-ts";
import { isAddress } from "viem";

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

/**
 * ProfileSearch Component
 *
 * A searchable interface for LUKSO Universal Profiles that allows users to search and select
 * blockchain addresses associated with profiles.
 *
 * Features:
 * - Auto-search triggers when exactly 3 characters are entered
 * - Manual search available via Enter key
 * - Displays profile images with blockies fallback
 * - Shows profile name, full name, and address in results
 *
 * @component
 * @param {Object} props
 * @param {(address: `0x${string}`) => void} props.onSelectAddress - Callback function triggered when a profile is selected
 */

const ENVIO_MAINNET_URL = "https://envio.lukso-mainnet.universal.tech/v1/graphql";

const gqlQuery = gql`
  query MyQuery($id: String!) {
    search_profiles(args: { search: $id }) {
      name
      fullName
      id
      profileImages(where: { error: { _is_null: true } }, order_by: { width: asc }) {
        width
        src
        url
        verified
      }
    }
  }
`;

type Profile = {
  name?: string;
  id: string;
  fullName?: string;
  profileImages?: {
    width: number;
    src: string;
    url: string;
    verified: boolean;
  }[];
};

type SearchProps = {
  onSelectAddress: (address: `0x${string}`) => boolean;
};

export function ProfileSearch({ onSelectAddress }: SearchProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useDebounceValue("", 300);
  const [results, setResults] = useState<Profile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = async () => {
    if (debouncedQuery === "" || query === "") {
      setResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const envioUrl = ENVIO_MAINNET_URL;
      const { search_profiles: data } = (await request(envioUrl, gqlQuery, { id: debouncedQuery })) as {
        search_profiles: Profile[];
      };
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectProfile = (address: `0x${string}`) => {
    if (!isAddress(address)) {
      toaster.create({
        title: "Invalid address",
        type: "error",
      });
      return;
    }

    const isSuccessful = onSelectAddress(address);

    if (isSuccessful) {
      setShowDropdown(false);
      setQuery("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (results.length === 1) {
        handleSelectProfile(results[0].id as `0x${string}`);
      } else {
        handleSelectProfile(query as `0x${string}`);
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (!value) {
      setShowDropdown(false);
    } else {
      if (!isSearching) {
        setIsSearching(true);
      }

      if (!showDropdown) {
        setShowDropdown(true);
      }
    }
    setQuery(value);
    setDebouncedQuery(value);
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedQuery, query]);

  return (
    <div className="w-full flex justify-center relative">
      <InputGroup
        endElement={<CiSearch className="text-2xl text-black" />}
        className="border border-gray-200 bg-white w-[85%] rounded-xl mt-4"
      >
        <Input
          type="text"
          placeholder="Enter name or address of recipient"
          className="pl-4 text-sm text-black rounded-xl h-12"
          value={query}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
      </InputGroup>

      {showDropdown && (
        <div className="absolute top-[4.7rem] flex flex-col overflow-y-auto space-y-1 px-2 py-1 h-[3.5rem] w-[85%] bg-white rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          {isSearching ? (
            <div className="flex justify-center items-center py-4">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
            </div>
          ) : results.length > 0 ? (
            results.map(result => (
              <SearchProfile key={result.id} address={result.id as `0x${string}`} onSelect={handleSelectProfile} />
            ))
          ) : (
            <div className="text-gray-400 text-center py-2">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
