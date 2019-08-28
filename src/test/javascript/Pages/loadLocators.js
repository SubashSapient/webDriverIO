const yaml = require('yaml');
const fs   = require('fs');

// Get document, or throw exception on error
const doc = yaml.parse(fs.readFileSync('./Locators.yml', 'utf8'));

const getlocator = (pageName,locType,locatorName)=> {
    let loc = doc[pageName];
    for(let l in loc) {
       let loca = loc[l];
       for(l1 in loca) {
           if(l1===locType) {
                let l2 = loca[l1];
                for(l3 in l2) {
                    if(l3===locatorName) {
                        console.log(l2[l3]);
                        return l2[l3];
                    }  
                }
            }
        }
    }
}



getlocator("homePage","ID","username");

getlocator("homePage","xpath","searchBox");