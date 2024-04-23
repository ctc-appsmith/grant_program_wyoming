export default {
isCurrentPage: (page) => {
	if(appsmith.store.page === page) return true;
	return false;
},
	
setCurrentPage: (page) => {
	storeValue('page' , page);
	navigateTo(page)
},
	
updateAllAppResponses: async () => {
		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<generalTable1.updatedRows.length;i++){
			
			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];
			
			//get the updated fields of the row as a JSON Object
			let item=generalTable1.updatedRows[i].updatedFields;
			
			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('appDetailsID',generalTable1.updatedRows[i].allFields.appDetailsID);
			
			//initialize a counter to count the number of columns edited
			let j=0;
			
			//loop through the properties of the JSON Object (each updated field)
			for (let key of Object.keys(item)){
				//save each updated field as an array element "columnName='updatedValue'"
				queryFields[j]=key + "='"+ item[key] + "'";
				j++;
			}
			//store the array as string to be used after the SET keyword in the update query
			await storeValue('query',queryFields.join());
			
			//run the query to update each row - Do not forget to turn OFF the Prepared Statement setting
			await updateAllResponses1.run();
		}
	},
updateAllAssignments: async () => {
		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<ReviewTable.updatedRows.length;i++){
			
			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];
			
			//get the updated fields of the row as a JSON Object
			let item=ReviewTable.updatedRows[i].updatedFields;
			
			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('reviewID',ReviewTable.updatedRows[i].allFields.reviewID);
			
			//initialize a counter to count the number of columns edited
			let j=0;
			
			//loop through the properties of the JSON Object (each updated field)
			for (let key of Object.keys(item)){
				//save each updated field as an array element "columnName='updatedValue'"
				queryFields[j]=key + "='"+ item[key] + "'";
				j++;
			}
			//store the array as string to be used after the SET keyword in the update query
			await storeValue('query',queryFields.join());
			
			//run the query to update each row - Do not forget to turn OFF the Prepared Statement setting
			await updateAllAssignments1.run();
			await updateLastChangedBy_tasks.run()
		}
	},	
updateAllReviewDetails: async () => {
		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<Table1.updatedRows.length;i++){
			
			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];
			
			//get the updated fields of the row as a JSON Object
			let item=Table1.updatedRows[i].updatedFields;
			
			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('answerID',Table1.updatedRows[i].allFields.answerID);
			
			//initialize a counter to count the number of columns edited
			let j=0;
			
			//loop through the properties of the JSON Object (each updated field)
			for (let key of Object.keys(item)){
				//save each updated field as an array element "columnName='updatedValue'"
				queryFields[j]=key + "='"+ item[key] + "'";
				j++;
			}
			//store the array as string to be used after the SET keyword in the update query
			await storeValue('query',queryFields.join());
			
			//run the query to update each row - Do not forget to turn OFF the Prepared Statement setting
			await updateAllReviewDetails1.run();
			await updateLastChangedBy_subtasks.run()
		}
	}
}
