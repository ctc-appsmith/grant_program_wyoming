export default {
isCurrentPage: (page) => {
	if(appsmith.store.page === page) return true;
	return false;
},
	
setCurrentPage: (page) => {
	storeValue('page' , page);
	navigateTo(page)
},
	

// This updates who is assigned Prequalification reviews on the left table on the My Reviews page.
updateAssignReviewsPreQ: async () => {

		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<myPrequalReview_Table.updatedRows.length;i++){

			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];

			//get the updated fields of the row as a JSON Object
			let item=myPrequalReview_Table.updatedRows[i].updatedFields;

			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('reviewID',myPrequalReview_Table.updatedRows[i].allFields.reviewID);

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
			await updateAssignReviews_PreQ.run();
			await updateLastChangedBy_reviews.run();

		}
	},
	

// This updates who is assigned reviews on the left table on the My Reviews page.
updateAssignReviewsApps: async () => {

		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<myReview_table.updatedRows.length;i++){

			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];

			//get the updated fields of the row as a JSON Object
			let item=myReview_table.updatedRows[i].updatedFields;

			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('reviewID',myReview_table.updatedRows[i].allFields.reviewID);

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
			await updateAssignReviews_App.run();

		}
	},

	

// This updates the Application Review Details on the My Reviews page.
updateReviewAnswers: async () => {

		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<Table2.updatedRows.length;i++){

			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];

			//get the updated fields of the row as a JSON Object
			let item=Table2.updatedRows[i].updatedFields;

			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('answerID',Table2.updatedRows[i].allFields.answerID);

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
			await updateReviewAnswers1.run();

		}
	},
// This updates the Prequalification Review Details on the My Reviews page.
updatePreQReviewAnswers: async () => {

		//loop through the updated rows - you will run the update query for each updated row of the Table widget
		for (let i=0;i<Table_2.updatedRows.length;i++){

			//initialize a helper array that will contain elements of type "columnName='updatedValue'"
			let queryFields = [];

			//get the updated fields of the row as a JSON Object
			let item=Table_2.updatedRows[i].updatedFields;

			//store the id of the row to Appsmith store - note that this field is not editable in the table and is used in the WHERE clause of the update query
			await storeValue('answerID',Table_2.updatedRows[i].allFields.answerID);

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
			await updateReviewAnswers_PreQ.run();
			await updateLastChangedBy_answers.run();

		}
	}
}
		
		
