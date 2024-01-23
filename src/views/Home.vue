<template>
  <div class="home">
    <TCard :class="['p-4', 'bg-custom-1', 'text-white']">
      <TRow>
        <TCol t1></TCol>
        <TCol t11>
          <div class="text-2xl font-square font-extrabold text-yellow-400">Guild Cartel BarraDois</div>
          <div class="font-bold"><span class="text-blue-500">Aliança</span> | StormRage | US | Retail</div>
        </TCol>
      </TRow>
      <TRow>
        <TCol t3>
          <TCard :class="['bg-red-400', 'text-white']"> a </TCard>
        </TCol>
        <TCol t3>
          <TCard :class="['bg-red-400', 'text-white']"> a </TCard>
        </TCol>
        <TCol t3>
          <TCard :class="['bg-red-400', 'text-white']"> a </TCard>
        </TCol>
        <TCol t3>
          <TCard :class="['bg-red-400', 'text-white']"> a </TCard>
        </TCol>
      </TRow>
    </TCard>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({}),
}
</script>
