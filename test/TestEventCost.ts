import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("TestEventCost", function () {
  async function deployOneYearLockFixture() {
    const bytes32Value = '0x7465737400000000000000000000000000000000000000000000000000000000';
    const stringValue = 'test';
    const [owner, otherAccount] = await ethers.getSigners();

    const TestEventCost = await ethers.getContractFactory("TestEventCost");
    const contract = await TestEventCost.deploy();

    return { contract, owner, otherAccount, bytes32Value, stringValue };
  }

  describe("Test event cost", function () {
    it("Event1", async function () {
      const { contract, bytes32Value } = await loadFixture(deployOneYearLockFixture);
      await contract.emitEvent1(bytes32Value);
    });

    it("Event2", async function () {
      const { contract, bytes32Value } = await loadFixture(deployOneYearLockFixture);
      await contract.emitEvent2(bytes32Value, bytes32Value);
    });

    it("Event3", async function () {
      const { contract, stringValue } = await loadFixture(deployOneYearLockFixture);
      await contract.emitEvent3(stringValue);
    });

    it("Event4", async function () {
      const { contract, stringValue } = await loadFixture(deployOneYearLockFixture);
      await contract.emitEvent4(stringValue, stringValue);
    });
  });
});
