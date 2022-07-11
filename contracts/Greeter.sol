//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title A simple contract able to greet the user.
contract Greeter {
    /// @notice The address of the owner.
    address public owner;

    /// @notice Just the variable that stores the greeting.
    string private greeting;

    /// @notice Error thrown when the name is too short.
    /// @param length The attempted length.
    /// @param required The required minimum length.
    error NameTooShort(uint256 length, uint256 required);

    /// @notice Error thrown when a restricted function is attempted to be called from an unauthorized address.
    /// @param sender The address of the sender.
    /// @param allowed The address allowed to call the function.
    error Unauthorized(address sender, address allowed);

    /// @notice Event emitted when the greeting changes.
    /// @param greeting The new text of the greeting.
    event GreetingUpdated(string greeting);

    /// @notice Restricts the callers of functions.
    /// @param allowed The address allowed to call the function the modifier is used on.
    modifier restricted(address allowed) {
        if (msg.sender != allowed) revert Unauthorized(msg.sender, allowed);
        _;
    }

    /// @notice Sets the initial greeting.
    /// @param _greeting The text of the initial greeting.
    constructor(string memory _greeting) {
        greeting = _greeting;
        owner = msg.sender;
    }

    /// @notice Greets the user.
    /// @return greetingText The text of the greeting.
    function greet() public view returns (string memory greetingText) {
        return greeting;
    }

    /// @notice Sets the text of the greeting.
    /// @param _greeting The new text of the greeting.
    function setGreeting(string calldata _greeting) external restricted(owner) {
        uint256 stringLength = bytes(_greeting).length;
        if (stringLength < 4) revert NameTooShort(stringLength, 4);
        greeting = _greeting;
        emit GreetingUpdated(_greeting);
    }
}
