<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'

const scoreStore = useScoreStore()

const data: any = []

for (const score of scoreStore.$state.scores) {
  data.push({
    name: score.name,
    description: score.physique.description,
    score: score.physique.score
  })
}

function compare(a: any, b: any) {
  if (a.score > b.score) {
    return -1
  }
  if (a.score < b.score) {
    return 1
  }
  return 0
}

data.sort(compare)
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <div class="flex flex-col gap-4">
        <h1>Physique</h1>
        <component
          :is="BaseBreadcrumb"
          :breadcrumbs="[{ name: 'Bumiclan', path: '/' }, { name: 'Physique' }]"
        />
      </div>
    </div>
    <div class="main-content-body">
      <div class="card card-template">
        <div class="flex flex-wrap gap-2">
          <button class="btn btn-sm btn-primary">February 2024</button>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr class="basic-table-row">
                <th class="basic-table-head">#</th>
                <th class="basic-table-head w-50%">Name</th>
                <th class="basic-table-head w-50%">Description</th>
                <th class="basic-table-head text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr class="basic-table-row" v-for="(el, index) in data" :key="el.name">
                <td class="basic-table-body">{{ index + 1 }}</td>
                <td class="basic-table-body">{{ el.name }}</td>
                <td class="basic-table-body">{{ el.description }}</td>
                <td class="basic-table-body text-center">{{ el.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
