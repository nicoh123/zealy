pragma solidity ^0.7.0;

// Defines a contract named `Zealy Contract`.
contract ZealyContract {

   // Declares a state variable `message` of type `string`, in which the user can save a message later.
   string public message;

   // Starting with the constructor, which is later used to create the contract. Here is the place where the first message is defined.
   constructor(string memory initMessage) {

      // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable. The message is saved
      // in the previously defined variable called `message`.
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable. With that contract you are able to update
   // the message, if necessary.
   function update(string memory newMessage) public {
      message = newMessage; 
   }
}

