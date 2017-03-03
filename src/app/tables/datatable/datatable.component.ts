import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgClass} from '@angular/common';


@Component({
  selector: 'ng2-table',

  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {

  tableData = [
    {id: 1, username: 'Geek', age: 42, salary: 1234},
    {id: 2, username: 'TOM', age: 52, salary: 2345.64},
    {id: 3, username: 'King', age: 51, salary: 8888},
    {id: 4, username: 'QuEEN', age: 12, salary: 6663},
    {id: 5, username: 'JACK', age: 13, salary: 4567},
    {id: 6, username: 'KGC', age: 15, salary: 9870.123},
    {id: 7, username: 'rose', age: 23, salary: 3456.78},
    {id: 8, username: 'john', age: 78, salary: 6234},
    {id: 9, username: 'lily', age: 56, salary: 7234},
    {id: 10, username: 'hello', age: 34, salary: 8234},
    {id: 11, username: 'james', age: 58, salary: 9234}
  ];



  constructor(
      private parent:NavComponent,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.parent.setActiveByPath("tables", this.parent.datatable);

  };
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }


  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    },
    mode : "inline",
    delete:{
      confirmDelete : true
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  onDeleteConfirm(event): void {
    console.log("delete function");
    /*if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }*/

  }


}
