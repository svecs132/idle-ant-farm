export const arcticTundraSet = [
  {
    id: 'tundra-helm',
    name: 'Tundra Helm',
    type: 'equipment',
    description: 'Helm that enhances defense by 0.7% per level.',
    equipmentType: 'armor',
    slotType: 'head',
    set: 'Arctic Tundra Set',
    rarity: 'epic',
    level: 1,
    maxLevel: 300,
    multiplier: 0.007, // Refactored multiplier
    effect: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyDefenseModifier += bonusMultiplier
      return true
    },
    onRemove: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyDefenseModifier -= bonusMultiplier
    },
  },
  {
    id: 'tundra-armor',
    name: 'Tundra Armor',
    type: 'equipment',
    description: 'Body armor that increases defense by 1.1% per level.',
    equipmentType: 'armor',
    slotType: 'body',
    set: 'Arctic Tundra Set',
    rarity: 'epic',
    level: 1,
    maxLevel: 300,
    multiplier: 0.011, // Refactored multiplier
    effect: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyDefenseModifier += bonusMultiplier
      return true
    },
    onRemove: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyDefenseModifier -= bonusMultiplier
    },
  },
  {
    id: 'tundra-greaves',
    name: 'Tundra Greaves',
    type: 'equipment',
    description: 'Leg armor that increases movement speed by 0.6% per level.',
    equipmentType: 'armor',
    slotType: 'legs',
    set: 'Arctic Tundra Set',
    rarity: 'epic',
    level: 1,
    maxLevel: 300,
    multiplier: 0.006, // Refactored multiplier
    effect: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armySpeedModifier += bonusMultiplier
      return true
    },
    onRemove: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armySpeedModifier -= bonusMultiplier
    },
  },
  {
    id: 'tundra-cloak',
    name: 'Tundra Cloak',
    type: 'equipment',
    description: 'A cloak that increases health regeneration by 1.3% per level.',
    equipmentType: 'accessory',
    slotType: 'accessory',
    set: 'Arctic Tundra Set',
    rarity: 'epic',
    level: 1,
    maxLevel: 300,
    multiplier: 0.013, // Refactored multiplier
    effect: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyRegenModifier += bonusMultiplier
      return true
    },
    onRemove: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyRegenModifier -= bonusMultiplier
    },
  },
  {
    id: 'tundra-blade',
    name: 'Tundra Blade',
    type: 'equipment',
    description: 'An icy blade that increases attack by 0.8% per level.',
    equipmentType: 'weapon',
    slotType: 'weapon',
    set: 'Arctic Tundra Set',
    rarity: 'epic',
    level: 1,
    maxLevel: 300,
    multiplier: 0.008, // Refactored multiplier
    effect: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyAttackModifier += bonusMultiplier
      return true
    },
    onRemove: ({adventureStore}, item) => {
      const bonusMultiplier = item.multiplier * item.level
      adventureStore.armyAttackModifier -= bonusMultiplier
    },
  },
]