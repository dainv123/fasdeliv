export const convertKeyToLabel = key =>  {
  const word = key.replace(/_+/g, " ");

  return word[0].toUpperCase()+word.slice(1).toLowerCase();
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

export const getItemStyle = (isDragging, draggableStyle) => ({
  margin: `0 0 8px 0`,
  padding: 16,
  userSelect: "none",
  background: isDragging ? "lightgreen" : "",
  
  ...draggableStyle
});

export const getListStyle = () => ({ 
  padding: 8 
});

export const convertToJSON = (json) => {
  const dataStr = JSON.stringify(json);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  const exportFileDefaultName = 'template.json';
  const linkElement = document.createElement('a');

  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}