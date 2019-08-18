<template lang="html">
  <div>
    <div class="navbar navbar-expand-lg navbar-light bg-light justify-content-around">
      <SearchBar />
      <CategorySortDropdown @categoryOptionSelected="categoryOptionSelected" />
      <SortDropdown @sortOptionSelected="sortOptionSelected" />
      <GridListSwitch
        :isGridActive="true"
        :isListActive="false"
        @toggleGridView="showGridLayout()"
        @toggleListView="showListLayout()"
      />
    </div>
    <div>
      <div v-if="isGrid">
        <CourseRow :content="displayedData" />
      </div>
      <div v-if="isList">
        <CourseListItem
          v-for="(course, i) in displayedData"
          :key="i"
          :content="course"
        />
        <!-- <pre class="pre pre-scrollable bg-primary text-white">
          <h1>
            List VIEW
          </h1>
          <p>{{ displayedData }}</p>
        </pre> -->
      </div>
    </div>
  </div>
</template>

<script>
import GridListSwitch from './GridListSwitch'
import CourseListItem from './CourseListItem'
import SortDropdown from './SortDropdown'
import SearchBar from './SearchBar'
import CourseRow from './CourseRow'
import CategorySortDropdown from './CategorySortDropdown'

export default {
  data,
  props:["content"],
  components: { GridListSwitch, SearchBar, SortDropdown, CategorySortDropdown, CourseRow, CourseListItem  },
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
  this.displayedData = this.content;
  this.content.sort(sortByDate.bind(this, 'dateNewest'));
}

function categoryOptionSelected(category) {
    this.displayedData = this.content.filter(
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
    this.displayedData.sort(sortByDate.bind(this, sortOption));
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
