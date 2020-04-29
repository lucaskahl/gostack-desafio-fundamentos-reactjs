const formatDate = (date: Date): string => {
  const convertedDate = new Date(date);

  return convertedDate.toLocaleDateString('pt-BR');
};

export default formatDate;
