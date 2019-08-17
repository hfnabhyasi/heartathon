<template lang="html">
  <div>
    <CategorySortDropdown @categoryOptionSelected="categoryOptionSelected" />
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
import CategorySortDropdown from './CategorySortDropdown'

export default {
  data() {
    return {
      isGrid: true,
      isList: false,
      myData: [{
        createdDate: new Date(Date.now() - (1000 * 60 * 60)),
        price: 100,
        type: 'yoga'
      },{
        createdDate: new Date(),
        price: 200,
        type: 'meditation'
      },{
        createdDate: new Date(),
        price: 350,
        type: 'relaxation'
      }]
    }
  },
  components: { GridListSwitch, SortDropdown, CategorySortDropdown },
  methods: { showGridLayout, showListLayout, sortOptionSelected, categoryOptionSelected},
  mounted
}

function mounted() {
  this.myData.sort(sortByDate.bind(this, 'dateNewest'));
}

function categoryOptionSelected(category) {
    alert(category);
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
