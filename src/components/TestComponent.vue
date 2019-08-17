<template lang="html">
  <div>
    <SortDropdown @sortOptionSelected="sortOptionSelected" />

    <GridListSwitch
      :isGridActive="true"
      :isListActive="false"
      @toggleGridView="showGridLayout()"
      @toggleListView="showListLayout()"
    />

    <div>
        <h1>
          <span v-if="isGrid">Show Grid</span>
          <span v-if="isList">Show List</span>
        </h1>
    </div>

    <pre class="pre pre-scrollable bg-primary text-white">
      {{ myData }}
    </pre>

  </div>
</template>

<script>
import GridListSwitch from './GridListSwitch'
import SortDropdown from './SortDropdown'

export default {
  data() {
    return {
      isGrid: true,
      isList: false,
      myData: [{
        createdDate: new Date(Date.now() - (1000 * 60 * 60)),
        price: 100
      },{
        createdDate: new Date(),
        price: 200
      }]
    }
  },
  components: { GridListSwitch, SortDropdown },
  methods: { showGridLayout, showListLayout, sortOptionSelected },
  mounted
}

function mounted() {
  // console.log(typeof this.myData)
  this.myData.sort(sortByDate.bind(this, 'dateNewest'));
}

function sortOptionSelected(sortOption) {
  if(sortOption === 'priceLowToHigh')
    this.myData.sort(sortByPrice.bind(this, sortOption));
  else if (sortOption === 'priceHighToLow')
    this.myData.sort(sortByPrice.bind(this, sortOption));
  else if (sortOption === 'dateOldest')
    this.myData.sort(sortByDate.bind(this, sortOption));
  else if (sortOption === 'dateNewest')
    this.myData.sort(sortByDate.bind(this, sortOption));
}

function sortByPrice(sortOption, b, a) {
  if(sortOption == 'priceLowToHigh') return b.price - a.price;
  else if(sortOption == 'priceHighToLow') return a.price - b.price;
}

function sortByDate(sortOption, a, b) {
  if(sortOption == 'dateNewest') return b.createdDate - a.createdDate;
  else if(sortOption == 'dateOldest') return a.createdDate - b.createdDate;
}

function showGridLayout() {
  this.isGrid = true;
  this.isList = false;
}

function showListLayout() {
  this.isGrid = false;
  this.isList = true;
}
</script>

<style lang="css" scoped>
</style>
