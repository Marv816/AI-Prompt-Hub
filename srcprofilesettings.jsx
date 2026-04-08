/**
 * exportUtils.js - Handles document generation for the Business Hub.
 */
export const exportToWord = (title, content) => {
  const header = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${title}</title></head><body>
  `;
  const footer = "</body></html>";
  const sourceHTML = header + content.replace(/\n/g, '<br>') + footer;
  const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  const fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = `${title.replace(/\s+/g, '_')}.doc`;
  fileDownload.click();
  document.body.removeChild(fileDownload);
};

export const exportToPDF = () => window.print();

export const exportToGoogleDocs = (content) => {
  navigator.clipboard.writeText(content);
  window.open('https://docs.google.com/document/create', '_blank');
  alert("Copied! A new Google Doc is open. Press Ctrl+V (or Cmd+V) to paste.");
};