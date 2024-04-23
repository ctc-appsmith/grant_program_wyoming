export default {
  isCurrentPage: (page) => {
    if (appsmith.store.page === page) return true;
    return false;
  },
  
  setCurrentPage: (page) => {
    storeValue('page', page);
    navigateTo(page);
  },
  
  updateAllAssignments: async () => {
    // loop through the updated rows - you will run the update query for each updated row of the Table widget
    for (let i = 0; i < PrequalRev_table.updatedRows.length; i++) {
      
      // initialize a helper array that will contain elements of type "columnName='updatedValue'"
      let queryFields = [];
      
      // get the updated fields of the row as a JSON Object
      let item = PrequalRev_table.updatedRows[i].updatedFields;
      
      // store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
      await storeValue('reviewID', PrequalRev_table.updatedRows[i].allFields.reviewID);
      
      // initialize a counter to count the number of columns edited
      let j = 0;
      
      // loop through the properties of the JSON Object (each updated field)
      for (let key of Object.keys(item)) {
        // save each updated field as an array element "columnName='updatedValue'"
        queryFields[j] = key + "='" + item[key] + "'";
        j++;
      }
      // store the array as string to be used after the SET keyword in the update query
      await storeValue('query', queryFields.join());
      
      // run the query to update each row - Do not forget to turn OFF the Prepared Statement setting
      await updateAllAssignments1.run();
			await updateLastChangedBy_reviews.run();
    }
  },

  updateAllAssignments_ReviewAnswers: async () => {
    for (let i = 0; i < PreQualRevAnswers_table.updatedRows.length; i++) {
      let queryFields = [];
      let item = PreQualRevAnswers_table.updatedRows[i].updatedFields;
      await storeValue('answerID', PreQualRevAnswers_table.updatedRows[i].allFields.answerID);
      let j = 0;
      for (let key of Object.keys(item)) {
        queryFields[j] = key + "='" + item[key] + "'";
        j++;
      }
      await storeValue('query', queryFields.join());
      await updateAllAssignments2.run();
			await updateLastChangedBy_answers.run();
    }
  }
};