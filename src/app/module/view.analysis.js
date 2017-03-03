"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var restful_service_1 = require('../service/restful.service');
var router_1 = require('@angular/router');
var app_component_1 = require('../app.component');
var AnalysisComponent = (function () {
    function AnalysisComponent(restfulService, parent, route, router) {
        this.restfulService = restfulService;
        this.parent = parent;
        this.route = route;
        this.router = router;
    }
    AnalysisComponent.prototype.ngOnInit = function () {
        this.parent.setActiveByPath(this.parent.analysis);
    };
    ;
    AnalysisComponent = __decorate([
        core_1.Component({
            selector: 'app-analysis',
            templateUrl: "views/analytics.html",
        }), 
        __metadata('design:paramtypes', [restful_service_1.RestfulService, app_component_1.AppComponent, router_1.ActivatedRoute, router_1.Router])
    ], AnalysisComponent);
    return AnalysisComponent;
}());
exports.AnalysisComponent = AnalysisComponent;
//# sourceMappingURL=view.analysis.js.map