import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  public lineCharts = "/main/lineCharts";
  public pieCharts = "/main/pieCharts";
  public dashboard = "/main/dashboard";
  public datatable = "/main/datatable";
  public bootstrap = "/main/bootstrap-static";
  public plugin = "/main/bootstrap-plugin";

  public loginUser = {};
  hello = "";
  routers = [
    {
      href: this.dashboard,
      name: "Dashboard",
      type: false
    },
    {
      href: 'charts',
      name: "Charts",
      type: true,
      child: [
        {href: this.lineCharts, name: "Line Charts"},
        {href: this.pieCharts, name: "Pie Charts"}
      ]
    },
    {
      href: 'tables',
      name: "Tables",
      type: true,
      child: [
        {href: this.datatable, name: "Data Tables"}
      ]
    },
    {
      href: 'bootstrap',
      name: "Bootstrap",
      type: true,
      child: [
        {href: this.bootstrap, name: "Static Components"},
        {href: this.plugin, name: "Plugin Components"}
      ]
    }

  ];

  ngOnInit() {
    var name = this.getQueryString("account");
    var password = this.getQueryString("pwd");
    this.loginUser = {
      uname: name,
      pwd: password
    }
    if (name) {
      this.hello = name;
    } else {
      this.hello = sessionStorage.getItem("name");
    }
  };

  setActiveByPath = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        if (!router.active) {
          router.active = true;
          if (childPath != "") {
            for (var j = 0; j < router.child.length; j++) {
              var route = router.child[j];
              if (route.href == childPath) {
                route.active = true;
              }
            }
          }
        } else {
          router.active = false;
        }
      }
    }
  };
  changeNavStatis = function (path) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        router.active = true;
      }
    }
  };
  changeChildNavStatis = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {

        for (var j = 0; j < router.child.length; j++) {
          var route = router.child[j];
          if (route.href != childPath) {
            route.active = false;
          } else {
            route.active = true;
          }
        }
      }

    }
  };
  getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return r[2];
    return null;
  }


}
