function Character (name) {
    this.name = name;
    this.startingLevel = 0;
    this.startingHealth = 2;
    this.startingActions = 3;
    this.specialAbility = 0;
    this.abilityL0to6 = "";
    this.abilityL7to18 = "";
    this.abilityL19to42a = "";
    this.abilityL19to42b = "";
    this.abilityL43a = "";
    this.abilityL43b = "";
    this.abilityL43c = "";
}

function Ability (name, description) {
    this.name = name;
    this.description = "";
}

function Inventory (leftHand, rightHand, 
                    backpack1, backpack2, backpack3) {
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.backpack1 = backpack1;
    this.backpack2 = backpack2;
    this.backpack3 = backpack3;
}
