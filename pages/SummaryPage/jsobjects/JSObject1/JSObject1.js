export default {
   async downloadFiles (url, fileName) {
         download(url, fileName.split("/").pop());
}}
