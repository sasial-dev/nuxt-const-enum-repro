<template>
    <div>
        <div v-for="platform in visiblePlatforms" :key="platform.id"  @click="select(platform.id, SelectionType.Platform)" />
        <div v-for="station in visibleStations" :key="station.id" @click="select(station.id, SelectionType.Station)" />
        <div v-for="vehicle in visibleVehicles" :key="vehicle.id"  @click="select(vehicle.trip, SelectionType.Trip)" />
    </div>
</template>

<script setup lang="ts">
const visiblePlatforms = ref<PlatformInstance[]>([])
const visibleStations = ref<StationInstance[]>([])
const visibleVehicles = ref<VehicleInstance[]>([])

function select(id: string, type: SelectionType) {
    //
}
</script>
