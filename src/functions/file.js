export const getSize = (size) => {
  if (size) {
    let fileSize = size / 1024; // Size in KB
    let sizeUnit = "KB"; // Default to KB

    if (fileSize > 1024) {
      // More than 1 MB
      fileSize = fileSize / 1024; // Convert to MB
      sizeUnit = "MB";
    }

    fileSize = fileSize.toFixed(2); // Format size to two decimal places

    return `${fileSize} ${sizeUnit}`;
  }
};
