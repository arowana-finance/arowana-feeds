// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IARWSupply {
    function excludedAddresses() external view returns (address[] memory);
    function excludedSupply() external view returns (uint256);
    function circulatingSupply() external view returns (uint256);
}
