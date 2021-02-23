function gradingStudents(grades) {
	return grades.map((studentGrade) => {
		const round = Math.ceil((grade + 1) / 5) * 5;
		if (studentGrade < 38) {
			return studentGrade;
		}
		return studentGrade;
	});
}
