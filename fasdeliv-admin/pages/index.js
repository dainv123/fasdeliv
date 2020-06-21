import React, { Component } from "react";
import Head from "next/head"
import MainStyle from "./style"
import config from "./config";
import Loader from "./components/Loader"
import TheHeader from "./components/TheHeader"
import TheFooter from "./components/TheFooter"
import ListComponent from "./components/ListComponent"
import DetailComponent from "./components/DetailComponent"
import ActionBarComponent from "./components/ActionBarComponent"

import { convertToJSON } from "./utility"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false,
      employeeList: [],
      employeeCurrent: {}
    };
  }

  setEmployeeCurrent(id) {
    const employeeCurrent = this.state.employeeList.find(item => item.id === id) || {};
    
    this.setState({
      employeeCurrent
    });
  }

  saveEmployeeCurrent(data) {
    const employeeList = this.state.employeeList.map(employee => employee.id === data.id ? data : employee)
    
    this.setState({ 
      employeeList 
    });

    alert(config.saveSuccessMessage);
  }

  exportEmployeeData() {
    const { employeeList, employeeCurrent } = this.state;

    convertToJSON({ 
      employeeList, 
      employeeCurrent 
    });
  }

  importEmployeeData(event) {
    const fr = new FileReader();
    const files = event.target.files;
    
    if (files.length <= 0) {
      alert(config.importFailureMessage);

      return false;
    }

    fr.onload = (e) => { 
      try {
        const { employeeCurrent, employeeList } = JSON.parse(e.target.result);

        this.setState({
          employeeList, 
          employeeCurrent
        });

        alert(config.importSuccessMessage); 
      } catch (error) {
        alert(config.importFailureMessage);
      }
    }

    fr.readAsText(files.item(0));
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(config.getEmployeesURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false, employeeList: result.data
          });
        },
        () => {
          this.setState({ 
            isLoading: false 
          });

          alert(config.getDataFailureMessage);
        }
      )
  }

  render() {
    return (
      <div>
        <Head>
          <title>FasDeliv Admin</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </Head>

        <main className="container">
         <TheHeader></TheHeader>

          <div className="grid">
            <ActionBarComponent
              exportEmployeeData={() => this.exportEmployeeData()}
              importEmployeeData={(e) => this.importEmployeeData(e)}
            />

            <ListComponent 
              employeeList={this.state.employeeList} 
              setEmployeeCurrent={id => this.setEmployeeCurrent(id)}
            />

            <DetailComponent 
              key={this.state.employeeCurrent.id} 
              employee={this.state.employeeCurrent} 
              onSaveEmployee={(e) => this.saveEmployeeCurrent(e)}
            />
          </div>

          { this.state.isLoading && <Loader></Loader> }
        </main>

        <TheFooter></TheFooter>
        <MainStyle></MainStyle>
      </div>
    )
  }
}

export default Home;

