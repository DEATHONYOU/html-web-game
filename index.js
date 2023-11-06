/**
 * Represents a class with different stats.
 */
class CharacterClass {
  /**
   * Constructor for the CharacterClass class.
   *
   * @param {string} name - The name of the class.
   * @param {number} strength - The strength stat of the class.
   * @param {number} agility - The agility stat of the class.
   * @param {number} intelligence - The intelligence stat of the class.
   */
  constructor(name, strength, agility, intelligence) {
      /** @private */
      this.name = name;

      /** @private */
      this.strength = strength;

      /** @private */
      this.agility = agility;

      /** @private */
      this.intelligence = intelligence;
  }

  /**
   * Getter method to retrieve the name of the class.
   *
   * @returns {string} The name of the class.
   */
  getName() {
      return this.name;
  }

  /**
   * Getter method to retrieve the strength stat of the class.
   *
   * @returns {number} The strength stat of the class.
   */
  getStrength() {
      return this.strength;
  }

  /**
   * Getter method to retrieve the agility stat of the class.
   *
   * @returns {number} The agility stat of the class.
   */
  getAgility() {
      return this.agility;
  }

  /**
   * Getter method to retrieve the intelligence stat of the class.
   *
   * @returns {number} The intelligence stat of the class.
   */
  getIntelligence() {
      return this.intelligence;
  }
}

/**
* Function to ask the user to pick a class with different stats.
*
* @returns {CharacterClass} The selected character class.
*/
function pickCharacterClass() {
  // Example classes with different stats
  const warrior = new CharacterClass("Warrior", 10, 5, 2);
  const rogue = new CharacterClass("Rogue", 5, 10, 3);
  const mage = new CharacterClass("Mage", 2, 3, 10);

  // Prompt the user to pick a class
  const classChoice = prompt("Please pick a class: Warrior, Rogue, or Mage");

  // Validate the user's choice and return the corresponding class
  switch (classChoice.toLowerCase()) {
      case "warrior":
          return warrior;
      case "rogue":
          return rogue;
      case "mage":
          return mage;
      default:
          throw new Error("Invalid class choice. Please pick Warrior, Rogue, or Mage.");
  }
}

// Usage Example for pickCharacterClass

try {
  const selectedClass = pickCharacterClass();
  console.log(`You have selected the ${selectedClass.getName()} class.`);
  console.log(`Stats: Strength - ${selectedClass.getStrength()}, Agility - ${selectedClass.getAgility()}, Intelligence - ${selectedClass.getIntelligence()}`);
} catch (error) {
  console.error(error.message);
}