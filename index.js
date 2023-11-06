class RPGClass {
  /**
   * Constructor for the RPGClass class.
   *
   * @param {string} name - The name of the RPG class.
   * @param {string} description - The description of the RPG class.
   */
  constructor(name, description) {
      /** @private */
      this.name = name;

      /** @private */
      this.description = description;
  }

  /**
   * Getter method to retrieve the name of the RPG class.
   *
   * @returns {string} The name of the RPG class.
   */
  getName() {
      return this.name;
  }

  /**
   * Getter method to retrieve the description of the RPG class.
   *
   * @returns {string} The description of the RPG class.
   */
  getDescription() {
      return this.description;
  }
}

/**
* Function to create and pick an RPG class.
*
* @returns {RPGClass} The picked RPG class.
*/
function pickRPGClass() {
  // Create an array of available RPG classes
  const classes = [
      new RPGClass("Warrior", "A strong and skilled melee fighter."),
      new RPGClass("Mage", "A master of arcane magic."),
      new RPGClass("Rogue", "A stealthy and agile character."),
      new RPGClass("monk", "A healer and unarmed master."),
  ];

  // Pick a random RPG class from the array
  const randomIndex = Math.floor(Math.random() * classes.length);
  const pickedClass = classes[randomIndex];

  return pickedClass;
}

// Usage Example for pickRPGClass

// Pick an RPG class
const pickedClass = pickRPGClass();

// Display the picked RPG class in the console
console.log(`You have picked the ${pickedClass.getName()} class.`);
console.log(`Description: ${pickedClass.getDescription()}`);