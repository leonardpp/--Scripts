const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateFormatted = new Date(birthDate);
    let age = today.getFullYear() - birthDateFormatted.getFullYear();
    const monthDifference = today.getMonth() - birthDateFormatted.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateFormatted.getDate())) {
      age--;
    }
    return age;
  };
   
  const birthDate = model.data;
  const age = calculateAge(birthDate);
  console.log(age);
  model.recebe = JSON.parse(age);

  //deu certo



