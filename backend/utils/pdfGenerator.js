const PDFDocument = require('pdfkit');

const generateInvoicePDF = (order, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  doc.pipe(res);

  doc.fontSize(18).text('Order Invoice', { align: 'center' });
  doc.moveDown();

  doc.fontSize(12).text(`Order Date: ${order.orderDate}`);
  doc.text(`Total Amount: ₹${order.totalAmount}`);
  doc.moveDown();

  order.items.forEach(item => {
    doc.text(`${item.name} - ₹${item.price} x ${item.quantity}`);
  });

  doc.end();
};

module.exports = generateInvoicePDF;
