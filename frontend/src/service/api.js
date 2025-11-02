export const UploadFile = async (fileData) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await fetch(`${backendUrl}/upload`, {
        method: "POST",
        body: fileData,
    });
    return await response.json();
  }
    catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
