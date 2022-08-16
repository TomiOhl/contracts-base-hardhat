# Greeter

A simple contract able to greet the user.

## Variables

### owner

```solidity
address owner
```

The address of the owner.

## Functions

### constructor

```solidity
constructor(
    string _greeting
) 
```

Sets the initial greeting.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_greeting` | string | The text of the initial greeting. |

### greet

```solidity
function greet() public returns (string greetingText)
```

Greets the user.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `greetingText` | string | The text of the greeting. |
### setGreeting

```solidity
function setGreeting(
    string _greeting
) external
```

Sets the text of the greeting.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_greeting` | string | The new text of the greeting. |

## Modifiers

### restricted

```solidity
modifier restricted(address allowed)
```

Restricts the callers of functions.

| Name | Type | Description |
| ---- | ---- | ----------- |
| allowed | address | The address allowed to call the function the modifier is used on. |

## Events

### GreetingUpdated

```solidity
event GreetingUpdated(
    string greeting
)
```

Event emitted when the greeting changes.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `greeting` | string | The new text of the greeting. |

## Custom errors

### NameTooShort

```solidity
error NameTooShort(uint256 length, uint256 required)
```

Error thrown when the name is too short.

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | uint256 | The attempted length. |
| required | uint256 | The required minimum length. |

### Unauthorized

```solidity
error Unauthorized(address sender, address allowed)
```

Error thrown when a restricted function is attempted to be called from an unauthorized address.

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The address of the sender. |
| allowed | address | The address allowed to call the function. |

