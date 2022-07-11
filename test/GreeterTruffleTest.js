const Greeter = artifacts.require("Greeter");

// Traditional Truffle test
contract("Greeter - Truffle test", (accounts) => {
  beforeEach("deploy contract", async function () {
    this.greeter = await Greeter.new("Hello, world!");
  });

  it("Should return the new greeting once it's changed", async function () {
    assert.equal(await this.greeter.greet(), "Hello, world!");

    await this.greeter.setGreeting("Hola, mundo!");

    assert.equal(await this.greeter.greet(), "Hola, mundo!");
  });

  xit("should revert if the greeting is too short", async function () {
    const greeting = "Hey";
    expect(this.greeter.setGreeting(greeting))
      .to.be.revertedWithCustomError(this.greeter, "NameTooShort")
      .withArgs("3", "4");
  });

  it("should emit a GreetingUpdated event", async function () {
    const greeting = "Hey, wassup";
    expect(this.greeter.setGreeting(greeting))
      .to.emit(this.greeter, "GreetingUpdated")
      .withArgs(greeting);
  });
});
