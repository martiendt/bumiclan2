<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'

const scoreStore = useScoreStore()

const data: any = []

for (const score of scoreStore.$state.scores) {
  data.push({
    name: score.name,
    score:
      score.physique.score +
      score.mental.score +
      score.health.score +
      score.kpi.score +
      score.training.score +
      score.contributionMeeting.score
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
    <div class="main-content-header flex-col items-center justify-center gap-4">
      <img src="@/assets/images/clash-of-clan.png" class="max-w-sm lg:max-w-xl" alt="" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[{ name: 'Bumiclan', path: '/' }, { name: 'Clash of Clan' }]"
      />
    </div>
    <div class="main-content-body mx-auto max-w-xl">
      <div class="card card-template">
        <div class="flex flex-wrap gap-2">
          <button class="btn btn-sm btn-primary">January 2024</button>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr class="basic-table-row">
                <th class="basic-table-head">#</th>
                <th class="basic-table-head">Name</th>
                <th class="basic-table-head text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr class="basic-table-row" v-for="(el, index) in data" :key="el.name">
                <td class="basic-table-body">{{ index + 1 }}</td>
                <td class="basic-table-body expand">{{ el.name }}</td>
                <td class="basic-table-body text-center">{{ el.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
