// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TestEventCost {
    event Event1(bytes32 arg1);
    event Event2(bytes32 arg1, bytes32 arg2);
    event Event3(string arg1);
    event Event4(string arg1, string arg2);

    function emitEvent1(bytes32 arg1) public {
        emit Event1(arg1);
    }

    function emitEvent2(bytes32 arg1, bytes32 arg2) public {
        emit Event2(arg1, arg2);
    }

    function emitEvent3(string calldata arg1) public {
        emit Event3(arg1);
    }

    function emitEvent4(string calldata arg1, string calldata arg2) public {
        emit Event4(arg1, arg2);
    }
}
