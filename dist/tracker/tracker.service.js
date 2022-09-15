"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
let TrackerService = class TrackerService {
    async fetchUrl(url) {
        let response = await axios_1.default.get(url);
        if (response.status == 200) {
            let data = response.data;
            const $ = (0, cheerio_1.load)(data);
            let product_name = $(".B_NuCI").text();
            let current_price = $('._30jeq3._16Jk6d').text();
            let actual_price = $('._3I9_wc._2p6lqe').text();
            let discount = $('._3Ay6Sb._31Dcoz').text();
            let image_src = $("._312yBx.SFzpgZ").find('img').attr('src');
            console.log(`product_name: ${product_name}\n current_price: ${current_price} actual_price: ${actual_price} discount: ${discount}\nimage_src:${image_src}`);
            return true;
        }
        else {
            console.log(`response: ${JSON.stringify(response.data)}`);
            return false;
        }
    }
};
TrackerService = __decorate([
    (0, common_1.Injectable)()
], TrackerService);
exports.TrackerService = TrackerService;
//# sourceMappingURL=tracker.service.js.map