<!-- ArmorEffectsComponent.vue -->
<template>
  <div class="p-4 bg-gray-700 rounded-lg shadow-md text-white">
    <h3 class="text-lg font-bold mb-2 text-yellow-300">
      Armor Effects
    </h3>
    <div class="max-h-[200px] overflow-y-auto">
      <ul class="flex flex-col gap-2 ">
        <li
          v-for="(item, index) in equippedItemsList"
          :key="index"
          class="flex flex-col gap-1"
        >
          <strong>{{ getItemName(item) }} (Level {{ item.level }})</strong>
          {{ item.description }}
          <strong>Total bonus: {{ formatNumber(item.level * item.multiplier * 100) }}%</strong>
        </li>
      </ul>
      <!-- Display the active set bonus -->
      <div v-if="activeSetBonus">
        <h4 class="text-md font-bold mt-4 text-green-300">
          Set Bonus: {{ activeSetBonus }} {{ useEvolveStore().getCurrentEvolutionInRomanLetters(activeSetBonus) }}
        </h4>
        <p>
          {{ setBonusDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useEquipmentStore } from '../stores/equipmentStore'
import { useGameStore } from '@/stores/gameStore'
import {getItemName, setBonuses} from '@/types/items/itemRegistry'
import {useEvolveStore} from '../stores/evolveStore'

// Access the equipment store
const equipmentStore = useEquipmentStore()
const gameStore = useGameStore()

const formatNumber = gameStore.formatNumber

// Compute the list of equipped items
const equippedItemsList = computed(() => {
  const equippedItems = equipmentStore.equippedItems
  const allEquipped = [
    equippedItems.head,
    equippedItems.body,
    equippedItems.legs,
    equippedItems.weapon,
    ...equippedItems.accessories,
  ]

  // Filter out null values and return the list
  return allEquipped.filter((item) => item !== null)
})

// Access the active set bonus from the equipment store
const activeSetBonus = computed(() => equipmentStore.activeSetBonus)


// Get the description of the active set bonus
const setBonusDescription = computed(() => {
  if (activeSetBonus.value) {
    const setBonus = setBonuses[activeSetBonus.value]
    if (!setBonus) return ''

    if (typeof setBonus.explanation === 'function') {
      return setBonus.explanation()
    }

    return setBonus.explanation || ''
  }
  return ''
})

</script>

<style scoped>
/* Add any necessary styles here */
</style>
