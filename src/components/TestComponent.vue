<template lang="html">
  <div>
    <CategorySortDropdown @categoryOptionSelected="categoryOptionSelected" />

    <SortDropdown @sortOptionSelected="sortOptionSelected" />
    <iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PL1QpxVYcCuCZYr_UDHYQ0O3z1uysRgTfa" frameborder="0" allowfullscreen></iframe>
    <GridListSwitch
      :isGridActive="true"
      :isListActive="false"
      @toggleGridView="showGridLayout()"
      @toggleListView="showListLayout()"
    />

    <div>
          <div v-if="isGrid">
            <pre class="pre pre-scrollable bg-primary text-white">
              <h1>
                Grid View
              </h1>
              {{ displayedData }}
            </pre>
          </div>
          <div v-if="isList">
            <pre class="pre pre-scrollable bg-primary text-white">
              <h1>
                List VIEW
              </h1>
              {{ displayedData }}
            </pre>
          </div>
    </div>



  </div>
</template>

<script>
import GridListSwitch from './GridListSwitch'
import SortDropdown from './SortDropdown'
import CategorySortDropdown from './CategorySortDropdown'

export default {
  data,
  components: { GridListSwitch, SortDropdown, CategorySortDropdown },
  methods: { showGridLayout, showListLayout, sortOptionSelected, categoryOptionSelected },
  mounted
}

function data() {
  return {
    isGrid: true,
    isList: false,
    displayedData: [],
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
}

function mounted() {
  this.displayedData = this.myData;
  this.displayedData.sort(sortByDate.bind(this, 'dateNewest'));
}

function categoryOptionSelected(category) {
    this.displayedData = this.myData.filter(
      item => category === 'all' ?
        true :
        item.type === category
    );
}

function sortOptionSelected(sortOption) {
  if(sortOption === 'priceLowToHigh')
    this.displayedData.sort(sortByPrice.bind(this, sortOption));
  else if (sortOption === 'priceHighToLow')
    this.displayedData.sort(sortByPrice.bind(this, sortOption));
  else if (sortOption === 'dateOldest')
    this.displayedData.sort(sortByDate.bind(this, sortOption));
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
