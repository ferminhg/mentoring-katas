function gradingStudents(grades) {
	return grades.map((studentGrade) => {
		const round = Math.ceil((grades + 1) / 5) * 5;
		if (studentGrade < 38) {
			return studentGrade;
		} else if (round - studentGrade < 3) return studentGrade + 5;
	});
}
