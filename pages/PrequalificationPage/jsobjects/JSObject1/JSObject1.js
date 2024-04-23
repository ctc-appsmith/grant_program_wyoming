export default {
	updateColumnName: () => {
		var sliderValue = CategorySlider1.value;
    var newColumnName = sliderValue + " Applicant Question"; // Modify this according to your naming convention
    // Get the current properties of the table
    var tableProps = Table4.props;

    // Create a copy of the columns array
    var updatedColumns = [...tableProps.columns];

    // Update the column name
    updatedColumns[0].label = newColumnName; // Assuming the column you want to update is the first one

    // Set the updated columns back to the table
    $data.table1.props = { ...tableProps, columns: updatedColumns };
	}
};
