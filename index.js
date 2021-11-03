import { franc, francAll } from 'franc'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var langs = require('langs');
let langcode = franc(process.argv[2]);
const obj = langs.where("2", langcode);
if (obj) { console.log(obj.name); }
else {
    console.log("error");
}