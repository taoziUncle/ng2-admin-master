import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgClass} from '@angular/common';
declare var $: any;
// A: 引入FileUpload模块
import {FileUploader} from "ng2-file-upload";


const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'ng2-bootstrap',
  templateUrl: './plugin.component.html'
})
export class PluginComponent implements OnInit {

  // B: 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader:FileUploader = new FileUploader({
    url: URL,
    method: "POST",
    itemAlias: "uploadedfile"
  });
  imgUrl="";
  // C: 定义事件，选择文件
  selectedFileOnChanged(event:any) {

    var files = event.target.files;
  
  }


  // D: 定义事件，上传文件
  uploadFile() {
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {

        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        console.log(JSON.stringify(tempRes));
      } else {
        // 上传文件后获取服务器返回的数据错误

      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }
  //E:拖曳上传配置方法
  public hasBaseDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileDropOver(e:any):void {

  }




  constructor(
      private parent:NavComponent,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.parent.setActiveByPath("bootstrap", this.parent.plugin);

    $("#file-1").fileinput({
      uploadUrl: '#', // you must set a valid URL here else you will get an error
      allowedFileExtensions : ['jpg', 'png','gif'],
      overwriteInitial: false,
      maxFileSize: 1000,
      maxFilesNum: 10,
      //allowedFileTypes: ['image', 'video', 'flash'],
      slugCallback: function(filename) {
        return filename.replace('(', '_').replace(']', '_');
      }
    });



  };



}
