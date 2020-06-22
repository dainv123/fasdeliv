<template>
  <div>
    <main class="container">
      <the-header :config="config"></the-header>

      <div class="grid">
        <list-component 
          :config="config" 
          :employee-list="employeeList"
          @update-current="updateEmployeeCurrent"
        >
        </list-component>
        <detail-component 
          :config="config"
          :employee="employeeCurrent"
        >
        </detail-component>
      </div>

      <loader v-if="isLoading"></loader>
    </main>
    <the-footer :config="config"></the-footer>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import ListComponent from "@/components/ListComponent";
import DetailComponent from "@/components/DetailComponent";

export default {
  name: "Home",

  components: {
    Loader,
    TheHeader,
    TheFooter,
    ListComponent,
    DetailComponent
  },

  data() {
    return {
      isLoading: false,
      employeeList: [],
      employeeCurrent: {},
      config: {
        siteName: "FasDeliv Consumer",
        siteTitle: "Welcome to",
        siteDescription: "This is Consumer Page - Use Vue (My Template)",
        email: "dainv0402@gmail.com",
        listTitle: "Employee List",
        detailTitle: "Detail",
        detailDescription: "Please select employee to see detailed information",
        detailDescriptionSelected: "Personal information of employee Id",
        importButton: "Import",
        hideImportButton: "Hide import",
        exportButton: "Export",
        undoButton: "Undo",
        redoButton: "Redo",
        saveButton: "Save employee",
        copyRightLabel: "Powered by Dai Nguyen",
        getEmployeesURL: "http://dummy.restapiexample.com/api/v1/employees",
        saveSuccessMessage: "Save success..",
        importSuccessMessage: "Import success..",
        importFailureMessage: "Import failed..",
        getDataFailureMessage: "Get data failed.."
      }
    };
  },

  created() {
    this.fetchEmployeesData();
  },

  methods: {
    updateEmployeeCurrent(id) {
      this.employeeCurrent = this.employeeList.find(item => item.id === id) || {};
    },

    fetchEmployeesData() {
      this.isLoading = true;
      
      fetch(this.config.getEmployeesURL)
        .then(res => res.json())
        .then(
          (result) => {
            this.isLoading = false;
            this.employeeList = result.data;
          },
          () => {
            this.isLoading = false;
            alert(this.config.getDataFailureMessage);
          }
        )
    }
  }
};
</script>

<style lang="scss">
@import "./home.scss";
</style>