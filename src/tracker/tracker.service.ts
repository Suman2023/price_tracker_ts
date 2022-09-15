import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { load } from 'cheerio';
import * as fs from 'fs';

@Injectable()
export class TrackerService {
  async fetchUrl(url: string): Promise<boolean> {
    let response = await axios.get(url);
    if (response.status == 200) {
      let data = response.data;
      //   const $ = load(fs.readFileSync('C:/Users/suman/Projects/nest_projects/price_tracker/src/tracker/flipkart.html'))
      const $ = load(data);
      let product_name = $(".B_NuCI").text()
      let current_price = $('._30jeq3._16Jk6d').text();
      let actual_price = $('._3I9_wc._2p6lqe').text();
      let discount = $('._3Ay6Sb._31Dcoz').text();
      let image_src = $("._312yBx.SFzpgZ").find('img').attr('src')
      //sendMail(https://dev.to/silvenleaf/easiest-way-to-send-emails-with-javascript-by-silvenleaf-252b)

      console.log(
        `product_name: ${product_name}\n current_price: ${current_price} actual_price: ${actual_price} discount: ${discount}\nimage_src:${image_src}`,
      );
      return true;
    } else {
      console.log(`response: ${JSON.stringify(response.data)}`);
      return false;
    }
  }
}
